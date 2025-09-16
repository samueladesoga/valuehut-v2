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
  address: string;
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

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

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
    amount: amount * 100,
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
                  <div className="flex flex-col gap-8 mt-8">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address"
                        className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={details.address}
                        onChange={handleInput}
                        placeholder="Enter your address"
                        className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={details.phone}
                        onChange={handleInput}
                        placeholder="Enter your phone number"
                        className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
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
