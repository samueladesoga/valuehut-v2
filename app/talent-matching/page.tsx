import FAQ from "@/components/FaqPage/Faq/Faq";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import HeroBanner from "@/components/Homepage/HeroBanner/HeroBanner";
import CriteriaSection from "@/components/talent-section/CriteriaSection";
import HireProfessionals from "@/components/talent-section/hire-professionals";
import HiringProcess from "@/components/talent-section/hiring-process";
import TalentSection from "@/components/talent-section/talent-section";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { heroData } from "@/data/talent-matching/talent-matching";
import React from "react";
import { faqs } from "@/data/Faqs/faqpage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Matching",
  description:
    "ValueHut Consulting talent matching service helps you find the right agile and transformation professionals for your business.",
};

function page() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
      />

      <div className="px-6 py-6 sm:py-16 xl:px-0">
        <HireProfessionals />
      </div>

      <HeroBanner
        title="Let's get started"
        subtitle="We will reduce your lead time by at least 50% and increase your chances of hiring the right talent by 3x."
        image={"/images/TalentSection.png"}
        btnText="Contact us"
        btnLink="/contact-us"
      />

      <div className="px-6 py-6 sm:py-16 xl:px-0">
        <TalentSection />
      </div>

      <div className="px-6 py-6 sm:py-16 xl:px-0">
        <HiringProcess />
      </div>

      <div className="px-6 py-6 sm:py-16 xl:px-0">
        <CriteriaSection
          title="A refined approach to finding great talent"
          description="Having reviewed hundreds of Job Adverts for IT, Transformation & Product Professionals, we observed that the majority of adverts do not seem to be written in a manner that reflects the realities of the job being recruited for. This is why create job description to help you find great talent."
          highlights={[
            "Certifications do not guarantee competence",
            "Candidates experiences are validated by our teams of consultants",
            "Candidates must understand practices and prrinciples over tools",
          ]}
          buttonLabel="Learn more"
          buttonLink="/contact-us"
        />
      </div>

      <div className="container py-8">
        <WhyChooseUs
          title={"Why choose us?"}
          subtitle={
            "Our talent network includes experienced Professionals and Consultant that have passed through our Academy and Consulting service pillars."
          }
          stats={[
            {
              number: "50+",
              title: "Successful Matches",
            },
            {
              number: "3x",
              title: "Increased chance to hire the right talent",
            },
            {
              number: "100+",
              title: "Years of collective experience",
            },
          ]}
        />
      </div>

      <div className="py-20">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}

export default page;
