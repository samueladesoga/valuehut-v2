import React from "react";
import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Agile Management Consultancy",
  description:
    "Learn about ValueHut Consulting, an Agile Management Consultancy helping organisations deliver exceptional products and services. We are also the organisers of Scrum Day Nigeria",
  openGraph: {
    title: "About Us | ValueHut Consulting - Agile Management Consultancy",
    description:
      "Discover ValueHut Consulting, an Agile Management Consultancy empowering organisations to work better and deliver great results.",
    url: "https://www.valuehut.co/about-us",
    images: [
      {
        url: "",
        alt: "About ValueHut Consulting",
      },
    ],
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
