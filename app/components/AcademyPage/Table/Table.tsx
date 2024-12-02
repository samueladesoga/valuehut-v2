"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";

function Table({ id, dates, time, type, fullBook }: IUpcomingClassesData) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClassesDetails = () => {
    router.push(`${pathname}/details`);
  };
  return (
    <tr key={id}>
      <td
        className={`w-[25%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          fullBook ? "text-secondary" : "text-main"
        }`}
      >
        {dates}
      </td>

      <td
        className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          fullBook ? "text-secondary" : "text-main"
        }`}
      >
        {time}
      </td>
      <td
        className={`w-[20%] xl:w-[25%] px-3 py-4 text-sm font-medium font-secondary ${
          fullBook ? "text-secondary" : "text-main"
        }`}
      >
        {type}
      </td>
      <td className="w-[35%] xl:w-[25%]">
        <div className="w-full flex  xl:gap-4 justify-end ">
          {!fullBook ? (
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
