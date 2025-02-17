"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PlusIcon from "@/icons/plus.svg";
import CircleMinusIcon from "@/icons/remove-circle.svg";
import Mail from "@/icons/mail.svg";
import Mentor from "@/icons/mentor.svg";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const [activeCategory, setActiveCategory] = useState<string>("");

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const pathname = usePathname();
  useEffect(() => {
    const currentPath = pathname;
    const pathToCategoryMap: Record<string, string> = {
      "/value-hut": "ValueHut",
      "/talent-matching": "Talent Matching",
      "/academy": "Academy",
      "/faq": "ValueHut",
    };

    setActiveCategory(pathToCategoryMap[currentPath] || "ValueHut");
  }, [pathname]);

  const toggleFAQ = (index: number): void => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const router = useRouter();

  const navigateToContactUs = () => {
    router.push("/contact-us");
  };

  return (
    <div className="bg-[#f5f5f5] sm:bg-white container rounded-3xl py-6 px-4 xl:px-6 sm:p-16 ">
      <div className="flex justify-evenly flex-col lg:flex-row gap-8 lg:gap-24 items-center lg:items-start">
        <div className="lg:w-1/2 flex flex-col justify-between h-auto lg:h-[689px] ">
          <div className="flex flex-col items-center lg:items-start justify-start gap-6">
            <h1 className="text-7xl sm:text-9xl font-normal tracking-tight text-center lg:text-left text-[#141834] font-primary">
              Frequently asked questions
            </h1>
            <p className="hidden md:flex text-xl font-medium font-secondary">
              You got more to ask?
            </p>

            <Button
              rounded="full"
              size="small"
              bgColor="fill-brand-secondary"
              className=" text-main px-6 py-3 hidden sm:block"
              onClick={navigateToContactUs}
            >
              Let&apos;s connect
            </Button>
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
                  <Link
                    href={
                      "https://calendly.com/samueladesoga/valuehut-consulting"
                    }
                    target="_blank"
                  >
                    Open Calendly
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-8">
          <div className="flex gap-3 items-center px-4 sm:px-0 mb-4 flex-wrap">
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
                  className={`max-w-[576px] p-6 rounded-xl transition-all duration-500 ease-in-out  ${
                    openIndex === index
                      ? "bg-white border-[#3167B0] border"
                      : "sm:bg-[#F5F5F5] border border-transparent"
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

                  <dd
                    className={`mt-2 pr-18 transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm p-0 text-main font-normal font-secondary">
                      {faq.answer}
                    </p>
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
