"use client";

import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

interface CardPaymentProps {
  available: boolean;
}

/**
 * Card fields only. The payment itself is created and confirmed when the
 * customer presses the Pay button (see WrapperCheckout), so the form shows
 * straight away and never reloads while they type.
 */
const CardPayment: React.FC<CardPaymentProps> = ({ available }) => {
  if (!available) {
    return (
      <p className="text-sm font-secondary text-red-600">
        Card payments are unavailable right now. Please request an invoice or
        contact info@valuehut.co.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <PaymentElement
        options={{
          layout: { type: "tabs", defaultCollapsed: false },
        }}
      />
      <p className="flex items-center gap-2 text-sm font-secondary text-secondary">
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Payments are processed securely by Stripe. We never see or store your
        card details.
      </p>
    </div>
  );
};

export default CardPayment;
