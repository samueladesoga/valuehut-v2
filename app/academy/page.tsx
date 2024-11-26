"use client";

import React from "react";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import CourseCard from "@/components/CourseCard/CourseCard";
import { AllCourses, AcademyHero } from "@/data/Academy/AllTrainings";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import { faqs } from "@/data/Faqs/faqpage";
import FAQ from "@/components/FaqPage/Faq/Faq";
import TrainingsPartners from "@/components/TrainingsPage/TriningsPartners/TrainingsPartners";

export default function Home() {
  const filterOptions = [
    { value: "latest", label: "Latest" },
    { value: "highestRated", label: "Highest Rated" },
    { value: "duration", label: "Shortest Duration" },
  ];

  const handleFilterChange = (selectedFilter: {
    value: string;
    label: string;
  }) => {
    console.log("Selected Filter:", selectedFilter.value);
  };

  return (
    <>
      <div className="bg-[#f5f5f5] ">
        <HeroComponent
          title={AcademyHero.title}
          subtitle={AcademyHero.subtitle}
          backgroundImage={AcademyHero.backgroundImage}
          pill={AcademyHero.pill}
        />
        <div className="container flex pt-14 justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-2">
          <div className="px-4 xl:px-0 bg-white lg:bg-inherit">
            <h1 className=" text-7xl sm:text-8xl font-primary font-medium bg-white lg:bg-inherit">
              All trainings
            </h1>
          </div>
          <TrainingsPartners />
        </div>

        <div className="container bg-white lg:bg-inherit px-4 xl:px-0 ">
          <div className="">
            <FilterDropdown
              options={filterOptions}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="container  pt-[1px] lg:pt-5">
          <div className="flex flex-col gap-[2px]">
            {AllCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                dates={course.dates}
                rating={course.rating}
                reviews={course.reviews}
                logo={course.logo}
                id={course.id}
              />
            ))}
            {AllCourses.length === 0 && (
              <p className="text-center col-span-full text-gray-500">
                No courses found.
              </p>
            )}
          </div>
        </div>
        <div className="py-28">
          <Testimonials />
        </div>
        <div className="py-10">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </>
  );
}
