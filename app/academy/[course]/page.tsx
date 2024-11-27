import ClientReviews from "@/components/ClientReviews/ClientReviews";
import FAQ from "@/components/FaqPage/Faq/Faq";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import { faqs } from "@/data/Faqs/faqpage";
import CourseObjectives from "@/components/AcademyPage/CourseObjectives/CourseObjectives";
import AssessmentCertification from "@/components/AcademyPage/AssessmentCertification/AssessmentCertification";
import Aboutcourse from "@/components/AcademyPage/ Aboutcourse/ Aboutcourse";
import { UpcomingClassesData } from "@/data/Academy/UpcomingClasses";
import Table from "@/components/AcademyPage/Table/Table";
import Group from "@/components/AcademyPage/Group/Group";
import { Objectives } from "@/data/Academy/Objectives";

export default function CourseDetailsPage() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={"Professional Scrum Master"}
        backgroundImage={"/images/courses.png"}
      />

      <div className="md:bg-white">
        <Aboutcourse />
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
              <tbody className="bg-white">
                {UpcomingClassesData.map((row) => (
                  <Table
                    key={row.id}
                    id={row.id}
                    dates={row.dates}
                    time={row.time}
                    type={row.type}
                    fullBook={row.fullBook}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start md:hidden">
          {UpcomingClassesData.map((row) => (
            <Group
              key={row.id}
              id={row.id}
              dates={row.dates}
              time={row.time}
              type={row.type}
              fullBook={row.fullBook}
            />
          ))}
        </div>
      </div>

      <div className="bg-white mt-16">
        <div className="container px-4 xl:px-0 ">
          <div className="py-8 px-4 md:px-12 flex flex-col gap-5">
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

      <div>
        <AssessmentCertification />
      </div>

      <div className="container sm:pt-5">
        <OurPartners />
      </div>
      <FAQ faqs={faqs} />

      <div className="container sm:py-8">
        <ClientReviews />
      </div>
    </div>
  );
}
