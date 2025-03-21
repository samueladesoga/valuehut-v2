"use client";
import Button from "../Button/Button";
import React from "react";
import Link from "next/link";
import { HiringCard } from "@/components/HiringCard/HiringCard";
import { motion } from "framer-motion";

export default function HiringProcess() {
  return (
    <div className="container mx-auto p-4 lg:p-0 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className=" leading-[61px] text-[47px] lg:text-5xl xl:text-9xl font-primary font-medium text-main mb-6">
            How does our hiring process work?
          </h2>
          <Link href={"https://calendly.com/samueladesoga/valuehut-consulting"} target="_blank">
            <Button
              bgColor="fill-brand-secondary"
              size="medium"
              rounded="full"
              className="mt-8 "
            >
              Get more information
            </Button>
          </Link>

        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HiringCard
              bgColor="bg-[#C5D8E0]"
              text="01"
              description="A meeting with the hiring manager to understand your organisation and team needs."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HiringCard
              bgColor="bg-[#C4EBE3]"
              text="02"
              description="Draft and review job description; followed by the hiring manager's approval."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HiringCard
              bgColor="bg-[#F5E5D7]"
              text="03"
              description="Present relevant profiles with 7-10 working days."
            />
          </motion.div>
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
