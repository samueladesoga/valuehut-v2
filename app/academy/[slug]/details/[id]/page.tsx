import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailsHero from "@/components/DetailsPage/DetailsHero/DetailsHero";
import JsonLd from "@/components/JsonLd/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { absoluteUrl, breadcrumbSchema, courseSchema } from "@/lib/seo";
import { courseDetails } from "@/data/Academy/CourseDetails";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/Aboutcourse/Aboutcourse";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import MoreInformation from "@/components/DetailsPage/Moreinformation/Moreinformation";
import { getCourse } from "@/lib/courseApi";
import WhoShouldAttend from "@/components/AcademyPage/WhoShouldAttend/WhoShouldAttend";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import { getDisplayDate } from "@/utils/ConvertDate";

type Props = {
  params: Promise<{ slug: string; id: string }>;
};

async function getClass(slug: string, id: string) {
  const post = await getCourse(slug);
  const course = post?.[0];
  const classDetail = course?.classes.find(
    (cls: { classSysId: string }) => cls.classSysId === id
  );
  return { course, classDetail };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params;
  const { course, classDetail } = await getClass(slug, id);
  if (!course || !classDetail) {
    return { title: "Class not found", robots: { index: false } };
  }

  const date = getDisplayDate(classDetail.startDate, classDetail.endDate, classDetail.timeZone);
  const title = `${course.title} – ${date} (${classDetail.classType})`;
  const description = `Book ${course.title} on ${date}, ${classDetail.time} ${classDetail.timeZone}, delivered ${String(classDetail.classType).toLowerCase()} by ValueHut Academy. ${course.description}`.slice(0, 300);
  const url = absoluteUrl(`/academy/${slug}/details/${id}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: course.image, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.image],
    },
  };
}
export default async function DetailsPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const courseId = (await params).slug;
  const classSysId = (await params).id;

  const { course, classDetail } = await getClass(courseId, classSysId);
  if (!course || !classDetail) {
    notFound();
  }

  const combinedDate = getDisplayDate(classDetail.startDate, classDetail.endDate, classDetail.timeZone)

  const CourseDetails = course.courseDetails;

  const CourseObjectivesData = CourseDetails.find(
    (item: { title: string }) => item.title === "Course Learning Objectives"
  );

  const WhoShouldAttendData = CourseDetails.find(
    (item: { title: string }) => item.title === "Who should attend?"
  );

  const AssessmentAndCertificationData = CourseDetails.find(
    (item: { title: string }) => item.title === "Assessment and Certification"
  );

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: course.title, path: `/academy/${courseId}` },
    { name: combinedDate, path: `/academy/${courseId}/details/${classSysId}` },
  ];
  const structuredData = [courseSchema(course, courseId), breadcrumbSchema(crumbs)];

  return (
    <div className="bg-[#f5f5f5]">
      <JsonLd data={structuredData} />
      <DetailsHero
        title={course.title}
        description={course.description}
        partner={courseDetails.partner}
        reviews={courseDetails.reviews}
        schedule={{
          date: combinedDate,
          time: `${classDetail.time} ${classDetail.timeZone}`,
          classType: classDetail.classType,
        }}
        images={{ heroImage: course.image }}
        logo={course.logo}
        courseId={courseId}
        classSysId={classSysId}
        filled={classDetail.filled}
        course={course}
        availableClasses={course.classes}
      />
      <Breadcrumbs items={crumbs} className="container px-4 xl:px-0 mt-8" />
      <div className="container rounded-xl bg-white xl:px-12 py-8 mt-6 ">
        <div className=" px-4 xl:px-0 flex flex-col gap-14">
          <Aboutcourse description={course.description} logo={course.logo} />
          {CourseObjectivesData && (
            <div className="flex flex-col gap-5">
              <h2 className="text-6xl font-medium text-main font-primary">
                {CourseObjectivesData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {CourseObjectivesData.contentList.map(
                  (goal: string, index: number) => (
                    <div key={index}>
                      <CourseObjectives text={goal} />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {WhoShouldAttendData && (
        <WhoShouldAttend WhoShouldAttendData={WhoShouldAttendData} />
      )}

      <div className="py-20 md:py-36 ">
        <OurPartners />
      </div>

      {AssessmentAndCertificationData && (
          <AssessmentCertification content={AssessmentAndCertificationData.content} />
        )}

      <div className="container px-4 xl:px-0 py-14 md:pt-36 md:pb-24">
        <MoreInformation />
      </div>
      <div className="py-28">
        <Testimonials />
      </div>
    </div>
  );
}
