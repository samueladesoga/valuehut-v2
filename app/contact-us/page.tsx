import React from "react";
import ContactUs from "./contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ValueHut Consulting - Contact Us",
  description:
    "Contact ValueHut Consulting for your agile and product management consulting and training needs.",
};

const ContactUsPage: React.FC = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
