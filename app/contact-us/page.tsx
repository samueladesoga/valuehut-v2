import React from "react";
import ContactUs from "./contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ValueHut Consulting | London & Lagos",
  description:
    "Get in touch with ValueHut Consulting. We have offices serving London and Lagos. Contact us for Agile consulting, Scrum training, and talent matching.",
  alternates: {
    canonical: "https://www.valuehut.co/contact-us",
  },
  openGraph: {
    title: "Contact ValueHut Consulting | London & Lagos",
    description:
      "Get in touch with ValueHut Consulting. We have offices serving London and Lagos. Contact us for Agile consulting, Scrum training, and talent matching.",
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
    title: "Contact ValueHut Consulting | London & Lagos",
    description:
      "Get in touch with ValueHut Consulting. We have offices serving London and Lagos. Contact us for Agile consulting, Scrum training, and talent matching.",
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
