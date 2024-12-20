// "use client";
import React from "react";
import DetailsHero from "@/components/DetailsPage/DetailsHero/DetailsHero";
import { courseDetails } from "@/data/Academy/CourseDetails";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/ Aboutcourse/ Aboutcourse";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import MoreInformation from "@/components/DetailsPage/Moreinformation/Moreinformation";
import { getCourse } from "@/lib/courseApi";
import WhoShouldAttend from "@/components/AcademyPage/WhoShouldAttend/WhoShouldAttend";

export interface PageProps {
  params: {
    slug: string;
    id: string;
  };
}
export default async function DetailsPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const slug = (await params).slug;
  const id = (await params).id;

  const post = await getCourse(slug);

  const course = post[0];

  const classDetail = course.classes.find(
    (cls: { classId: number }) => cls.classId === parseInt(id)
  );

  const combinedDate = `${classDetail.startDate} - ${classDetail.endDate}, ${classDetail.year}`;
  const CourseDetails = course.courseDetails;

  const CourseObjectivesData = CourseDetails.find(
    (item: { title: string }) => item.title === "Course Learning Objectives"
  );

  const WhoShouldAttendData = CourseDetails.find(
    (item: { title: string }) => item.title === "Who should attend?"
  );

  return (
    <div className="bg-[#f5f5f5]">
      <DetailsHero
        title={course.title}
        description={course.description}
        partner={courseDetails.partner}
        reviews={courseDetails.reviews}
        pricing={{ startingPrice: `£${classDetail.ukPrice}` }}
        schedule={{
          date: combinedDate,
          time: classDetail.time,
          classType: classDetail.classType,
        }}
        images={{ heroImage: course.image }}
      />
      <div className="bg-white xl:px-12 py-8 mt-12 ">
        <div className="container px-4 xl:px-0 flex flex-col gap-14">
          <Aboutcourse description={course.description} logo={course.logo} />
          {CourseObjectivesData && (
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-medium text-main font-primary">
                {CourseObjectivesData.title}
              </h1>
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

      <AssessmentCertification />

      <div className="container px-4 xl:px-0 py-14 md:pt-36 md:pb-24">
        <MoreInformation />
      </div>

      <div className="container sm:py-8">
        <ClientReviews title="What our students say" />
      </div>
    </div>
  );
}
