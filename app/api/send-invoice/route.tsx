import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";
import { renderToBuffer } from "@react-pdf/renderer";
import InvoiceDocument from "@/components/Checkoutpage/InvoiceDocument/InvoiceDocument";
import { priceOrder } from "@/lib/pricing";
import {
  EMAIL_REGEX,
  FIELD_LIMITS,
  LimitedField,
  checkTextField,
  getInvoiceDeadline,
  isValidPhone,
} from "@/utils/checkout";
import { countries } from "@/data/Countries/countries";

export const runtime = "nodejs";

// Hard cap before the per-field rules below; anything longer is not a real form.
const MAX_FIELD_LENGTH = 300;

const FIELD_LABELS: Record<LimitedField, string> = {
  fullName: "Full name",
  email: "Email address",
  company: "Company",
  billingContact: "Billing contact",
  poNumber: "PO number",
  addressLine1: "Address line 1",
  addressLine2: "Address line 2",
  city: "Town / city",
  postcode: "Postcode",
  phone: "Phone number",
  invoiceEmail: "Invoice email",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Trimmed string, "" when missing, null when not a string or too long. */
const text = (value: unknown): string | null => {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > MAX_FIELD_LENGTH ? null : trimmed;
};

const badRequest = (error: string) => NextResponse.json({ error }, { status: 400 });

function todayIn(timeZone: string | undefined) {
  try {
    return new Date().toLocaleDateString("en-GB", { timeZone });
  } catch {
    return new Date().toLocaleDateString("en-GB");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fields = {
      fullName: text(body.fullName),
      email: text(body.email),
      company: text(body.company),
      billingContact: text(body.billingContact),
      poNumber: text(body.poNumber),
      phone: text(body.phone),
      addressLine1: text(body.addressLine1),
      addressLine2: text(body.addressLine2),
      city: text(body.city),
      postcode: text(body.postcode),
      billingCountry: text(body.billingCountry),
      invoiceEmail: text(body.invoiceEmail),
    };
    if (Object.values(fields).some((v) => v === null)) return badRequest("Invalid input data");
    const f = fields as Record<keyof typeof fields, string>;

    if (!f.fullName || !EMAIL_REGEX.test(f.email)) return badRequest("Invalid input data");
    if (!f.addressLine1 || !f.city || !f.postcode || !f.billingCountry) {
      return badRequest("Please complete the billing address");
    }
    // Same rules as the form: short, plain text only, so nobody can put
    // messages or links on an invoice sent from our address.
    for (const name of Object.keys(FIELD_LIMITS) as LimitedField[]) {
      const problem = checkTextField(name, f[name]);
      if (problem) return badRequest(`${FIELD_LABELS[name]}: ${problem}`);
    }
    if (!countries.includes(f.billingCountry)) return badRequest("Select the billing country from the list");
    if (f.phone && !isValidPhone(f.phone)) return badRequest("Invalid phone number");

    const sendToSomeoneElse = body.sendToSomeoneElse === true;
    if (sendToSomeoneElse && !EMAIL_REGEX.test(f.invoiceEmail)) {
      return badRequest("Invalid invoice email address");
    }

    // Price comes from Contentful and DISCOUNT_CODES, never from the browser.
    const priced = await priceOrder({
      slug: body.slug,
      classSysId: body.classSysId,
      country: body.country,
      quantity: body.quantity,
      discountCode: body.discountCode,
    });
    if (!priced.ok) return badRequest(priced.error.replace(" You have not been charged.", ""));
    const { course, classDetail, totals, isUk } = priced.order;

    const contactEmail = f.email;
    const recipient = sendToSomeoneElse ? f.invoiceEmail : contactEmail;
    const sentToSomeoneElse = recipient.toLowerCase() !== contactEmail.toLowerCase();
    const deadline = getInvoiceDeadline(classDetail.startDate, classDetail.timeZone);
    const invoiceNumber = Date.now().toString();

    const logo = await readFile(path.join(process.cwd(), "public", "logo192.png"));
    const pdfBuffer = await renderToBuffer(
      <InvoiceDocument
        data={{
          fullname: f.fullName,
          company: f.company,
          billingContact: f.billingContact,
          poNumber: f.poNumber,
          phoneNumber: f.phone,
          email: recipient,
          addressLines: [
            f.addressLine1,
            f.addressLine2,
            [f.city, f.postcode].filter(Boolean).join(" "),
            f.billingCountry,
          ].filter(Boolean),
          quantity: totals.quantity,
        }}
        selectedCourse={{
          startDate: classDetail.startDate,
          endDate: classDetail.endDate,
          timeZone: classDetail.timeZone,
          acronym: course.acronym,
        }}
        totals={totals}
        isUk={isUk}
        deadline={deadline}
        invoiceNumber={invoiceNumber}
        today={todayIn(classDetail.timeZone)}
        logoSrc={logo}
      />
    );

    // Greet whoever receives the invoice: the billing contact if given,
    // a neutral greeting if it goes to someone else, otherwise the student.
    const greetingName = f.billingContact || (sentToSomeoneElse ? "Sir/Madam" : f.fullName);
    const safeCourseName = escapeHtml(course.title ?? "");
    const safeCustomerName = escapeHtml(greetingName);
    const paymentTerms = deadline.isPastDeadline
      ? "Payment is due immediately, as the class starts in less than 14 days. Your place is confirmed once payment is received."
      : deadline.label
        ? `Payment is due by <b>${escapeHtml(deadline.label)}</b> (14 days before the class starts). We will hold your place until then, and it is confirmed once payment is received.`
        : "Payment is due at least 14 days before the class starts. We will hold your place until then, and it is confirmed once payment is received.";

    const transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const safeFileName = f.fullName.replace(/[^\w.-]+/g, "_").slice(0, 60) || "Customer";

    await transporter.sendMail({
      from: '"ValueHut Consulting" <info@valuehut.co>',
      to: recipient,
      // When the invoice goes to someone else, the person who booked sees it too.
      cc: sentToSomeoneElse ? contactEmail : undefined,
      bcc: "info@valuehut.co",
      subject: `Invoice for ${course.title} (${course.acronym})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333333; }
                .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f7f7f7; border: 1px solid #dddddd; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
                .header { font-size: 24px; margin-bottom: 20px; }
                .content { font-size: 16px; line-height: 1.5; margin-bottom: 20px; }
                .footer { font-size: 14px; text-align: center; color: #999999; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    ValueHut Consulting Invoice for <b>${safeCourseName}</b>
                </div>
                <div class="content">
                    Dear ${safeCustomerName},<br><br>

                    Please find attached an invoice for the ${safeCourseName} class requested.<br><br>

                    ${paymentTerms}<br><br>

                    Should you have any questions or require further assistance including the Bank Details for your preferred currency, feel free to contact us.<br>

                    Thank you for your business and we look forward to having you in class. <br><br>

                    Regards, <br>
                    Funke Jolayemi, <br>
                    Operations Coordinator <br>
                    info@valuehut.co
                </div>
                <div class="footer">
                    © ValueHut Consulting - All rights reserved
                </div>
            </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: `Invoice_ValueHut_${safeFileName}_${invoiceNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ sent: true, recipient });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send invoice" }, { status: 500 });
  }
}
