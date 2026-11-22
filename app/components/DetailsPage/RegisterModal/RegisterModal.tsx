"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { countries } from "@/data/Countries/countries";
import { computeTotals, formatMoney, getUnitPriceForCountry } from "@/utils/checkout";

interface RegisterModalProps {
  title: string;
  date: string;
  onClose: () => void;
  logo: string;
  courseId: string;
  classSysId: string;
  /** Course with its classes, used to show the price for the chosen country. */
  course?: any;
}

// A best guess from the browser's time zone. The visitor always confirms it.
const TIMEZONE_COUNTRY: Record<string, string> = {
  "Europe/London": "United Kingdom",
  "Africa/Lagos": "Nigeria",
  "Africa/Accra": "Ghana",
  "Africa/Nairobi": "Kenya",
  "Africa/Johannesburg": "South Africa",
  "Europe/Dublin": "Ireland",
  "Europe/Amsterdam": "Netherlands",
  "Europe/Berlin": "Germany",
  "Europe/Paris": "France",
  "Asia/Dubai": "United Arab Emirates",
};

function guessCountry(): string {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const guess = TIMEZONE_COUNTRY[zone];
    return guess && countries.includes(guess) ? guess : "";
  } catch {
    return "";
  }
}

const options = countries.map((c) => ({ value: c, label: c }));

const RegisterModal = ({
  title,
  date,
  onClose,
  logo,
  courseId,
  classSysId,
  course,
}: RegisterModalProps) => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setSelectedCountry(guessCountry());
  }, []);

  // Close on Escape and stop the page scrolling behind the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const classDetail = useMemo(
    () => course?.classes?.find((c: any) => c.classSysId === classSysId),
    [course, classSysId]
  );

  const price = useMemo(() => {
    if (!selectedCountry || !classDetail) return null;
    const isUk = selectedCountry === "United Kingdom";
    const unit = getUnitPriceForCountry(classDetail, selectedCountry);
    if (!unit) return null;
    const totals = computeTotals({ unitPrice: unit, quantity: 1, isUk });
    return isUk
      ? `${formatMoney(unit, true)} per person + VAT (${formatMoney(totals.total, true)} total)`
      : `${formatMoney(unit, false)} per person (USD, no VAT)`;
  }, [selectedCountry, classDetail]);

  const handleContinue = () => {
    if (!selectedCountry) {
      setShowError(true);
      return;
    }
    router.push(
      `/checkout/${courseId}/${classSysId}?country=${encodeURIComponent(
        selectedCountry.toLowerCase()
      )}`
    );
  };

  // Rendered into <body> via a portal: callers open this from inside table
  // rows, where a <div> isn't valid HTML (it caused a hydration error).
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#03243266] z-50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-title"
        className="relative flex flex-col gap-8 bg-white rounded-[20px] px-4 py-8 md:p-8 w-full max-w-[645px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-2xl text-main hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#05668D]"
        >
          ×
        </button>

        <div className="flex items-center gap-3 pr-10">
          <Image
            src={logo}
            width={70}
            height={70}
            alt=""
            className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-contain"
          />
          <div>
            <h2
              id="register-title"
              className="text-xl md:text-3xl font-semibold font-secondary text-main"
            >
              {title}
            </h2>
            <p className="text-lg font-medium font-secondary text-main">{date}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="register-country"
            className="text-sm font-medium font-secondary text-main"
          >
            Which country do you live in?
          </label>
          <p id="register-country-hint" className="text-sm font-secondary text-secondary">
            Course prices are set by region, so we use this to show the right price
            and currency.
          </p>
          <Select
            inputId="register-country"
            aria-describedby="register-country-hint"
            autoFocus
            isSearchable
            placeholder="Start typing your country…"
            options={options}
            value={selectedCountry ? { value: selectedCountry, label: selectedCountry } : null}
            onChange={(option) => {
              if (option) {
                setSelectedCountry(option.value);
                setShowError(false);
              }
            }}
            styles={{
              control: (base, state) => ({
                ...base,
                minHeight: 52,
                borderRadius: 8,
                borderColor: showError ? "#DC2626" : state.isFocused ? "#05668D" : "#BFBFBF",
                boxShadow: state.isFocused ? "0 0 0 2px #05668D" : "none",
              }),
            }}
          />
          {showError && (
            <p role="alert" className="text-sm font-secondary text-red-600">
              Choose your country to see the price and continue.
            </p>
          )}
        </div>

        <div
          aria-live="polite"
          className="flex gap-3 items-start text-sm text-main font-secondary p-4 rounded-lg bg-[#E7EFFD]"
        >
          <Image src="/icons/information-circle.svg" width={24} height={24} alt="" />
          {price ? (
            <p>
              <span className="block text-secondary">Price for {selectedCountry}</span>
              <strong className="text-base font-semibold">{price}</strong>
            </p>
          ) : (
            <p>Choose your country to see the price for this class.</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="w-full rounded-lg bg-fill-neutral-strong text-accentmain py-3 px-6 text-sm font-medium font-secondary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#05668D] focus:ring-offset-2"
        >
          Continue to checkout
        </button>
      </div>
    </div>,
    document.body
  );
};

export default RegisterModal;
