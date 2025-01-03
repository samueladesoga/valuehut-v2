"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";

function Group({
  id,
  startDate,
  endDate,
  year,
  time,
  type,
  filled,
  classId,
}: IUpcomingClassesData) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClassesDetails = () => {
    router.push(`${pathname}/details/${classId}`);
  };
  return (
    <div className="flex flex-col items-start gap-6  bg-white w-full p-6 rounded-xl">
      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary ">
          Date
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {startDate} - {endDate}, {year}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary ">
          Time
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {time}
        </span>
      </div>

      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary ">
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
            <Button size="small" rounded="full" border>
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
    </div>
  );
}

export default Group;
