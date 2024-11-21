"use client";
import { useState } from "react";
import CircleMinusIcon from "./../../../public/icons/remove-circle.svg";
import PlusIcon from "./../../../public/icons/plus.svg";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null); // If clicked again, close it
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white container max-h-[716px] rounded-3xl">
      <div className=" px-6 py-16 lg:px-8">
        <div className="flex justify-evenly">
          <div className="w-2/4">
            <h2 className="text-9xl font-semibold tracking-tight text-[#141834] font-primary">
              Frequently asked questions
            </h2>
            <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              Let's connect
            </button>
          </div>
          <div className="w-2/4">
            <dl className=" space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`max-w-[436px] py-6 px-4 rounded-xl transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "bg-white border-[#3167B0] border"
                      : "bg-[#F5F5F5] border border-transparent"
                  }`}
                >
                  <dt>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="group flex w-full items-start justify-between text-left"
                    >
                      <span className="text-xl font-secondary text-main font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        {openIndex === index ? (
                          <Image
                            src={CircleMinusIcon}
                            width={24}
                            height={24}
                            alt="icom"
                          />
                        ) : (
                          <Image
                            src={PlusIcon}
                            width={24}
                            height={24}
                            alt="icom"
                          />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 pr-12">
                      <p className="text-lg text-main font-normal font-secondary">
                        {faq.answer}
                      </p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
