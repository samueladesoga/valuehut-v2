"use client";

import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  countries,
  primaryMarket,
  tertiaryMarket,
} from "@/data/Countries/countries";

interface RegisterModalProps {
  title: string;
  date: string;
  onClose: () => void;
  logo: string;
  courseId: string;
  classId: string;
}

const RegisterModal = ({
  title,
  date,
  onClose,
  logo,
  courseId,
  classId,
}: RegisterModalProps) => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleRouting = () => {
    const lowercaseCountryname = selectedCountry.toLocaleLowerCase()
    router.push(`/checkout/${courseId}/${classId}?country=${lowercaseCountryname}`);
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-[#03243266] bg-opacity-[40%] z-50"
        onClick={onClose}
      >
        <div className="px-4 sm:px-0" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col gap-10 bg-white rounded-[20px] px-4 py-8 md:p-8 w-full max-w-[645px]">
            <div className="flex gap-3">
              <Image
                src={logo}
                width={70}
                height={70}
                alt="images"
                className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-contain"
              />
              <div>
                <h1 className="text-xl md:text-4xl font-semibold font-secondary text-main">
                  {title}
                </h1>
                <p className="text-lg font-medium font-secondary text-main">
                  {date}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-medium font-secondary text-main">
                  Select your country of residence
                </p>
                <select
                  className="mt-2 w-full px-4 py-5 border text-sm border-neutral-300 font-normal font-secondary rounded-lg text-secondary"
                  defaultValue=""
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select a country...</option>
                  <optgroup label="Primary Market">
                    {primaryMarket.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Secondary Market">
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Tertiary Market">
                    {tertiaryMarket.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="flex gap-1  md:gap-[10px] text-[16px] leading-4 md:text-sm text-main font-secondary p-4 rounded-lg bg-[#E7EFFD]">
                <Image
                  src={"/icons/information-circle.svg"}
                  width={24}
                  height={24}
                  alt="icon"
                />
                <p>
                  <strong className="font-medium">Please note:</strong>{" "}
                  <span className="font-normal">
                    {" "}
                    Prices may vary based on your country of residence.
                  </span>
                </p>
              </div>
            </div>

            <Button
              className="w-full text-sm font-medium font-secondary text-accentmain"
              onClick={handleRouting}
              bgColor="fill-neutral-strong"
              rounded="lg"
            >
              Continue to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
