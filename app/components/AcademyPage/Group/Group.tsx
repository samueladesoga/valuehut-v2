"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";
import RegisterModal from "@/components/DetailsPage/RegisterModal/RegisterModal";
import { getDay, getDisplayDate, getMonthAndDay } from "@/utils/ConvertDate";

function Group({
  startDate,
  endDate,
  timeZone,
  year,
  time,
  type,
  filled,
  classSysId,
  courseId,
  course,
}: IUpcomingClassesData) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [combinedDate, setCombinedDate] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClassesDetails = () => {
    router.push(`${pathname}/details/${classSysId}`);

    const classDetail = course.classes.find(
      (cls: { classSysId: string }) => cls.classSysId === classSysId
    );

    if (classDetail) {
      const startDateDay = classDetail.startDate.split(" ")[1];
      const endDateDay = classDetail.endDate.split(" ")[0];

      const date =
        startDateDay === endDateDay
          ? `${getMonthAndDay(classDetail.startDate)}, ${classDetail.year}`
          : `${getMonthAndDay(classDetail.startDate)} - ${getDay(classDetail.endDate)}, ${classDetail.year}`;
      setCombinedDate(date);
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 bg-white w-full p-6 rounded-xl">
      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary">
          Date
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {`${getDisplayDate(startDate, endDate, timeZone)}, ${year}`}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary">
          Time
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {time}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary">
          Type
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {type}
        </span>
      </div>

      <div className="w-full flex gap-5 items-center">
        {!filled ? (
          <>
            <Button
              size="small"
              rounded="full"
              bgColor="fill-brand-secondary"
              onClick={handleClassesDetails}
            >
              View Details
            </Button>
            <Button
              size="small"
              rounded="full"
              border
              onClick={handleModalToggle}
            >
              Book Now
            </Button>
          </>
        ) : (
          <div className="w-full">
            <button className="w-full py-2 px-5 rounded-full bg-[#BEBEBE] font-secondary font-normal text-xs text-main">
              Fully Booked
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <RegisterModal
          date={combinedDate}
          title={course.title}
          onClose={handleModalToggle}
          logo={course.logo}
          courseId={courseId}
          classSysId={classSysId as unknown as string}
        />
      )}
    </div>
  );
}

export default Group;
