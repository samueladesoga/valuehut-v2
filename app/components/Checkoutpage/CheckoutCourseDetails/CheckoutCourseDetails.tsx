import { CheckoutCourseDetailsProps } from "@/data/Academy/CheckoutCourseDetails";
import Image from "next/image";
import React from "react";

const CheckoutCourseDetails: React.FC<CheckoutCourseDetailsProps> = ({
  title,
  image,
  date,
  time,
  classType,
  country,
}) => {
  return (
    <div className="w-full sm:w-[486px] sm:p-8 bg-white  sm:rounded-xl flex flex-col gap-6 p-4">
      <h1 className="text-xl !leading-[27px] font-semibold font-secondary">
        Course details
      </h1>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt="Course Logo"
          className="w-14 h-14"
          width={60}
          height={60}
        />
        <h1 className="text-xl font-semibold text-main font-secondary">
          {title}
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Date:
          </h3>
          <p className="text-sm font-medium text-main font-secondary">{date}</p>
        </div>

        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Time:
          </h3>
          <p className="text-sm font-medium text-main font-secondary">{time}</p>
        </div>

        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Class type:
          </h3>
          <p className="text-sm font-medium text-main font-secondary">
            {classType}
          </p>
        </div>

        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Country
          </h3>
          <p className="text-sm font-medium text-main font-secondary capitalize">
            {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCourseDetails;
