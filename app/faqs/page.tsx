import React from "react";
import FAQ from "@/components/FaqPage/Faq/Faq";
import { faqs } from "@/data/Faqs/faqpage";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import type { Metadata } from "next";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Our FAQs page provide an overview of the agile management consultancy services that we provide, Academy for Agile Leadership and Scrum courses, Consulting for Product and Delivery Management Services and Talent Matching for our Recruitment services.",
  alternates: {
    canonical: "https://www.valuehut.co/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | ValueHut Consulting",
    description:
      "Find answers to common questions about ValueHut Consulting's Agile training, consulting, and talent matching services.",
    url: "https://www.valuehut.co/faqs",
    images: [
      {
        url: "/logos/v2-dark.png",
        width: 512,
        height: 512,
        alt: "ValueHut Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | ValueHut Consulting",
    description:
      "Find answers to common questions about ValueHut Consulting's Agile training, consulting, and talent matching services.",
    images: ["/logos/v2-dark.png"],
  },
};
const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] h-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="py-32">
        <FAQ faqs={faqs} />
        <OurPartners />
      </div>
    </div>
  );
};

export default FaqPage;
