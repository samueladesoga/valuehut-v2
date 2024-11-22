import React from "react";
import {
  coCreatingData,
  IServicesSection,
} from "@/data/Home/Services";
import Button from "@/components/Button/Button";

interface ServicesSectionProps {
  data?: IServicesSection;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data = coCreatingData,
}) => {
  const { title, subtitle, statistics, cards } = data;
  return (
    <section className="container py-6 sm:py-16 px-6 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        <div>
          <h2 className="text-7xl font-primary text-main text-center font-medium md:text-left leading-[61.1px] sm:text-9xl">
            {title}
          </h2>
        </div>
        <div>
          <p className="mb-6 font-secondary text-2xl font-normal text-center md:text-left">
            {subtitle}
          </p>
          <div className="flex justify-between gap-14 sm:gap-20">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center md:text-left ">
                <h1 className="text-main font-primary text-8xl ">
                  {stat.value}
                </h1>
                <p className="text-accentMain font-secondary text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-5 sm:p-8 rounded-[20px] font-primary text-white shadow-md flex flex-col justify-between items-start`}
            style={{ minHeight: "400px" }}
          >
            <div>
              <h3 className="text-3xl sm:text-6xl font-semibold mb-2  ">
                {card.title}
              </h3>
              <p className="text-sm mb-6 font-secondary ">{card.description}</p>
            </div>

            <Button
              size="medium"
              rounded="full"
              className="bg-transparent border border-white"
            >
              {card.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
