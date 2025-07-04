"use client";
import React from "react";
import { coCreatingData, IServicesSection } from "@/data/Home/Services";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  data?: IServicesSection;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data = coCreatingData,
}) => {
  const { title, subtitle, statistics } = data;

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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-main font-primary text-8xl "
                >
                  {stat.value}
                </motion.div>
                <p className="text-accentMain font-secondary text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ServiceCard
            title="Academy"
            description="Empowering professionals with cutting-edge skills and transformative learning experiences, 
            providing training courses that equip your teams with the dynamic capabilities needed to thrive 
            in rapidly evolving business landscapes."
            bgColor="bg-[#05668D]"
            href="/academy"
            buttonText="Explore Courses"
          />
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ServiceCard
            title="Consulting"
            description="Delivering expert strategic guidance that helps organisations navigate complex business challenges, 
            offering innovative solutions and actionable insights that drive operational excellence and strategic 
            transformation."
            bgColor="bg-[#02374B]"
            href="/consulting"
            buttonText="Read More"
          />
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ServiceCard
            title="Talent Matching"
            description="Connecting organisations with exceptional professionals who can drive innovation, efficiency, and 
            sustainable growth, ensuring that businesses are paired with top-tier agile talent perfectly aligned 
            with their strategic objectives."
            bgColor="bg-[#A97240]"
            href="/talent-matching"
            buttonText="Read More"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
