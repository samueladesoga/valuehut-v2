import Button from "@/components/Button/Button";
import { IUpcomingClassesData } from "@/data/Academy/UpcomingClasses";
import React from "react";

function Group({ id, dates, time, type, fullBook }: IUpcomingClassesData) {
  return (
    <div className="flex flex-col items-start gap-6  bg-white w-full p-6 rounded-xl">
      <div>
        <h1 className="text-xl font-semibold font-secondary text-main">
          Group {id}
        </h1>
      </div>

      <div>
        <h4 className="text-sm font-normal font-secondary text-secondary ">
          Date
        </h4>
        <span className="text-xl font-semibold font-secondary text-main">
          {dates}
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
        {!fullBook ? (
          <>
            <Button size="small" rounded="full" bgColor="fill-brand-secondary">
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
