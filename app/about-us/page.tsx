"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import SectionPara from "@/components/SectionPara/SectionPara";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import WhoAreWe from "@/components/WhoAreWe/WhoAreWe";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

function AboutPage() {
  return (
    <section className="flex flex-col justify-between items-center gap-24 bg-[#f5f5f5] pt-10 h-auto">
      <div className="max-w-[693px] mx-auto flex flex-col items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileOutOfView={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SectionTitle title="Co-creating better ways of working and leading." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileOutOfView={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SectionPara
            className="font-normal"
            para="We are an agile Management consultancy that is helping Organisations transform into a network of interdependent product teams across different business units."
          />
        </motion.div>
      </div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileOutOfView={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/images/about-us.png"
          width={1320}
          height={660}
          alt="About Us"
          className="w-[1320px] h-[660px] rounded-[20px] bg-cover bg-no-repeat"
        />
      </motion.div>
      <div className="container sm:pt-5">
        <OurPartners />
      </div>

      <div className="container sm:pt-20">
        <WhoAreWe />
      </div>

      <div className="container sm:pt-28">
        <MeetTheTeam />
      </div>

      <div className="container py-8">
        <WhyChooseUs
          title={"Why choose us?"}
          subtitle={
            "Established product delivery teams often face challenges related to adoption"
          }
          stats={[
            {
              number: "23+",
              title: "Successful Students",
            },
            {
              number: "3x",
              title: "More chance to get hired",
            },
            {
              number: "15+",
              title: "Years of collective experience",
            },
          ]}
        />
      </div>

      <div className="container sm:py-8">
        <ClientReviews />
      </div>
    </section>
  );
}

export default AboutPage;
