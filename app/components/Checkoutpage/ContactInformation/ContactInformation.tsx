"use client";

import React from "react";
import FormField from "../FormField/FormField";
import { CheckoutDetails, FieldErrors, UpdateDetail } from "../types";

interface ContactInformationProps {
  details: CheckoutDetails;
  errors: FieldErrors;
  updateDetail: UpdateDetail;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  details,
  errors,
  updateDetail,
}) => (
  <div className="flex flex-col sm:flex-row gap-4">
    <FormField id="fullName" label="Full name" error={errors.fullName} className="w-full">
      {(props) => (
        <input
          {...props}
          type="text"
          name="fullName"
          autoComplete="name"
          value={details.fullName}
          onChange={(e) => updateDetail("fullName", e.target.value)}
          placeholder="e.g. Alex Morgan"
        />
      )}
    </FormField>
    <FormField
      id="email"
      label="Email address"
      error={errors.email}
      className="w-full"
      hint="Your booking confirmation and joining details go here."
    >
      {(props) => (
        <input
          {...props}
          type="email"
          name="email"
          autoComplete="email"
          value={details.email}
          onChange={(e) => updateDetail("email", e.target.value)}
          placeholder="you@example.com"
        />
      )}
    </FormField>
  </div>
);

export default ContactInformation;
