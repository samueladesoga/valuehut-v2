import React from "react";
import FAQ from "../components/FaqPage/Faq/Faq";
import { faqs } from "./../data/Faqs/faqpage";
import OurPartners from "../components/FaqPage/OurPartners/OurPartners";

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
