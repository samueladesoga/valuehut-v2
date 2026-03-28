/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import CourseFilter from "@/components/CourseFilter/CourseFilter";
import { AcademyHero } from "@/data/Academy/AllTrainings";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import { faqs } from "@/data/Faqs/faqpage";
import FAQ from "@/components/FaqPage/Faq/Faq";
import TrainingPartners from "@/components/TrainingsPage/TrainingPartners";
import { getAllCourses } from "@/lib/courseApi";
import { getMonthAndDay, getYear } from "@/utils/ConvertDate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agile & Scrum Courses | London & Lagos | ValueHut Academy",
  description:
    "Join an upcoming Agile or Scrum Mastery course in London or Lagos. Guaranteed to get your organisation working faster, better and safer.",
  alternates: {
    canonical: "https://www.valuehut.co/academy",
  },
  openGraph: {
    title: "Agile & Scrum Courses | London & Lagos | ValueHut Academy",
    description:
      "Join an upcoming Agile or Scrum Mastery course in London or Lagos. Guaranteed to get your organisation working faster, better and safer.",
    url: "https://www.valuehut.co/academy",
    images: [
      {
        url: "/images/courses.png",
        width: 1200,
        height: 630,
        alt: "ValueHut Consulting Academy - Agile Leadership, Product Management and Scrum related Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile & Scrum Courses | London & Lagos | ValueHut Academy",
    description:
      "Join an upcoming Agile or Scrum Mastery course in London or Lagos. Guaranteed to get your organisation working faster, better and safer.",
    images: ["/images/courses.png"],
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
        ? `${getMonthAndDay(firstUnfilledClass.startDate, firstUnfilledClass.timeZone)}, ${getYear(firstUnfilledClass.startDate)}`
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
        <TrainingPartners />
      </div>
      <Suspense fallback={<div>Loading courses...</div>}>
        <CourseFilter courses={processedCourses} />
      </Suspense>

      <div className="py-28">
        <Testimonials />
      </div>
      <div className="py-10">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}
