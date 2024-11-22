import FAQ from "../components/Faq/Faq";
import { faqs } from "./../data/Faqs/faqpage";

const FaqPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="py-32">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqPage;
