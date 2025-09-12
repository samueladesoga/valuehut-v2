"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";
import RegisterModal from "@/components/DetailsPage/RegisterModal/RegisterModal";
import { getDisplayDate } from "@/utils/ConvertDate";

function Table({
  startDate,
  endDate,
  time,
  type,
  filled,
  classSysId,
  courseId,
  course,
}: IUpcomingClassesData) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleClassesDetails = () => {
    router.push(`${pathname}/details/${classSysId}`);
  };

  const classDetail = course.classes.find(
    (cls: { classSysId : string}) => cls.classSysId === classSysId
  );

  //startDate = classDetail.startDate;
  //endDate = classDetail.endDate;
  const timeZone = classDetail.timeZone;

  const combinedDate = getDisplayDate(startDate, endDate, timeZone);

  return (
    <>
      <tr>
        <td
          className={`w-[25%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${filled ? "text-secondary" : "text-main"}`}
        >
          {`${getDisplayDate(startDate, endDate, timeZone)}`}
        </td>
        <td
          className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${filled ? "text-secondary" : "text-main"}`}
        >
          {time}
        </td>
        <td
          className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${filled ? "text-secondary" : "text-main"}`}
        >
          {type}
        </td>
        <td className="w-[35%] xl:w-[25%]">
          <div className="w-full flex xl:gap-4 justify-end">
            {!filled ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <Button
                    size="small"
                    rounded="full"
                    bgColor="fill-brand-secondary"
                    onClick={handleClassesDetails}
                  >
                    View Details
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <Button
                    size="small"
                    rounded="full"
                    border
                    onClick={handleModalToggle}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </>
            ) : (
              <div className="font-secondary font-normal text-xs text-body pr-1">
                Fully Booked
              </div>
            )}
          </div>
        </td>
      </tr>
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
    </>
  );
}

export default Table;
