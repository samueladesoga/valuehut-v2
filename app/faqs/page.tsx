import React from "react";
import FAQ from "@/components/FaqPage/Faq/Faq";
import { faqs } from "@/data/Faqs/faqpage";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ValueHut Consulting - FAQs",
  description:
    "Our FAQs page provide an overview of the agile management consultancy services that we provide, Academy for Agile Leadership and Scrum courses, Consulting for Product and Delivery Management Services and Talent Matching for our Recruitment services.",
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
