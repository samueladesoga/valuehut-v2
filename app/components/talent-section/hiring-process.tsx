"use client";
import Button from "../Button/Button";
import React from "react";
import { HiringCard } from "@/components/HiringCard/HiringCard";
import useScroll from "@/hooks/useScroll";

export default function HiringProcess() {
  const [divRef, isDivVisible] = useScroll<HTMLDivElement>({
    threshold: 0,
  });
  const fadeUpClass = isDivVisible ? "fade-up-50ms" : "";
  return (
    <div className="container mx-auto p-4 lg:p-0 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className=" leading-[61px] text-[47px] lg:text-5xl xl:text-9xl font-primary font-medium text-main mb-6">
            How does our hiring process work?
          </h2>

          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-8 "
          >
            Get more information
          </Button>
        </div>

        <div className="space-y-4">
          <HiringCard
            divRef={divRef}
            bgColor="bg-[#C5D8E0]"
            text="01"
            description="Meet with the Hiring Manager to understand the business and team needs."
            className={`${fadeUpClass}`}
          />
          <HiringCard
            divRef={divRef}
            bgColor="bg-[#C4EBE3]"
            text="02"
            className={`${fadeUpClass}`}
            description="Draft a Job description and get client approval."
          />
          <HiringCard
            bgColor="bg-[#F5E5D7]"
            text="03"
            description="Present relevant profiles with 7 working days."
            divRef={divRef}
            className={`${fadeUpClass}`}
          />
          {/* {Steps.map((step: ISteps, index: number) => (
            <HiringCard
              divRef={divRef}
              key={index}
              bgColor={step.bgColor}
              text={step.number}
              className={fadeUpClass}
              description={step.description}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
