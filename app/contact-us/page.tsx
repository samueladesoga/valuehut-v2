import React from "react";
import ContactUs from "./contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ValueHut Consulting for your agile and product management consulting and training needs.",
  alternates: {
    canonical: "https://www.valuehut.co/contact-us",
  },
  openGraph: {
    title: "Contact Us | ValueHut Consulting",
    description:
      "Get in touch with ValueHut Consulting for agile management consulting, training and talent matching services.",
    url: "https://www.valuehut.co/contact-us",
    images: [
      {
        url: "/images/contact-us.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact ValueHut Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ValueHut Consulting",
    description:
      "Get in touch with ValueHut Consulting for agile management consulting, training and talent matching services.",
    images: ["/images/contact-us.jpeg"],
  },
};

const ContactUsPage: React.FC = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
