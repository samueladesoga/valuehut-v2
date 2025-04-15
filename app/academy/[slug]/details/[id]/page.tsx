import React from "react";
import DetailsHero from "@/components/DetailsPage/DetailsHero/DetailsHero";
import { courseDetails } from "@/data/Academy/CourseDetails";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/ Aboutcourse/ Aboutcourse";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import MoreInformation from "@/components/DetailsPage/Moreinformation/Moreinformation";
import { getCourse } from "@/lib/courseApi";
import WhoShouldAttend from "@/components/AcademyPage/WhoShouldAttend/WhoShouldAttend";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import { getDay, getMonthAndDay } from "@/utils/ConvertDate";

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
  const courseId = (await params).slug;
  const classSysId = (await params).id;

  const post = await getCourse(courseId);

  const course = post[0];

  const classDetail = course.classes.find(
    (cls: { classSysId: string }) => cls.classSysId === classSysId
  );

  const startDate = new Date(classDetail.startDate);
  const endDate = new Date(classDetail.endDate);

  const isSameDay = startDate.toDateString() === endDate.toDateString();

  const combinedDate = isSameDay
    ? `${getMonthAndDay(classDetail.startDate)}, ${classDetail.year}`
    : `${getMonthAndDay(classDetail.startDate)} - ${getDay(classDetail.endDate)}, ${classDetail.year}`;

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

  return (
    <div className="bg-[#f5f5f5]">
      <DetailsHero
        title={course.title}
        description={course.description}
        partner={courseDetails.partner}
        reviews={courseDetails.reviews}
        schedule={{
          date: combinedDate,
          time: classDetail.time,
          classType: classDetail.classType,
        }}
        images={{ heroImage: course.image }}
        logo={course.logo}
        courseId={courseId}
        classSysId={classSysId}
      />
      <div className="bg-white xl:px-12 py-8 mt-12 ">
        <div className="container px-4 xl:px-0 flex flex-col gap-14">
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

      {AssessmentCertification && (
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
