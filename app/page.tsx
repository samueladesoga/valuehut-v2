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

export default function Home() {
  return (
    <div className="flex  flex-col gap-8 bg-[#f5f5f5]">
      <main className="w-full relative min-h-screen">
        <HeroSection
          title="Redefine the way you work."
          subtitle="Helping organizations transform into a network of interdependent product teams across different sectors."
          buttonText="Get Started Now"
          buttonLink="/get-started"
          showRating={true}
          ratingText="Excellent"
          ratingDetails="4.78 out of 5 based on 34 reviews"
        />
      </main>
      <ClientLogosSection  />
      <ServicesSection />
      <OurMission
        description="Helping organisations transform into a network of interdependent product teams across different business units."
        button={
          <Button size="medium" border rounded="full" >Button example</Button>
        }
      />
      <HeroBanner
        title="Redefine the way you work."
        subtitle="Helping organizations transform into a network of interdependent product teams across different sectors."
      />
      <ServicesOverview />
      <TalentMatchingCTA />
      <Testimonials />
      <LatestArticles
        title="Latest articles"
        articles={Articles}
        description="Helping Organisations transform into a network of interdependent product"
      />

      <div className="mb-20">
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
