import Input from "@/components/Input/Input";
import React from "react";

interface ContactInformationProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleChange: (
    fieldName: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ContactInformation({
  formData,
  handleChange,
}: ContactInformationProps) {
  // Rest of the code remains the same
  const { firstName, lastName, email } = formData; // Destructure the formData object

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
              value={firstName} // Use the destructured firstName variable
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="w-full">
            <Input
              label="Last Name"
              placeholder="Full name"
              value={lastName} // Use the destructured lastName variable
              onChange={handleChange("lastName")}
            />
          </div>
        </div>
        <Input
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          value={email} // Use the destructured email variable
          onChange={handleChange("email")}
          className="mt-1"
        />
      </div>
    </>
  );
}

export default ContactInformation;
