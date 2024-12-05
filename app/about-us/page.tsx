"use client";
import React from "react";
import Image from "next/image";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";
import SectionPara from "@/components/SectionPara/SectionPara";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import WhoAreWe from "@/components/WhoAreWe/WhoAreWe";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import useScroll from "@/hooks/useScroll";

function AboutPage() {
  const [divRef, isTitleVisible] = useScroll<HTMLDivElement>({
    threshold: 0,
  });

  const fadeUpClass = isTitleVisible ? "fade-up-100ms" : "";
  return (
    <section className="flex flex-col justify-between items-center gap-24 bg-[#f5f5f5] pt-10 h-auto">
      <div className="max-w-[693px] mx-auto flex flex-col items-center justify-center pt-24">
        <SectionTitle
          titleRef={divRef}
          className={`${fadeUpClass}`}
          title="Co-creating better ways of working and leading."
        />
        <SectionPara
          ref={divRef}
          className={`font-normal ${fadeUpClass}`}
          para="We are an agile Management consultancy that is helping Organisations transform into a network of interdependent product teams across different business units."
        />
      </div>
      <div className={`container ${fadeUpClass}`}>
        <Image
          src="/images/about-us.png"
          width={1320}
          height={660}
          alt="About Us"
          className="w-[1320px] h-[660px] rounded-[20px] bg-cover bg-no-repeat"
        />
      </div>
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
