"use client";

import React from "react";
import FormField from "../FormField/FormField";
import { countries } from "@/data/Countries/countries";
import { CheckoutDetails, FieldErrors, UpdateDetail } from "../types";
import { FIELD_LIMITS, InvoiceDeadline } from "@/utils/checkout";

interface InvoiceDetailsProps {
  details: CheckoutDetails;
  errors: FieldErrors;
  updateDetail: UpdateDetail;
  deadline: InvoiceDeadline;
  pricingRegion: string;
}

const legendClass =
  "mb-3 text-base !leading-[22px] font-semibold font-secondary text-main";

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({
  details,
  errors,
  updateDetail,
  deadline,
  pricingRegion,
}) => {
  const text = (name: keyof CheckoutDetails) => ({
    name,
    value: details[name] as string,
    ...(name in FIELD_LIMITS ? { maxLength: FIELD_LIMITS[name as keyof typeof FIELD_LIMITS] } : {}),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      updateDetail(name, e.target.value),
  });

  const recipient = details.sendToSomeoneElse
    ? details.invoiceEmail.trim()
    : details.email.trim();

  const billTo = [
    details.billingContact,
    details.company,
    details.addressLine1,
    details.addressLine2,
    [details.city, details.postcode].map((v) => v.trim()).filter(Boolean).join(" "),
    details.billingCountry,
  ]
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-8">
      <InvoiceTerms deadline={deadline} />

      <fieldset className="flex flex-col gap-4">
        <legend className={legendClass}>Who is the invoice for?</legend>
        <FormField
          id="company"
          label="Company / organisation"
          optional
          error={errors.company}
        >
          {(props) => (
            <input
              {...props}
              {...text("company")}
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Ltd"
            />
          )}
        </FormField>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            id="billingContact"
            label="Billing contact"
            optional
            error={errors.billingContact}
            className="w-full"
            hint="The person in accounts who handles this invoice."
          >
            {(props) => (
              <input
                {...props}
                {...text("billingContact")}
                type="text"
                autoComplete="off"
                placeholder="e.g. Sam Patel"
              />
            )}
          </FormField>
          <FormField
            id="poNumber"
            label="PO number / reference"
            optional
            error={errors.poNumber}
            className="w-full"
            hint="Shown on the invoice if your company needs one."
          >
            {(props) => (
              <input
                {...props}
                {...text("poNumber")}
                type="text"
                autoComplete="off"
                placeholder="e.g. PO-12345"
              />
            )}
          </FormField>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className={legendClass}>Billing address</legend>
        <FormField id="addressLine1" label="Address line 1" error={errors.addressLine1}>
          {(props) => (
            <input
              {...props}
              {...text("addressLine1")}
              type="text"
              autoComplete="address-line1"
              placeholder="Building number and street"
            />
          )}
        </FormField>
        <FormField id="addressLine2" label="Address line 2" optional error={errors.addressLine2}>
          {(props) => (
            <input
              {...props}
              {...text("addressLine2")}
              type="text"
              autoComplete="address-line2"
              placeholder="Flat, suite, unit, floor"
            />
          )}
        </FormField>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField id="city" label="Town / city" error={errors.city} className="w-full">
            {(props) => (
              <input {...props} {...text("city")} type="text" autoComplete="address-level2" />
            )}
          </FormField>
          <FormField id="postcode" label="Postcode / ZIP" error={errors.postcode} className="w-full">
            {(props) => (
              <input {...props} {...text("postcode")} type="text" autoComplete="postal-code" />
            )}
          </FormField>
        </div>
        <FormField
          id="billingCountry"
          label="Country"
          error={errors.billingCountry}
          hint={`Prices and VAT are based on your pricing region (${pricingRegion}), not this address.`}
        >
          {(props) => (
            <select {...props} {...text("billingCountry")} autoComplete="country-name">
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        </FormField>
        <FormField
          id="phone"
          label="Phone number"
          optional
          error={errors.phone}
          hint="Include the country code, e.g. +44 7700 900123."
        >
          {(props) => (
            <input {...props} {...text("phone")} type="tel" inputMode="tel" autoComplete="tel" />
          )}
        </FormField>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className={legendClass}>Where should we email it?</legend>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={details.sendToSomeoneElse}
            onChange={(e) => updateDetail("sendToSomeoneElse", e.target.checked)}
            className="mt-[3px] w-5 h-5 accent-[#05668D] flex-none"
          />
          <span className="text-base !leading-[24px] font-secondary text-main">
            Send the invoice to someone else (e.g. your finance team)
          </span>
        </label>
        {details.sendToSomeoneElse && (
          <FormField id="invoiceEmail" label="Invoice email" error={errors.invoiceEmail}>
            {(props) => (
              <input
                {...props}
                {...text("invoiceEmail")}
                type="email"
                autoComplete="off"
                placeholder="e.g. accounts@yourcompany.com"
              />
            )}
          </FormField>
        )}
      </fieldset>

      <div className="rounded-lg border border-[#D6E6EB] bg-white p-4 flex flex-col gap-3 font-secondary text-sm !leading-[20px] text-main">
        <p className="font-semibold">Invoice preview</p>
        <div>
          <p className="text-secondary">Bill to</p>
          {billTo.length ? (
            billTo.map((line, i) => <p key={i}>{line}</p>)
          ) : (
            <p className="text-secondary italic">Enter a billing address above</p>
          )}
          {details.poNumber.trim() && <p>PO / reference: {details.poNumber.trim()}</p>}
        </div>
        <div>
          <p className="text-secondary">Emailed to</p>
          <p className="break-all">
            {recipient || (
              <span className="text-secondary italic">
                {details.sendToSomeoneElse
                  ? "Enter the invoice email above"
                  : "Your email from step 2"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export const InvoiceTerms: React.FC<{ deadline: InvoiceDeadline }> = ({ deadline }) => {
  if (deadline.isPastDeadline) {
    return (
      <div role="note" className="rounded-lg border border-amber-300 bg-amber-50 p-4 font-secondary text-sm !leading-[20px] text-main">
        <p className="font-semibold">This class starts in less than 14 days</p>
        <p className="mt-1">
          Payment on this invoice is due immediately, and your place is only
          confirmed once we receive it. To secure your place straight away,
          pay by card instead.
        </p>
      </div>
    );
  }
  return (
    <div role="note" className="rounded-lg border border-[#D6E6EB] bg-white p-4 font-secondary text-sm !leading-[20px] text-main">
      <p className="font-semibold">How paying by invoice works</p>
      <ul className="mt-2 flex flex-col gap-1 list-disc pl-5">
        <li>We email you a PDF invoice with our bank details straight away.</li>
        <li>
          Payment is due{" "}
          <strong>
            {deadline.label ? `by ${deadline.label}` : "at least 14 days before the class starts"}
          </strong>
          {deadline.label ? " (14 days before the class starts)." : "."}
        </li>
        <li>
          We hold your place until then. Your place is confirmed once payment
          is received.
        </li>
      </ul>
    </div>
  );
};

export default InvoiceDetails;
