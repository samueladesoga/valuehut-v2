/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "email-smtp.us-east-1.amazonaws.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USERNAME,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

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
    //const taxAmount = amount * taxRate;
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

    // Check payment status before sending email
      //const formattedAmount = amount.toFixed(2);
      //const formattedTax = taxAmount.toFixed(2);
      //const formattedTotal = totalAmount.toFixed(2);

      // Send payment receipt email
      // await transporter.sendMail({
      //   from: '"ValueHut" <info@valuehut.co>',
      //   to: email,
      //   bcc: "info@valuehut.co",
      //   subject: "Payment Receipt",
      //   html: `
      //     <html>
      //     <head>
      //       <style>
      //         body {
      //           font-family: Arial, sans-serif;
      //           color: #333;
      //           background-color: #f7f7f7;
      //           padding: 20px;
      //         }
      //         .container {
      //           background-color: #fff;
      //           padding: 20px;
      //           border-radius: 8px;
      //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      //           max-width: 600px;
      //           margin: 20px auto;
      //           border: 1px solid #ddd;
      //         }
      //         .header {
      //           font-size: 20px;
      //           margin-bottom: 10px;
      //         }
      //         .content {
      //           font-size: 16px;
      //           line-height: 1.6;
      //         }
      //         .footer {
      //           text-align: center;
      //           color: #999;
      //           font-size: 14px;
      //         }
      //       </style>
      //     </head>
      //     <body>
      //       <div class="container">
      //         <div class="header">Thank You for Your Purchase!</div>
      //         <div class="content">
      //           Hello ${fullName},<br><br>
      //           Thank you for your purchase. Here are the details of your transaction:<br><br>
      //           <strong>Amount:</strong> ${formattedAmount} ${currency.toUpperCase()}<br>
      //           <strong> Tax ${isUk ? "20%" : "0%"}:</strong> ${formattedTax} ${currency.toUpperCase()}<br>
      //           <strong>Total Paid:</strong> ${formattedTotal} ${currency.toUpperCase()}<br><br>
      //           Should you have any questions or require further assistance, feel free to contact us.
      //         </div>
      //         <div class="footer">
      //           © ValueHut Consulting - All rights reserved
      //         </div>
      //       </div>
      //     </body>
      //     </html>
      //   `,
      // });
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