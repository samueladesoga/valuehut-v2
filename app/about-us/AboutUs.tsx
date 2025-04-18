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
import Link from "next/link";

function AboutUs() {
  return (
    <section className="flex flex-col justify-between items-center gap-24 bg-[#f5f5f5] pt-10 h-auto">
      <div className="max-w-[693px] mx-auto flex flex-col items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SectionTitle title="ValueHut Consulting" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SectionPara
            className="font-normal px-4 xl:px-0"
            para="An agile Management consultancy that believes teamwork as the ultimate competitive advantage for organisations
            building better products and services with happier teams"
          />

          <div className="font-normal opacity-70 text-main text-base sm:text-sm text-center">
            Also, we are the organiser of the{" "}
            <Link
              href="https://scrumdaynigeria.org"
              target="_blank"
              className="underline hover:text-blue-500"
            >
              Scrum Day Nigeria
            </Link>
            , a yearly conference for organisation design experts, agile practitioners, product leaders and business leaders to share insights on how to build high-performing teams and organisations.
          </div>
        </motion.div>
      </div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
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
            "Experienced consultants and practitioners with a track record of transforming organisations and teams."
          }
          stats={[
            {
              number: "100+",
              title: "Transformed Organisations",
            },
            {
              number: "3x",
              title: "Increase in Organisation Effectiveness",
            },
            {
              number: "100+",
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

export default AboutUs;
