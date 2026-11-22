import React from "react";
import FAQ from "@/components/FaqPage/Faq/Faq";
import { faqs } from "@/data/Faqs/faqpage";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd/JsonLd";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about ValueHut Consulting's Agile training, consulting, and talent matching services in London and Lagos.",
  alternates: {
    canonical: "https://www.valuehut.co/faqs",
  },
  openGraph: {
    title: "FAQs | ValueHut Consulting",
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
    title: "FAQs | ValueHut Consulting",
    description:
      "Find answers to common questions about ValueHut Consulting's Agile training, consulting, and talent matching services.",
    images: ["/logos/v2-dark.png"],
  },
};
const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] h-auto">
      <JsonLd data={faqSchema(faqs)} />
      <div className="py-32">
        <FAQ faqs={faqs} headingLevel="h1" />
        <OurPartners />
      </div>
    </div>
  );
};

export default FaqPage;
