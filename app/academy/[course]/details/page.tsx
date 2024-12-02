import React from "react";
import DetailsHero from "@/components/DetailsPage/DetailsHero/DetailsHero";
import { courseDetails } from "@/data/Academy/CourseDetails";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/ Aboutcourse/ Aboutcourse";
import { Objectives } from "@/data/Academy/Objectives";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import MoreInformation from "@/components/DetailsPage/Moreinformation/Moreinformation";

function page() {
  return (
    <div className="bg-[#f5f5f5]">
      <DetailsHero
        title={courseDetails.title}
        description={courseDetails.description}
        partner={courseDetails.partner}
        reviews={courseDetails.reviews}
        pricing={courseDetails.pricing}
        schedule={courseDetails.schedule}
        images={courseDetails.images}
      />

      <div className="bg-white xl:px-12 py-8 mt-12 ">
        <div className="container px-4 xl:px-0 flex flex-col gap-14">
          <Aboutcourse />
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-medium text-main font-primary">
              Course Learning Objectives
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {Objectives.map((goal) => (
                <div key={goal.id}>
                  <CourseObjectives text={goal.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-36 ">
        <OurPartners />
      </div>

      <AssessmentCertification />

      <div className="container px-4 xl:px-0 py-14 md:pt-36 md:pb-24">
        <MoreInformation />
      </div>

      <div className="container sm:py-8">
        <ClientReviews />
      </div>
    </div>
  );
}

export default page;
