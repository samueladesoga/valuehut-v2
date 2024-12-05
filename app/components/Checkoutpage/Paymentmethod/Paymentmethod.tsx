import Image from "next/image";
import React, { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  creditCards?: string;
  customIcon?: string;
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  onSelect?: (method: string) => void;
}

const Paymentmethod: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  onSelect,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const handleSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    onSelect?.(methodId);
  };

  return (
    <div>
      <h2 className="text-xl !leading-[27px] font-semibold font-secondary pb-5">
        Payment Method
      </h2>
      <div className="grid gap-4">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-colors ${
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
                  <div className="flex flex-col gap-8 mt-8">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="card-number"
                        className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                      >
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card-number"
                          maxLength={16}
                          placeholder="1234 5678 9012 3456"
                          className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                          style={{
                            MozAppearance: "textfield",
                          }}
                        />
                        <Image
                          src={"/images/visa.png"}
                          width={56}
                          height={18}
                          alt="images"
                          className="absolute right-4 top-5"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-3">
                      <div className="w-full flex flex-col gap-2">
                        <label
                          htmlFor="expiration-date"
                          className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                        >
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          id="expiration-date"
                          placeholder="MM/YY"
                          className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                        />
                      </div>

                      <div className="w-full flex flex-col gap-2">
                        <label
                          htmlFor="security-code"
                          className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                        >
                          Security Code
                        </label>

                        <div className="relative">
                          <input
                            type="text"
                            id="security-code"
                            placeholder="123"
                            className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                          />
                          <Image
                            src={"/images/securitycode.png"}
                            width={43}
                            height={27}
                            alt="images"
                            className="absolute right-4 top-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              {method.name === "Pay with Invoice" &&
                selectedMethod === method.id && (
                  <div className="flex flex-col gap-8 mt-8">
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
                        placeholder="Enter your full name"
                        className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="flex justify-between gap-3">
                      <div className="w-full flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
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
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone number"
                          className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>

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
                        placeholder="Enter your address"
                        className="w-full py-5 px-4 border-none rounded-lg font-normal font-secondary text-xl !leading-[25px] text-secondary focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="attendees"
                        className="block text-sm !leading-[19px] font-medium font-secondary text-main"
                      >
                        Number of Attendees
                      </label>
                      <input
                        type="number"
                        id="attendees"
                        placeholder="Enter the number of attendees"
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
