"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "./../../../public/icons/plus.svg";
import CircleMinusIcon from "./../../../public/icons/remove-circle.svg";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("General");

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null); // If clicked again, close it
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="bg-white container rounded-3xl">
      <div className="px-6 py-16 lg:px-8">
        <div className="flex justify-evenly flex-col sm:flex-row">
          <div className="w-2/4">
            <h2 className="text-9xl font-semibold tracking-tight text-[#141834] font-primary">
              Frequently asked questions
            </h2>
            <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              Let&apos;s connect
            </button>
          </div>
          <div className="w-2/4">
            <div className="flex gap-2 items-center mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-[#3167B0] text-white"
                      : "bg-[#F5F5F5] text-main"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <dl className="space-y-6">
              {faqs
                .filter((faq) => faq.category === activeCategory)
                .map((faq, index) => (
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
                              alt="icon"
                            />
                          ) : (
                            <Image
                              src={PlusIcon}
                              width={24}
                              height={24}
                              alt="icon"
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
