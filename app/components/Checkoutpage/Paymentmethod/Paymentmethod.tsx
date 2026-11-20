"use client";

import Image from "next/image";
import React from "react";
import {
  loadStripe,
  Appearance,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentWithCredit from "./CardPayment";

interface PaymentMethod {
  id: string;
  name: string;
  creditCards?: string;
  customIcon?: string;
}

interface details {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  billingContact: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  billingCountry: string;
  invoiceEmail: string;
  numberOfAttendees: number;
  acronym?: string;
  startDate?: string;
  timeZone? : string;
}
interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  details: details;
  setdetails: (updateFn: (prevState: details) => details) => void;
  selectedMethod: string;
  setSelectedMethod: React.Dispatch<React.SetStateAction<string>>;
  amount: number;
  country: string;
}

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const labelClass =
  "block text-sm !leading-[19px] font-medium font-secondary text-main";
const optionalClass = "text-secondary font-normal";
const helpClass = "text-sm !leading-[19px] font-secondary text-secondary";
const sectionHeadingClass =
  "mb-1 text-base !leading-[22px] font-semibold font-secondary text-main";
const inputClass =
  "w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-2 focus:ring-[#05668D]";

const Paymentmethod: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  details,
  setdetails,
  selectedMethod,
  setSelectedMethod,
  amount,
  country,
}) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setdetails((prevState) => ({
      ...prevState,
      [name]: name === "numberOfAttendees" ? parseInt(value) || 1 : value,
    }));
  };

  const invoiceRecipient =
    details.invoiceEmail.trim() || details.email.trim();

  const handleSelect = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const appearance: Appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#05668D",
      colorBackground: "#EFF7F8",
      colorText: "#141834",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "6px",
      borderRadius: "4px",
    },
    rules: {
      ".Tab": {
        display: "none",
      },
      ".Input": {
        backgroundColor: "#EFF7F8",
      },
      ".Label": {
        color: "#141834",
      },
    },
  };

  const elementsOptions: StripeElementsOptions = {
    mode: "payment",
    amount: Math.round(amount * (country === "united kingdom" ? 1.2 : 1) * 100),
    currency: country === "united kingdom" ? "gbp" : "usd",
    appearance,
  };
  return (
    <div>
      <h2 className="text-xl !leading-[27px] font-semibold font-secondary pb-5">
        Payment Method
      </h2>
      <div className="grid gap-4">
        {methods.map((method, index: number) => (
          <div
            key={index}
            className={`flex flex-col py-5 px-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? "border-[#05668D] bg-[#EFF7F8]"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => handleSelect(method.id)}
          >
            <div className="flex items-start sm:items-center flex-col gap-4 sm:gap-0 sm:flex-row justify-between ">
              <div className="w-full flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center gap-4">
                <div
                  className={` border-[3px] flex items-center justify-center rounded-full transition-colors ${
                    selectedMethod === method.id
                      ? "w-6 h-6 border-[#189AB6]"
                      : "w-[25px] h-[25px] border-[#BFBFBF]"
                  }`}
                >
                  {selectedMethod === method.id && (
                    <div className="w-[16px] h-[16px] rounded-full bg-fill-brand-primary flex justify-center items-center"></div>
                  )}
                </div>
                <span className="text-lg !leading-[24px] font-semibold font-secondary text-[#141834]">
                  {method.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {method.creditCards && (
                  <Image
                    src={method.creditCards}
                    width={180}
                    height={36}
                    alt={`${method.name} Icon`}
                  />
                )}
                {method.customIcon && (
                  <Image
                    src={method.customIcon}
                    width={40}
                    height={40}
                    alt={`${method.name} Icon`}
                  />
                )}
              </div>
            </div>

            <div>
              {method.name === "Credit Card" &&
                selectedMethod === method.id && (
                  <div className="mt-8">
                    <Elements options={elementsOptions} stripe={stripePromise}>
                      <PaymentWithCredit
                        amount={amount}
                        country={country}
                        fullName={details.fullName}
                        email={details.email}
                        acronym={details.acronym}
                        startDate={details.startDate}
                        timeZone={details.timeZone}
                      />
                    </Elements>
                  </div>
                )}

              {method.name === "Pay with Invoice" &&
                selectedMethod === method.id && (
                  <div
                    className="flex flex-col gap-8 mt-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-base !leading-[22px] font-secondary text-secondary">
                      We&apos;ll email you a PDF invoice for this booking. Please
                      enter the billing details exactly as they should appear on
                      the invoice.
                    </p>

                    <fieldset className="flex flex-col gap-4">
                      <legend className={sectionHeadingClass}>
                        Send invoice to
                      </legend>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="invoiceEmail" className={labelClass}>
                          Invoice email{" "}
                          <span className={optionalClass}>(optional)</span>
                        </label>
                        <input
                          type="email"
                          id="invoiceEmail"
                          name="invoiceEmail"
                          autoComplete="email"
                          value={details.invoiceEmail}
                          onChange={handleInput}
                          placeholder={
                            details.email || "e.g. accounts@yourcompany.com"
                          }
                          className={inputClass}
                        />
                        <p className={helpClass}>
                          Use this if your finance or accounts team should
                          receive the invoice. Leave blank to use your contact
                          email.
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-4 py-3 text-sm !leading-[20px] font-secondary text-main">
                        The invoice will be sent to:{" "}
                        <strong className="break-all">
                          {invoiceRecipient || "your contact email (enter it above)"}
                        </strong>
                      </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-4">
                      <legend className={sectionHeadingClass}>
                        Billing address
                      </legend>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="billingContact" className={labelClass}>
                          Contact person{" "}
                          <span className={optionalClass}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="billingContact"
                          name="billingContact"
                          autoComplete="name"
                          value={details.billingContact}
                          onChange={handleInput}
                          placeholder="e.g. Accounts payable contact"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className={labelClass}>
                          Company / organisation{" "}
                          <span className={optionalClass}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          autoComplete="organization"
                          value={details.company}
                          onChange={handleInput}
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="addressLine1" className={labelClass}>
                          Address line 1
                        </label>
                        <input
                          type="text"
                          id="addressLine1"
                          name="addressLine1"
                          autoComplete="address-line1"
                          required
                          value={details.addressLine1}
                          onChange={handleInput}
                          placeholder="Building number and street"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="addressLine2" className={labelClass}>
                          Address line 2{" "}
                          <span className={optionalClass}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="addressLine2"
                          name="addressLine2"
                          autoComplete="address-line2"
                          value={details.addressLine2}
                          onChange={handleInput}
                          placeholder="Flat, suite, unit, floor"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full flex flex-col gap-2">
                          <label htmlFor="city" className={labelClass}>
                            Town / city
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            autoComplete="address-level2"
                            required
                            value={details.city}
                            onChange={handleInput}
                            placeholder="Town or city"
                            className={inputClass}
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <label htmlFor="postcode" className={labelClass}>
                            Postcode / ZIP
                          </label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            autoComplete="postal-code"
                            required
                            value={details.postcode}
                            onChange={handleInput}
                            placeholder="Postcode"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="billingCountry" className={labelClass}>
                          Country
                        </label>
                        <input
                          type="text"
                          id="billingCountry"
                          name="billingCountry"
                          autoComplete="country-name"
                          required
                          value={details.billingCountry}
                          onChange={handleInput}
                          placeholder="Country"
                          className={inputClass}
                        />
                      </div>
                    </fieldset>

                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="phone" className={labelClass}>
                        Phone number{" "}
                        <span className={optionalClass}>(optional)</span>
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={details.phone}
                        onChange={handleInput}
                        placeholder="Enter your phone number"
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paymentmethod;
