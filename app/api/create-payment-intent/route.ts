import { getMonthAndDay, getYear } from "@/utils/ConvertDate";
import { priceOrder } from "@/lib/pricing";
import { EMAIL_REGEX, checkTextField } from "@/utils/checkout";
/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const badRequest = (error: string) => NextResponse.json({ error }, { status: 400 });

export async function POST(request: NextRequest) {
  try {
    const { slug, classSysId, country, quantity, discountCode, email, fullName } =
      await request.json();

    if (
      typeof email !== "string" ||
      !EMAIL_REGEX.test(email.trim()) ||
      typeof fullName !== "string" ||
      !fullName.trim() ||
      checkTextField("fullName", fullName.trim())
    ) {
      return badRequest("Invalid input data");
    }

    // The browser only says *what* is being bought. Price, discount and VAT
    // are all worked out on the server so they can't be changed from the client.
    const priced = await priceOrder({ slug, classSysId, country, quantity, discountCode });
    if (!priced.ok) return badRequest(priced.error);
    const { course, classDetail, totals } = priced.order;

    if (totals.totalMinor <= 0) {
      // Stripe can't take a zero payment (e.g. a 100% code): use an invoice instead.
      return badRequest("This order has nothing to pay by card. Please choose invoice instead.");
    }

    const customerEmail = email.trim();
    const customerName = fullName.trim();
    const acronym: string = course.acronym;

    // Find or create a customer
    const existingCustomers = await stripe.customers.list({ email: customerEmail, limit: 1 });
    const customer =
      existingCustomers.data.length > 0
        ? existingCustomers.data[0]
        : await stripe.customers.create({ email: customerEmail, name: customerName });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totals.totalMinor,
      currency: totals.currency,
      statement_descriptor_suffix: acronym,
      description: `Payment for ${acronym} - ${getMonthAndDay(classDetail.startDate, classDetail.timeZone)}, ${getYear(classDetail.startDate)}`,
      customer: customer.id,
      receipt_email: customerEmail,
      metadata: {
        courseSlug: priced.order.slug,
        classSysId: priced.order.classSysId,
        quantity: String(totals.quantity),
        country: priced.order.country,
        discountCode: priced.order.discountCode ?? "",
        discountPercent: String(totals.discountPercent),
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: totals.totalMinor,
    });
  } catch (error) {
    console.error("Internal Error", error);
    return NextResponse.json({ error: "Payment failed, try again" }, { status: 500 });
  }
}
