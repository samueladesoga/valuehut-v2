import Image from "next/image";
import React from "react";
import Button from "@/components/Button/Button";
import { ICourseCard } from "@/data/Academy/AllTrainings";

const CourseCard = ({
  logo,
  title,
  description,
  level,
  duration,
  dates,
  rating,
  reviews,
}: ICourseCard) => {
  return (
    <section className="bg-white py-8 first:rounded-t-[20px] last:rounded-b-[20px] px-4 lg:px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full">
            <Image src={logo} width={80} height={80} alt="logo" />
          </div>
          <div className="max-w-[508px] flex flex-col">
            <h2 className="text-2xl font-medium font-primary text-black pt-1">
              {title}
            </h2>
            <p className="text-sm font-normal font-secondary text-body">
              {description}
            </p>
            <div className="flex gap-4 pt-6">
              <Button
                bgColor="fill-brand-secondary"
                size="medium"
                rounded="full"
                className="mt-5 text-start "
              >
                View Classes
              </Button>
              <Button
                size="medium"
                rounded="full"
                border={true}
                className="mt-5 text-start "
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex gap-2">
            <Image
              src={"/icons/layers.svg"}
              width={24}
              height={24}
              alt="level"
            />
            {level}
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/clock.svg"}
              width={24}
              height={24}
              alt="duration"
            />
            {duration}
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/calendar.svg"}
              width={24}
              height={24}
              alt="date"
            />
            {dates}
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-1">
              {Array.from({ length: parseInt(String(rating)) }, (_, index) => (
                <Image
                  key={index}
                  src={"/Assets/rating.svg"}
                  alt="rating"
                  width={24}
                  height={24}
                />
              ))}
            </div>
            <span>({reviews} reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
