"use client";
import Button from "@/components/Button/Button";
import { ICourseDetails } from "@/data/Academy/CourseDetails";
import Image from "next/image";
import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { motion } from "framer-motion";
import Table from "@/components/AcademyPage/Table/Table";

interface IClasses {
  classSysId: string;
  id: string;
  time: string;
  classType: string;
  filled: boolean;
  startDate: string;
  endDate: string;
  timeZone: string;
  year: string;
}

function DetailsHero({
  title,
  description,
  partner,
  reviews,
  schedule,
  images,
  logo,
  courseId,
  classSysId,
  filled,
  course,
  availableClasses,
}: ICourseDetails) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showAvailableClasses, setShowAvailableClasses] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleShowAvailableClasses = () => {
    setShowAvailableClasses((prev) => !prev);
  };

  // Filter out filled classes - only show available classes
  const availableClassesFiltered = availableClasses?.filter((cls: IClasses) => !cls.filled) || [];
  return (
    <div className="container px-4 xl:px-0 pt-36">
      <div className="flex gap-5 justify-between">
        <div className="max-w-[633px] ">
          <h1 className="block text-[46px] leading-[59px] font-primary font-medium text-main">
            {title} <span className="block">{schedule.date}</span>
          </h1>
          <p className="text-sm font-medium font-secondary text-body pt-6">
            {description.length > 130
              ? `${description.slice(0, 150)}...`
              : description}
          </p>
          <div className="flex flex-col sm:flex-row text-sm font-medium font-secondary text-main gap-2 sm:gap-8 pt-6">
            <motion.div
              className="flex gap-[6px]"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={partner.logo}
                width={24}
                height={24}
                alt="image"
                className="object-contain"
              />
              <p>Partnered with {partner.name}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {reviews.rating} ({reviews.count} reviews)
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-9 gap-4 justify-between bg-white p-4 rounded-xl mt-10">
            <div className="flex flex-col gap-2 sm:col-span-3">
              <h4 className="text-sm font-normal font-secondary text-main">
                Date
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.date}
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-3">
              <h4 className="text-sm font-normal font-secondary text-main">
                Time
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.time}
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-3">
              <h4 className="text-sm font-normal font-secondary text-main">
                Delivery Mode
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.classType}
              </span>
            </div>
          </div>
          <div className="pt-4">
            {filled ? (
              <div className="flex gap-3">
                <Button
                  rounded="full"
                  className="bg-[#dddddd]"
                  disabled={true}
                >
                  Fully Booked
                </Button>
                {availableClassesFiltered.length > 0 && (
                  <Button
                    rounded="full"
                    bgColor="fill-brand-secondary"
                    onClick={handleShowAvailableClasses}
                  >
                    {showAvailableClasses ? "Hide other classes" : "See other classes"}
                  </Button>
                )}
              </div>
            ) : (
              <Button
                rounded="full"
                bgColor="fill-brand-secondary"
                onClick={handleModalToggle}
              >
                Register Now
              </Button>
            )}
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <Image
            src={images.heroImage}
            width={530}
            height={411}
            objectFit="cover"
            alt="image"
            className="w-[530px] h-[422px] object-cover rounded-[20px]"
          />
        </div>
      </div>
      {isModalOpen && (
        <RegisterModal
          date={schedule.date}
          title={title}
          onClose={handleModalToggle}
          logo={logo}
          courseId={courseId}
          classSysId={classSysId}
        />
      )}

      {/* Available Classes Table - Only show when filled=true, user clicks "See other classes", and there are available classes */}
      {filled && availableClassesFiltered.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showAvailableClasses ? 1 : 0, 
            height: showAvailableClasses ? "auto" : 0 
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut",
            opacity: { duration: 0.3 },
            height: { duration: 0.4 }
          }}
          className="overflow-hidden"
        >
          <div className="mt-8">
            <h2 className="text-3xl font-medium text-main font-primary mb-6">
              Available Classes
            </h2>
   
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: showAvailableClasses ? 0 : -20, 
                opacity: showAvailableClasses ? 1 : 0 
              }}
              transition={{ 
                duration: 0.4, 
                delay: showAvailableClasses ? 0.2 : 0,
                ease: "easeOut"
              }}
            >
              <table className="w-full bg-[#032432] mt-6 rounded-xl">
                <thead className="text-sm font-semibold font-secondary text-white">
                  <tr className="uppercase tracking-[8%]">
                    <td className="px-3 py-4">dates</td>
                    <td className="px-3 py-4">time</td>
                    <td className="px-3 py-4">delivery mode</td>
                  </tr>
                </thead>
                {availableClassesFiltered.map((availableClass: IClasses, index: number) => (
                  <tbody className="bg-white" key={index}>
                    <Table
                      classSysId={availableClass.classSysId}
                      startDate={availableClass.startDate}
                      endDate={availableClass.endDate}
                      year={availableClass.year}
                      time={availableClass.time}
                      type={availableClass.classType}
                      filled={availableClass.filled}
                      courseId={courseId}
                      course={course}
                      timeZone={availableClass.timeZone}
                    />
                  </tbody>
                ))}
              </table>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DetailsHero;
