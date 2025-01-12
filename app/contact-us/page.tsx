import React from "react";
import ContactUs from "./contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "ValueHut Consultancy is an Agile Management Consultancy, help organisation explore better ways of working and leading to deliver great products and services to their clients.",
};

const ContactUsPage: React.FC = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
