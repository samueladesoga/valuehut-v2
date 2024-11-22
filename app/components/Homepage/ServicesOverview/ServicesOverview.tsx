import React from "react";
import Button from "@/components/Button/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionPara from "@/components/SectionPara/SectionPara";
import Card from "@/components/Card/Card";
import Blend from "@/blend.svg";
import Questions from "@/question.svg";

const ServicesOverview = () => {
  return (
    <section className="max-w-[924px] px-6 xl:px-0 py-12 flex flex-col mx-auto gap-4">
      <div className="max-w-[582px] mx-auto flex flex-col justify-center items-center gap-8 sm:gap-8">
        <SectionTitle title="Take your business to the next level" />
        <SectionPara para="Helping Organisations transform into a network of interdependent product teams across different business units into a network of interdependent." />
        <Button bgColor="fill-brand-secondary" rounded="full" size="medium">
          Explore our services
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 mt-5 sm:my-16">
        <div className="bg-[#E5DFD9] rounded-lg shadow-lg sm:transform sm:-rotate-[10deg]   sm:z-10 sm:translate-x-14">
          <Card
            title="Delivery Management"
            description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
            icon={Questions}
          />
        </div>
        <div className="bg-[#A5E0E7] rounded-lg shadow-lg sm:transform sm:rotate-[10deg] z-20 sm:-translate-x-14">
          <Card
            title="Consulting"
            description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
            icon={Blend}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
