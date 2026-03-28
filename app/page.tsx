import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ValueHut Consulting | Agile Management Consultancy",
  description:
    "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services.",
  alternates: {
    canonical: "https://www.valuehut.co",
  },
  openGraph: {
    title: "ValueHut Consulting | Agile Management Consultancy",
    description:
      "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services.",
    url: "https://www.valuehut.co",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "ValueHut Consulting - Agile Management Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValueHut Consulting | Agile Management Consultancy",
    description:
      "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services.",
    images: ["/images/hero.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ValueHut Consulting",
  url: "https://www.valuehut.co",
  logo: "https://www.valuehut.co/logos/v2-dark.png",
  description:
    "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services.",
  areaServed: ["London", "United Kingdom", "Lagos", "Nigeria"],
  telephone: ["+44(0)7946713054", "+234(0)8143021499"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "North Westgate House",
      addressLocality: "Harlow",
      addressRegion: "Essex",
      postalCode: "CM20 1YS",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "22 Glover Rd, Ikoyi",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/valuehut",
    "https://twitter.com/valuehut",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.valuehut.co/contact-us",
  },
};

const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ValueHut Consulting — UK",
    url: "https://www.valuehut.co",
    telephone: "+44(0)7946713054",
    email: "info@valuehut.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "North Westgate House",
      addressLocality: "Harlow",
      addressRegion: "Essex",
      postalCode: "CM20 1YS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.77085589811162,
      longitude: 0.08191492476874897,
    },
    areaServed: ["London", "Harlow", "Essex", "United Kingdom"],
    description:
      "ValueHut Consulting is an Agile Management Consultancy serving clients across London and the United Kingdom.",
    priceRange: "££",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ValueHut Consulting — Nigeria",
    url: "https://www.valuehut.co",
    telephone: "+234(0)8143021499",
    email: "info@valuehut.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Glover Rd, Ikoyi",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.455306393509238,
      longitude: 3.4277628114152754,
    },
    areaServed: ["Lagos", "Nigeria"],
    description:
      "ValueHut Consulting is an Agile Management Consultancy serving clients in Lagos, Nigeria.",
    priceRange: "₦₦",
  },
];

export default async function Home() {
  const Article = await getAllArticles();
  const articlesToShow = Article.filter((article) => article.showInHomePage);
  const topThreeArticles = articlesToShow.slice(0, 3);
  return (
    <div className="flex flex-col gap-8 bg-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {localBusinessSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
