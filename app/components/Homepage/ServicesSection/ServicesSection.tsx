"use client";
import React from "react";
import { coCreatingData, IServicesSection } from "@/data/Home/Services";
import useScroll from "@/hooks/useScroll";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  data?: IServicesSection;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data = coCreatingData,
}) => {
  const { title, subtitle, statistics } = data;
  const [divRef, isDivVisible] = useScroll<HTMLDivElement>({
    threshold: 0,
  });

  const fadeUpClass = isDivVisible ? "fade-up-0ms" : "";
  const fadeUpClass1 = isDivVisible ? "fade-up-50ms" : "";
  const fadeUpClass2 = isDivVisible ? "fade-up-100ms" : "";

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
                <h1
                  className={`text-main font-primary text-8xl ${fadeUpClass1}`}
                  ref={divRef}
                >
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
        <ServiceCard
          divRef={divRef}
          className={`${fadeUpClass}`}
          title="Academy"
          description="Developing Organisation agility capabilities is a complex journey of Learning and Unlearning"
          bgColor="bg-[#05668D]"
          href="/academy"
          buttonText="Explore Courses"
        />
        <ServiceCard
          divRef={divRef}
          className={`${fadeUpClass1}`}
          title="Consulting"
          description="Our training courses have been carefully designed to provide individuals and teams"
          bgColor="bg-[#02374B]"
          href="/consulting"
          buttonText="Read More"
        />
        <ServiceCard
          divRef={divRef}
          className={`${fadeUpClass2}`}
          title="Talent Matching"
          description="Established product delivery teams often face challenges related to adoption"
          bgColor="bg-[#A97240]"
          href="/talent-matching"
          buttonText="Read More"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
