"use client";
import Button from "@/components/Button/Button";
import CheckoutCourseDetails from "@/components/Checkoutpage/CheckoutCourseDetails/CheckoutCourseDetails";
import ContactInformation from "@/components/Checkoutpage/ContactInformation/ContactInformation";
import Ordersummary from "@/components/Checkoutpage/Ordersummary/Ordersummary";
import Paymentmethod from "@/components/Checkoutpage/Paymentmethod/Paymentmethod";
import { CheckoutCourseDetailsData } from "@/data/Academy/CheckoutCourseDetails";
import { orderSummary } from "@/data/Academy/OrderSummary";
import Image from "next/image";
import React, { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  creditCards?: string;
  customIcon?: string;
}
const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    name: "Credit Card",
    creditCards: "/images/creditcards.png",
  },
  {
    id: "invoice",
    name: "Pay with Invoice",
    customIcon: "/icons/receipt.svg",
  },
];

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handlePaymentSelect = (method: string) => {
    console.log("Selected payment method:", method);
  };

  return (
    <div className="container bg-[#f5f5f5] pb-24 sm:pb-36">
      <div className="flex flex-col gap-6 pt-36 bg-white sm:bg-[#f5f5f5] p-4">
        <div className="flex justify-start items-start">
          <button className="py-1 px-[10px] bg-[#E4EEF3] rounded-full  flex gap-2 items-center">
            <Image
              src={"/less.svg"}
              width={20}
              height={20}
              alt="image"
              className="object-contain w-4 h-4"
            />
            <span className="text-main text-[15px] leading-[22px] font-secondary font-medium">
              Go back
            </span>
          </button>
        </div>

        <h1 className="text-[40px] leading-[52px] font-medium text-[#141834]">
          Checkout
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row  justify-between gap-3 ">
        <div className="w-full lg:w-[742px] flex flex-col gap-16 bg-white p-4 md:p-8 lg:rounded-3xl">
          <ContactInformation formData={formData} handleChange={handleChange} />
          <Paymentmethod
            methods={paymentMethods}
            onSelect={handlePaymentSelect}
          />
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <CheckoutCourseDetails
            image={CheckoutCourseDetailsData.image}
            title={CheckoutCourseDetailsData.title}
            date={CheckoutCourseDetailsData.date}
            time={CheckoutCourseDetailsData.time}
            classType={CheckoutCourseDetailsData.classType}
            country={CheckoutCourseDetailsData.country}
          />
          <div className="flex flex-col gap-3">
            <Ordersummary
              perPerson={orderSummary.perPerson}
              subtotal={orderSummary.subtotal}
              total={orderSummary.total}
              discountText={orderSummary.discountText}
            />

            <Button
              size="large"
              bgColor="fill-brand-secondary"
              className="rounded-xl text-main"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
