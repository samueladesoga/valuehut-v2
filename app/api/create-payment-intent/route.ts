/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, email, isUk, fullName } = await request.json();

    // Validate input data
    if (!amount || !currency || !email || !fullName) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    const taxRate = isUk ? 0.2 : 0;
    const totalAmount = amount * (1 + taxRate);

    // Create a customer in Stripe
    const customer = await stripe.customers.create({
      email: email,
    });

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100), // Amount in smallest currency unit (e.g., cents)
      currency: currency,
      customer: customer.id,
      receipt_email: email,
      automatic_payment_methods: {
        enabled: true,
      },
    });
      // Return client secret to the frontend for further payment handling if needed
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error", error);
    return NextResponse.json(
      { error: "Payment failed, try again" },
      { status: 500 }
    );
  }
}