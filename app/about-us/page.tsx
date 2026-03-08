import React from "react";
import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Agile Management Consultancy",
  description:
    "Learn about ValueHut Consulting, an Agile Management Consultancy helping organisations deliver exceptional products and services. We are also the organisers of Scrum Day Nigeria",
  alternates: {
    canonical: "https://www.valuehut.co/about-us",
  },
  openGraph: {
    title: "About Us | ValueHut Consulting - Agile Management Consultancy",
    description:
      "Discover ValueHut Consulting, an Agile Management Consultancy empowering organisations to work better and deliver great results.",
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
    title: "About Us | ValueHut Consulting - Agile Management Consultancy",
    description:
      "Discover ValueHut Consulting, an Agile Management Consultancy empowering organisations to work better and deliver great results.",
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
