"use client";

import React from "react";
import Image from "next/image";
import arrowright from "@/icons/arrowright.svg";
import CriteriImage from "@/images/CriteriaImage.png";
import Button from "../Button/Button";

interface CriteriaSectionProps {
  title?: string;
  description?: string;
  highlights?: string[];
  buttonLabel?: string;
}

const CriteriaSection: React.FC<CriteriaSectionProps> = ({
  title,
  description,
  highlights,
  buttonLabel,
}) => {
  return (
    <section className="container py-16">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-6 lg:px-0">
        <div className="lg:w-1/2">
          <h1 className="text-[47px] leading-[61px] xl:text-9xl font-medium font-primary text-main mb-6">
            {title}
          </h1>
          <p className="text-sm text-main font-medium font-secondary mb-6">
            {description}
          </p>
          <p className="text-base sm:text-xl font-secondary text-main font-semibold mb-4">
            Majority of these adverts have criteria such:
          </p>
          <ul className="space-y-4">
            {highlights?.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src={arrowright}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-base sm:text-lg font-medium text-main font-secondary">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-8 "
          >
            {buttonLabel}
          </Button>
        </div>

        <div>
          <div className="  shadow-md">
            <Image
              src={CriteriImage}
              alt="Team collaborating"
              className="object-cover"
              layout="intrinsic"
              width={543}
              height={400}
              sizes="(max-width: 640px) 361px, 543px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
