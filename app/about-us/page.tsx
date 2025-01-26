import React from "react";
import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ValueHut Consulting is an Agile Management Consultancy, enabling organisations to explore better ways of working, thats delivers great products and services to their clients. We are also the convener of the Scrum Day Nigeria conference, with the first event holding on 5th of March, 2025 in Lagos.",
};

const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
