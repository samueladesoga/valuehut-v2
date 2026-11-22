"use client";

import Image from "next/image";
import React from "react";
import CardPayment from "./CardPayment";
import InvoiceDetails from "./InvoiceDetails";
import { CheckoutDetails, FieldErrors, PaymentMethodId, UpdateDetail } from "../types";
import { InvoiceDeadline } from "@/utils/checkout";

interface PaymentmethodProps {
  selectedMethod: PaymentMethodId | "";
  onSelect: (method: PaymentMethodId) => void;
  details: CheckoutDetails;
  errors: FieldErrors;
  updateDetail: UpdateDetail;
  deadline: InvoiceDeadline;
  pricingRegion: string;
  cardAvailable: boolean;
}

const Paymentmethod: React.FC<PaymentmethodProps> = ({
  selectedMethod,
  onSelect,
  details,
  errors,
  updateDetail,
  deadline,
  pricingRegion,
  cardAvailable,
}) => {
  const options: {
    id: PaymentMethodId;
    title: string;
    summary: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "card",
      title: "Pay now by card",
      summary: "Instant confirmation — your place is booked straight away.",
      icon: (
        <Image
          src="/images/creditcards.png"
          width={140}
          height={28}
          alt="Visa, Mastercard, American Express"
          className="h-7 w-auto"
        />
      ),
    },
    {
      id: "invoice",
      title: "Request an invoice",
      summary: deadline.isPastDeadline
        ? "For company purchases. Pay by bank transfer — due immediately for this class."
        : `For company purchases. Pay by bank transfer${
            deadline.label ? ` by ${deadline.label}` : " at least 14 days before the class"
          }.`,
      icon: (
        <Image src="/icons/receipt.svg" width={28} height={28} alt="" aria-hidden="true" />
      ),
    },
  ];

  return (
    <fieldset aria-describedby={errors.paymentMethod ? "paymentMethod-error" : undefined}>
      <legend className="sr-only">Payment method</legend>
      {errors.paymentMethod && (
        <p id="paymentMethod-error" className="mb-3 text-sm font-secondary text-red-600">
          {errors.paymentMethod}
        </p>
      )}
      <div className="grid gap-4">
        {options.map((option) => {
          const selected = selectedMethod === option.id;
          return (
            <div
              key={option.id}
              className={`rounded-lg border transition-colors ${
                selected
                  ? "border-[#05668D] bg-[#EFF7F8]"
                  : errors.paymentMethod
                    ? "border-red-600"
                    : "border-[#BFBFBF] hover:bg-gray-50"
              }`}
            >
              <label className="flex items-start gap-4 py-5 px-4 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  id={option.id === "card" ? "paymentMethod" : undefined}
                  value={option.id}
                  checked={selected}
                  onChange={() => onSelect(option.id)}
                  className="mt-1 w-5 h-5 flex-none accent-[#05668D]"
                />
                <span className="flex-1 flex flex-col gap-1">
                  <span className="text-lg !leading-[24px] font-semibold font-secondary text-[#141834]">
                    {option.title}
                  </span>
                  <span className="text-sm !leading-[20px] font-secondary text-secondary">
                    {option.summary}
                  </span>
                </span>
                <span className="hidden sm:flex items-center">{option.icon}</span>
              </label>

              {selected && (
                <div className="px-4 pb-6 pt-2">
                  {option.id === "card" ? (
                    <CardPayment available={cardAvailable} />
                  ) : (
                    <InvoiceDetails
                      details={details}
                      errors={errors}
                      updateDetail={updateDetail}
                      deadline={deadline}
                      pricingRegion={pricingRegion}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Paymentmethod;
