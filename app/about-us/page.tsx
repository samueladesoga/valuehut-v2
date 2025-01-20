import React from "react";
import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ValueHut Consulting is an Agile Management Consultancy, helping organisation explore better ways of working and leading to deliver great products and services to their clients.",
};

const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
