/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import CourseFilter from "@/components/CourseFilter/CourseFilter"; 
import { AcademyHero } from "@/data/Academy/AllTrainings";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import { faqs } from "@/data/Faqs/faqpage";
import FAQ from "@/components/FaqPage/Faq/Faq";
import TrainingsPartners from "@/components/TrainingsPage/TriningsPartners/TrainingsPartners";
import { getAllCourses } from "@/lib/courseApi";
import { getMonthAndDay, getYear } from "@/utils/ConvertDate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy | Agile Leadership and Scrum Courses",
  description:
    "Join ValueHut Consulting Academy to master Agile Leadership and Scrum courses. Empower individuals, teams, and organisations with interative training, in partnership with scrum.org",
  openGraph: {
    title: "Academy | Agile Leadership and Scrum Courses - ValueHut Consulting",
    description:
      "Join ValueHut Consulting Academy to master Agile Leadership and Scrum courses. Empower individuals, teams, and organisations with interative training, in partnership with scrum.org",
    url: "https://www.valuehut.co/academy",
    images: [
      {
        url: "",
        alt: "ValueHut Consulting Academy",
      },
    ],
  },
};

export default async function Home() {
  const courses = await getAllCourses();

  const processedCourses = courses.map((course: any) => {
    const unfilledClasses = course.classes
      .filter((cls: any) => !cls.filled)
      .sort(
        (a: any, b: any) =>
          new Date(`${a.startDate} ${a.year}`).getTime() -
          new Date(`${b.startDate} ${b.year}`).getTime()
      );

    const firstUnfilledClass = unfilledClasses[0];

    return {
      ...course,
      firstUnfilledClassDate: firstUnfilledClass
        ? `${getMonthAndDay(firstUnfilledClass.startDate)}, ${getYear(firstUnfilledClass.startDate)}`
        : "No upcoming dates",
    };
  });

  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={AcademyHero.title}
        subtitle={AcademyHero.subtitle}
        backgroundImage={AcademyHero.backgroundImage}
        pill={AcademyHero.pill}
        showRating={true}
        ratingText={AcademyHero.ratingText}
        ratingDetails={AcademyHero.ratingDetails}
        ratingImage={AcademyHero.ratingImage}
      />
      <div className="container flex pt-14 pb-1 sm:pb-8 justify-between flex-col-reverse lg:flex-row gap-20 lg:gap-2">
        <div className="px-4 xl:px-0 bg-white lg:bg-inherit">
          <h2 className="text-7xl sm:text-8xl font-primary font-medium bg-white lg:bg-inherit">
            All courses
          </h2>
        </div>
        <TrainingsPartners />
      </div>

      <CourseFilter courses={processedCourses} />

      <div className="py-28">
        <Testimonials />
      </div>
      <div className="py-10">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}
