"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionPara from "@/components/SectionPara/SectionPara";
import Card from "@/components/Card/Card";
import Blend from "@/blend.svg";
import Questions from "@/question.svg";

const ServicesOverview = () => {
  const router = useRouter();

  const navigateToConsulting = () => {
    router.push("/consulting");
  };

  return (
    <section className="max-w-[924px] px-6 xl:px-0 py-12 flex flex-col mx-auto gap-4">
      <div className="max-w-[582px] mx-auto flex flex-col justify-center items-center gap-8 sm:gap-8">
        <SectionTitle title="Consulting Service" />
        <SectionPara para="Our consultants advise and drive meaningful change across your organisation; enabling the delivery of strategic initiatives while upskilling people in the process." />
        <Button
          bgColor="fill-brand-secondary"
          rounded="full"
          size="medium"
          onClick={navigateToConsulting}
        >
          Explore all services
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 mt-5 sm:my-16">
        <div className="md:hidden">
          <div className="bg-[#E5DFD9] rounded-lg">
            <Card
              title="Delivery Management"
              description="Our consultants lead your organisations delivery teams; enabling the organisation with capabilities required to build great products"
              icon={Questions}
            />
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-[#A5E0E7] rounded-lg">
            <Card
              title="Product Delivery"
              description="Outsource the delivery of your product ideas to us; idea to minimum viable product in 3 months using Incremental and Iterative approaches."
              icon={Blend}
            />
          </div>
        </div>

        <motion.div
          className="hidden md:block bg-[#E5DFD9] rounded-lg"
          initial={{ rotate: -10, x: 65 }}
          whileInView={{ rotate: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card
            title="Delivery Management"
            description="Our consultants lead your organisations delivery teams; building capabilities within your organisation enabling them in building great products"
            icon={Questions}
          />
        </motion.div>

        <motion.div
          className="hidden md:block bg-[#A5E0E7] rounded-lg"
          initial={{ rotate: 10, x: -65 }}
          whileInView={{ rotate: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card
            title="Product Delivery"
            description="Outsource the delivery of your product ideas to us; idea to minimum viable product in 3 months using Incremental and Iterative approaches."
            icon={Blend}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
