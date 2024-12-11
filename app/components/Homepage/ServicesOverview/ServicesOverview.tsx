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
        <SectionTitle title="Take your business to the next level" />
        <SectionPara para="Helping Organisations transform into a network of interdependent product teams across different business units into a network of interdependent." />
        <Button
          bgColor="fill-brand-secondary"
          rounded="full"
          size="medium"
          onClick={navigateToConsulting}
        >
          Explore our services
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 mt-5 sm:my-16">
        <div className="md:hidden">
          <div className="bg-[#E5DFD9] rounded-lg shadow-lg">
            <Card
              title="Delivery Management"
              description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
              icon={Questions}
            />
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-[#A5E0E7] rounded-lg shadow-lg">
            <Card
              title="Consulting"
              description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
              icon={Blend}
            />
          </div>
        </div>

        <motion.div
          className="hidden md:block bg-[#E5DFD9] rounded-lg shadow-lg"
          initial={{ rotate: -10, x: 65 }}
          whileInView={{ rotate: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card
            title="Delivery Management"
            description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
            icon={Questions}
          />
        </motion.div>

        <motion.div
          className="hidden md:block bg-[#A5E0E7] rounded-lg shadow-lg"
          initial={{ rotate: 10, x: -65 }}
          whileInView={{ rotate: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card
            title="Consulting"
            description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
            icon={Blend}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
