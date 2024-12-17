import ClientReviews from "@/components/ClientReviews/ClientReviews";
import FAQ from "@/components/FaqPage/Faq/Faq";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import { faqs } from "@/data/Faqs/faqpage";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/ Aboutcourse/ Aboutcourse";
import Table from "@/components/AcademyPage/Table/Table";
import Group from "@/components/AcademyPage/Group/Group";
import { notFound } from "next/navigation";
import { HiringCard } from "@/components/HiringCard/HiringCard";
import { getCourse } from "@/lib/courseApi";
import { AdditionalBenefitCard } from "@/components/AcademyPage/AdditionalBenefit/AdditonalBenefitCard";

interface IClasses {
  classId: number;
  id: string;
  time: string;
  classType: string;
  filled: boolean;
  startDate: string;
  endDate: string;
  year: string;
}

export interface PageProps {
  params: {
    slug: string;
  };
}
export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getCourse(slug);
  const course = post[0];

  const UpcomingClassesData = course.classes;
  const CourseDetails = course.courseDetails;

  const CourseObjectivesData = CourseDetails.find(
    (item: { title: string }) => item.title === "Course Learning Objectives"
  );
  const WhoShouldAttendData = CourseDetails.find(
    (item: { title: string }) => item.title === "Who should attend?"
  );

  const AdditionalBenefitsData = CourseDetails.find(
    (item: { title: string }) => item.title === "Additional Benefits"
  );
  if (!post) {
    notFound();
  }
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent title={course.title} backgroundImage={course.image} />
      <div className="md:bg-white">
        <div className="container px-4 xl:px-0 pt-16 md:pt-36">
          <Aboutcourse description={course.description} logo={course.logo} />
        </div>
      </div>

      <div className="md:bg-white pt-10">
        <div className="container px-4 xl:px-0">
          <h1 className=" text-6xl font-medium text-main font-primary">
            Upcoming Classes
          </h1>
          <div className="hidden md:block">
            <table className="w-full bg-[#032432] mt-6 rounded-t-md">
              <thead className="text-sm font-semibold font-secondary text-white">
                <tr className="uppercase tracking-[8%]">
                  <td className="px-3 py-4">dates</td>
                  <td className="px-3 py-4">time</td>
                  <td className="px-3 py-4">type</td>
                </tr>
              </thead>
              {UpcomingClassesData.map((row: IClasses, index: number) => (
                <tbody className="bg-white" key={index}>
                  <Table
                    key={row.id}
                    classId={row.classId}
                    startDate={row.startDate}
                    endDate={row.endDate}
                    year={row.year}
                    time={row.time}
                    type={row.classType}
                    filled={row.filled}
                  />
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start md:hidden">
          {UpcomingClassesData.map((row: IClasses) => (
            <Group
              key={row.id}
              startDate={row.startDate}
              endDate={row.endDate}
              year={row.year}
              time={row.time}
              type={row.classType}
              filled={row.filled}
              classId={row.classId}
            />
          ))}
        </div>
      </div>
      {CourseObjectivesData && (
        <div className="mt-16">
          <div className="container px-4 xl:px-0 ">
            <div className="bg-white rounded-[20px] py-8 px-4 md:px-12 flex flex-col gap-5">
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
          </div>
        </div>
      )}
      {WhoShouldAttendData && (
        <div className="bg-[#f5f5f5]">
          <div className="container px-4 xl:px-0 py-16">
            <div className="flex flex-col gap-5">
              <h3 className="text-6xl font-medium text-main font-primary">
                {WhoShouldAttendData.title}
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                {WhoShouldAttendData.contentList.map(
                  (attend: string, index: number) => (
                    <div key={index}>
                      <HiringCard
                        bgColor="bg-[#C5D8E0]"
                        text={index + 1 + "."}
                        description={attend}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <AssessmentCertification />
      </div>
      {AdditionalBenefitsData && (
        <div className="bg-[#f5f5f5]">
          <div className="container px-4 xl:px-0 pt-20">
            <div className="flex flex-col gap-5">
              <h3 className="text-6xl font-medium text-main font-primary">
                {AdditionalBenefitsData.title}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between gap-8">
                {AdditionalBenefitsData.contentList.map(
                  (benefit: string, index: number) => (
                    <AdditionalBenefitCard
                      key={index}
                      text={benefit}
                      index={index}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container px-4 sm:px-0 py-36">
        <OurPartners />
      </div>
      <FAQ faqs={faqs} />

      <div className="hidden md:flex container px-4 xl:px-0 py-36">
        <ClientReviews />
      </div>
    </div>
  );
}
