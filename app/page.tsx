import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import ServicesSection from "@/components/Homepage/ServicesSection/ServicesSection";
import OurMission from "@/components/Homepage/OurMission/OurMission";
import HeroBanner from "@/components/Homepage/HeroBanner/HeroBanner";
import ServicesOverview from "@/components/Homepage/ServicesOverview/ServicesOverview";
import TalentMatchingCTA from "@/components/Homepage/TalentMatchingCTA/TalentMatchingCTA";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import LatestArticles from "@/components/Homepage/LatestArticles/LatestArticles";
import BookACallCTA from "@/components/Homepage/BookACallCTA/BookACallCTA";
import { heroData } from "./data/Home/HeroSection";
import ClientLogosSectionWrapper from "@/components/Homepage/ClientLogosSectionWrapper/ClientLogosSectionWrapper";
import { getAllArticles } from "./lib/api";

export default async function Home() {
  const AllArticles = await getAllArticles();
  const Article = AllArticles.props.posts;
  const articlesToShow = Article.filter((article) => article.showInHomePage);
  const topThreeArticles = articlesToShow.slice(0, 3);
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
        backgroundImage={heroData.backgroundImage}
      />
      <ClientLogosSectionWrapper />
      <ServicesSection />
      <OurMission description="Enabling organisations to transform into a network of self-managing and interdependent teams." />
      <HeroBanner
        title="Academy"
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
        articles={topThreeArticles}
        description="Insights from our work and experiences with our clients"
      />

      <div className="mb-0 md:mb-20 mt-10 md:mt-0">
        <BookACallCTA
          title="We are here to help."
          description="Are you ready to have a no-obligation chat about your organisational challenges? "
          buttonText="Book a free call"
          imageUrl="/images/BookACallCTA-image.png"
          url="https://calendly.com/samueladesoga/valuehut-consulting"
        />
      </div>
    </div>
  );
}
