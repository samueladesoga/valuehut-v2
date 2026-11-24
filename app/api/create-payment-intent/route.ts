import { getMonthAndDay, getYear } from "@/utils/ConvertDate";
import { getCourse } from "@/lib/courseApi";
import { findDiscount } from "@/lib/discounts";
import { computeTotals, EMAIL_REGEX, getUnitPriceForCountry } from "@/utils/checkout";
/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const MAX_ATTENDEES = 50;

const badRequest = (error: string) => NextResponse.json({ error }, { status: 400 });

export async function POST(request: NextRequest) {
  try {
    const { slug, classSysId, country, quantity, discountCode, email, fullName } =
      await request.json();

    // The browser only says *what* is being bought. Price, discount and VAT
    // are all worked out here so they can't be changed from the client.
    if (
      typeof slug !== "string" ||
      typeof classSysId !== "string" ||
      typeof country !== "string" ||
      typeof email !== "string" ||
      !EMAIL_REGEX.test(email.trim()) ||
      typeof fullName !== "string" ||
      !fullName.trim()
    ) {
      return badRequest("Invalid input data");
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_ATTENDEES) {
      return badRequest("Invalid number of attendees");
    }

    const courses = await getCourse(slug).catch(() => null);
    const course = courses?.[0];
    const classDetail = course?.classes?.find(
      (cls: { classSysId: string }) => cls.classSysId === classSysId
    );
    if (!course || !classDetail) {
      return badRequest("This class is no longer available");
    }
    if (classDetail.filled) {
      return badRequest("This class is fully booked");
    }

    let discountPercent = 0;
    if (discountCode) {
      const discount = findDiscount(discountCode);
      if (!discount) {
        return badRequest(
          "Your discount code is no longer valid. Remove it and try again. You have not been charged."
        );
      }
      discountPercent = discount.percent;
    }

    const normalisedCountry = country.trim().toLowerCase();
    const isUk = normalisedCountry === "united kingdom";
    const unitPrice = getUnitPriceForCountry(classDetail, normalisedCountry);
    if (!unitPrice) {
      return badRequest("No price is set for this class");
    }

    const totals = computeTotals({ unitPrice, quantity, discountPercent, isUk });
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
        courseSlug: slug,
        classSysId,
        quantity: String(quantity),
        country: normalisedCountry,
        discountCode: discountPercent ? String(discountCode).trim().toUpperCase() : "",
        discountPercent: String(discountPercent),
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
