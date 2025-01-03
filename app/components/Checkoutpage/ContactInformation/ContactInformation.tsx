"use client";

import React from "react";

interface details {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  numberOfAttendees: number;
}
interface PaymentMethodSelectorProps {
  setDetails: (
    updateFn: (prevState: details) => details
  ) => void;
  details: details;
}
function ContactInformation({
  setDetails,
  details,
}: PaymentMethodSelectorProps) {

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="text-xl !leading-[27px] text-[#141834] font-secondary font-semibold">
          Contact Information
        </h1>
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="full-name"
              className="block text-sm !leading-[19px] font-medium font-secondary text-main"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={details.fullName}
              onChange={handleInput}
              placeholder="Enter your full name"
              className="w-full py-5 px-4 border border-[#BFBFBF] rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-sm !leading-[19px] font-medium font-secondary text-main"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full py-5 px-4 border border-[#BFBFBF] rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
            />
          </div>
        </div>
       
      </div>
    </>
  );
}

export default ContactInformation;
