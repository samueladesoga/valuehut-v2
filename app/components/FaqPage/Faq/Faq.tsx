"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "@/icons/plus.svg";
import CircleMinusIcon from "@/icons/remove-circle.svg";
import Mail from "@/icons//mail.svg";
import Mentor from "@/icons/mentor.svg";

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
  const [activeCategory, setActiveCategory] = useState<string>("ValutHut");

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-[#f5f5f5] sm:bg-white container rounded-3xl p-6 sm:p-16 ">
      <div className="flex justify-evenly flex-col lg:flex-row gap-8 lg:gap-24 items-center lg:items-start">
        <div className="lg:w-1/2 flex flex-col justify-between h-auto lg:h-[689px] ">
          <div className="flex flex-col items-center lg:items-start justify-start gap-6">
            <h2 className="text-7xl sm:text-9xl font-normal tracking-tight text-center lg:text-left text-[#141834] font-primary">
              Frequently asked questions
            </h2>
            <p className="hidden md:flex text-xl font-medium font-secondary">
              You got more to ask?
            </p>
            <button className="hidden md:flex bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              Let&apos;s connect
            </button>
          </div>
          <div className="hidden lg:flex justify-between">
            <div className="flex gap-2 justify-start items-start">
              <Image src={Mail} alt="Mail" width={32} height={32} />
              <div>
                <h2 className="text-lg font-medium font-secondary text-[#161A1D]">
                  Email contact
                </h2>
                <p className="text-sm text-main font-secondary ">
                  info@valuehut.co
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Image src={Mentor} alt="Mentor" width={32} height={32} />
              <div>
                <h2 className="text-lg font-medium font-secondary text-[#161A1D]">
                  Book a consultation
                </h2>
                <p className="text-sm text-main font-secondary">
                  Open Calendly
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-8">
          <div className="flex gap-3 items-center mb-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium font-secondary transition-colors ${
                  activeCategory === category
                    ? "bg-fill-neutral-strong text-white"
                    : "bg-[#03243212] text-main"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <dl className="flex flex-col gap-[14px]">
            {faqs
              .filter((faq) => faq.category === activeCategory)
              .map((faq, index) => (
                <div
                  key={faq.question}
                  className={`max-w-[436px] p-6 rounded-xl transition-all duration-300 ease-in-out ${
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
                      <span className="text-base sm:text-xl font-secondary w-[90%] text-main font-semibold">
                        {faq.question}
                      </span>
                      <span className="flex items-center">
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
                    <dd className="mt-2 pr-14">
                      <p className="text-sm p-0 text-main font-normal font-secondary">
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
  );
};

export default FAQ;
