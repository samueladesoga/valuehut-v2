import ClientReviews from "@/components/ClientReviews/ClientReviews";
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

function page() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage}
      />

      <HireProfessionals />

      <HeroBanner
        title="Start Hiring Now"
        subtitle="Helping Organisations transform into a network of interdependent product"
        image={"/images/TalentSection.png"}
      />

      <TalentSection />

      <HiringProcess />

      <CriteriaSection
        title="skip criteria that limit finding great talent"
        description="We have reviewed hundreds of Job Adverts for Scrum Master, Delivery Leads, Delivery Managers and we have observed that these adverts have not been written to attract Professional Scrum Masters."
        highlights={[
          "Candidate must hold a CSM or PSM 1 certification",
          "Candidates must be able to hold Scrum Ceremonies",
          "Candidates must be familiar with Jira and any similar tools out there",
        ]}
        buttonLabel="Learn more"
      />

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

      <div className="py-20">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}

export default page;