"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";

const getDisplayDate = (startDate: string, endDate: string): string => {
  const formatDate = (date: string): string | null => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return null;
    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  if (start && end && start !== end) {
    return `${start} - ${end}`;
  }
  if (start) return start;
  return "Date Unavailable";
};

function Table({
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
    <tr key={id}>
      <td
        className={`w-[25%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          filled ? "text-secondary" : "text-main"
        }`}
      >
        {`${getDisplayDate(startDate, endDate)}, ${year}`}
      </td>

      <td
        className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          filled ? "text-secondary" : "text-main"
        }`}
      >
        {time}
      </td>
      <td
        className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          filled ? "text-secondary" : "text-main"
        }`}
      >
        {type}
      </td>
      <td className="w-[35%] xl:w-[25%]">
        <div className="w-full flex  xl:gap-4 justify-end ">
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
                <Button size="small" rounded="full" border>
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
  );
}

export default Table;
