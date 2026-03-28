import React from "react";
import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ValueHut Consulting | London & Lagos",
  description:
    "Learn about ValueHut Consulting, an Agile Management Consultancy serving organisations in London and Lagos. We also organise Scrum Day Nigeria.",
  alternates: {
    canonical: "https://www.valuehut.co/about-us",
  },
  openGraph: {
    title: "About Us | ValueHut Consulting | London & Lagos",
    description:
      "Discover ValueHut Consulting, an Agile Management Consultancy serving organisations in London and Lagos. Organiser of Scrum Day Nigeria.",
    url: "https://www.valuehut.co/about-us",
    images: [
      {
        url: "/images/about-us.png",
        width: 1200,
        height: 630,
        alt: "About ValueHut Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ValueHut Consulting | London & Lagos",
    description:
      "Discover ValueHut Consulting, an Agile Management Consultancy serving organisations in London and Lagos. Organiser of Scrum Day Nigeria.",
    images: ["/images/about-us.png"],
  },
};

const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
