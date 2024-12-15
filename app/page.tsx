import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import ServicesSection from "@/components/Homepage/ServicesSection/ServicesSection";
import OurMission from "@/components/Homepage/OurMission/OurMission";
import HeroBanner from "@/components/Homepage/HeroBanner/HeroBanner";
import ServicesOverview from "@/components/Homepage/ServicesOverview/ServicesOverview";
import TalentMatchingCTA from "@/components/Homepage/TalentMatchingCTA/TalentMatchingCTA";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import LatestArticles from "@/components/Homepage/LatestArticles/LatestArticles";
import BookACallCTA from "@/components/Homepage/BookACallCTA/BookACallCTA";
import { Articles } from "@/data/Home/Testimonials";
import { heroData } from "./data/Home/HeroSection";
import ClientLogosSectionWrapper from "@/components/Homepage/ClientLogosSectionWrapper/ClientLogosSectionWrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-[#f5f5f5]">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
        ratingText={heroData.ratingText}
        ratingDetails={heroData.ratingDetails}
        showRating={true}
        smallScreenImage={heroData.smallScreenImage}
        largeScreenImage={heroData.largeScreenImage}
      />
      <ClientLogosSectionWrapper />
      <ServicesSection />
      <OurMission description="Helping organisations transform into a network of interdependent product teams across different business units." />
      <HeroBanner
        title="ValueHut Academy"
        subtitle="An integral part of your organisation's transformational journey - explore our Agile Leadership, Product Management, Scrum Mastery and other courses; delivered by seasoned Consultants."
      />
      <ServicesOverview />
      <div className="py-6 sm:py-16">
        <TalentMatchingCTA />
      </div>
      <div>
        <Testimonials />
      </div>
      <LatestArticles
        title="Latest articles"
        articles={Articles}
        description="Insights from our work and experiences with our clients"
      />

      <div className="mb-0 md:mb-20 mt-10 md:mt-0">
        <BookACallCTA
          title="Ready to book a free call?"
          description="We want to understand your context to help us deliver the outcomes you desire."
          buttonText="Book a free call"
          imageUrl="/images/BookACallCTA-image.png"
        />
      </div>
    </div>
  );
}
