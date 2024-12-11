import HeroSection from "./components/Homepage/HeroSection/HeroSection";
import ClientLogosSection from "./components/Homepage/ClientLogosSection/ClientLogosSection";
import ServicesSection from "./components/Homepage/ServicesSection/ServicesSection";
import OurMission from "./components/Homepage/OurMission/OurMission";
import HeroBanner from "./components/Homepage/HeroBanner/HeroBanner";
import ServicesOverview from "./components/Homepage/ServicesOverview/ServicesOverview";
import TalentMatchingCTA from "./components/Homepage/TalentMatchingCTA/TalentMatchingCTA";
import Testimonials from "./components/Homepage/Testimonials/Testimonials";
import LatestArticles from "./components/Homepage/LatestArticles/LatestArticles";
import BookACallCTA from "./components/Homepage/BookACallCTA/BookACallCTA";
import { Articles } from "./data/Home/Testimonials";
import Button from "./components/Button/Button";
import { heroData } from "./data/Home/HeroSection";

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
      <ClientLogosSection />
      <ServicesSection />
      <OurMission
        description="Helping organisations transform into a network of interdependent product teams across different business units."
        button={
          <Button size="medium" border rounded="full" textColor="main">
            Button example
          </Button>
        }
      />
      <HeroBanner
        title="Transforming Organisations and Teams."
        subtitle="Your people are the heart of your organisation; hence, our mission is to help improve how people work, lead, and are led."
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
        description="Helping Organisations transform into a network of interdependent product"
      />

      <div className="mb-0 md:mb-20 mt-10 md:mt-0">
        <BookACallCTA
          title="Ready to book a free call?"
          description="ValueHut Consultancy is an Agile Management Consultant, helping organization explore better ways of working and leading."
          buttonText="Book a free call"
          imageUrl="/images/BookACallCTA-image.png"
        />
      </div>
    </div>
  );
}
