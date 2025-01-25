import React from "react";
import FAQ from "@/components/FaqPage/Faq/Faq";
import { faqs } from "@/data/Faqs/faqpage";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faqs",
  description:
    "ValueHut Consulting is an Agile Management Consultancy, enabling organisations to explore better ways of working and leading to deliver great products and services to their clients.",
};
const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] h-auto">
      <div className="py-32">
        <FAQ faqs={faqs} />
        <OurPartners />
      </div>
    </div>
  );
};

export default FaqPage;
