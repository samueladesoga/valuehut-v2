"use client";

import React, { useState } from "react";
import { services } from "../../data/Consulting/services";
import ConsultancyServiceItem from "../Consulting/ConsultancyServiceItem";
import Button from "../Button/Button";
import Link from "next/link";

const getBackgroundColor = (index: number) => {
  const colors = [
    "bg-[#E5EEF7]",
    "bg-[#F5F5F5]",
    "bg-[#FFF4EC]",
    "bg-[#E5EEF7]",
  ];
  return colors[index % colors.length];
};

export default function ConsultancyServices() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="container  px-4 sm:p-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
        <h2 className="text-8xl font-medium sm:text-6xl lg:text-7xl font-primary   ">
          Consultancy Services
          <br />
          Delivered by Our Experts
        </h2>
        <div className="text-right hidden lg:block">
          <p className="text-xl mb-2 font-medium font-secondary">
            Want to know more?
          </p>
          <Link href="https://calendly.com/samueladesoga/valuehut-consulting">
            <Button
              bgColor="fill-brand-secondary"
              size="medium"
              rounded="full"
              className=" !text-sm"
            >
              Book a consultation
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-0 sm:space-y-4">
        {services.map((service, index) => (
          <ConsultancyServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
            points={service.points}
            backgroundColor={getBackgroundColor(index)}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
