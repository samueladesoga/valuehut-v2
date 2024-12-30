"use client";
import Input from "@/components/Input/Input";
import React, { useState } from "react";

function ContactInformation({}) {
  const [formData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="text-xl !leading-[27px] text-[#141834] font-secondary font-semibold">
          Contact Information
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="w-full">
            <Input
              label="First Name"
              placeholder="Full name"
              value={formData.firstName}
            />
          </div>
          <div className="w-full">
            <Input
              label="Last Name"
              placeholder="Full name"
              value={formData.lastName}
            />
          </div>
        </div>
        <Input
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          value={formData.email}
          className="mt-1"
        />
      </div>
    </>
  );
}

export default ContactInformation;
