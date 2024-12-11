"use client";
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
import { HiringCard } from "@/components/HiringCard/HiringCard";
import {
  AdditionalBenefits,
  IAdditionalBenefits,
} from "@/data/Academy/AdditionalBenefits";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CourseDetailsPage() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={"Professional Scrum Master"}
        backgroundImage={"/images/courses.png"}
      />

      <div className="md:bg-white">
        <div className="container px-4 xl:px-0 pt-16 md:pt-36">
          <Aboutcourse />
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

      <div className="mt-16">
        <div className="container px-4 xl:px-0 ">
          <div className="bg-white rounded-[20px] py-8 px-4 md:px-12 flex flex-col gap-5">
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

      <div className="bg-[#f5f5f5]">
        <div className="container px-4 xl:px-0 py-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-6xl font-medium text-main font-primary">
              Who should attend?
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <HiringCard
                  bgColor="bg-[#C5D8E0]"
                  text="01"
                  description="Practitioners that are interested in starting a career as a Scrum Master"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <HiringCard
                  bgColor="bg-[#C4EBE3]"
                  text="02"
                  description="Scrum Masters, Agile/Scrum Coaches and consultant looking to improve their use of Scrum"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <HiringCard
                  bgColor="bg-[#F5E5D7]"
                  text="03"
                  description="Anyone involved in product delivery using Scrum"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AssessmentCertification />
      </div>

      <div className="bg-[#f5f5f5]">
        <div className="container px-4 xl:px-0 pt-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-6xl font-medium text-main font-primary">
              Additional Benefits
            </h3>
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {AdditionalBenefits.map(
                (info: IAdditionalBenefits, index: number) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 h-[328px] sm:h-[328px] bg-white rounded-[20px] p-4 sm:p-8 flex flex-col justify-between"
                  >
                    <Image
                      src={info.icons}
                      alt="images"
                      width={50}
                      height={50}
                      className="bg-contain"
                    />
                    <p className="text-lg font-secondary font-medium text-main">
                      {info.descriptions}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

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
