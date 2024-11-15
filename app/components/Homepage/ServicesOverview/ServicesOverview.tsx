import React from "react";
import Button from "../../Button/Button";
import SectionTitle from "./../../SectionTitle/SectionTitle";
import SectionPara from "./../../SectionPara/SectionPara";
import Card from "./../../Card/Card";
import Blend from "./../../../../public/blend.svg";
import Questions from "./../../../../public/question.svg";

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Delivery Management",
      description:
        "Developing Organisation agility capabilities is a complex journey of Learning and Unlearning.",
    },
    {
      id: 2,
      title: "Consulting",
      description:
        "Developing Organisation agility Capabilities is a complex journey of Learning and Unlearning.",
    },
  ];

  return (
    <div className="container services-overview py-12 flex flex-col mx-auto gap-4 max-w-[924px]">
      <div className="mx-auto flex flex-col items-center gap-2">
        <SectionTitle title="Take your business to the next level" />
        <SectionPara para="Helping Organisations transform into a network of interdependent product teams across different business units into a network of interdependent." />
        <Button bgColor="fill-brand-secondary" rounded="full" size="medium">
          Explore our services
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 sm:mt-10">
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
    </div>
  );
};

export default ServicesOverview;
