"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/Button/Button";
import { ICourseCard } from "@/data/Academy/AllTrainings";

const calculateTotalHours = (duration: string | undefined): number => {
  if (!duration) {
    console.error("Duration is undefined or empty.");
    return 0;
  }
  const timeRangeMatch = duration.match(
    /(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/,
  );
  if (!timeRangeMatch) {
    console.error("No valid time range found in duration.");
    return 0;
  }
  const [_, startTime, endTime] = timeRangeMatch;
  console.log("Extracted Times:", { startTime, endTime });
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(endHour) ||
    isNaN(endMinute)
  ) {
    console.error("Invalid time format in extracted times.");
    return 0;
  }
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;
  const totalMinutes = endTotalMinutes - startTotalMinutes;
  console.log("Total Minutes:", totalMinutes);
  return totalMinutes / 60;
};

const CourseCard = ({
  logo,
  title,
  description,
  level,
  duration,
  dates,
  rating,
  reviews,
  slug,
}: ICourseCard) => {
  const router = useRouter();

  const handleViewClasses = () => {
    router.push(`academy/${slug}`);
  };

  const totalHours = calculateTotalHours(duration);

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
              {description.length > 120
                ? `${description.slice(0, 120)}...`
                : description}
            </p>
            <div className="flex gap-4 pt-6">
              <Button
                bgColor="fill-brand-secondary"
                size="medium"
                rounded="full"
                className="mt-5 text-start"
                onClick={handleViewClasses}
              >
                View Classes
              </Button>
              <Button
                size="medium"
                rounded="full"
                border={true}
                className="mt-5 text-start"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[195px] flex flex-col items-start gap-3">
          {level && (
            <div className="flex gap-2">
              <Image
                src={"/icons/layers.svg"}
                width={24}
                height={24}
                alt="level"
              />
              {level}
            </div>
          )}
          {duration && (
            <div className="flex gap-2">
              <Image
                src={"/icons/clock.svg"}
                width={24}
                height={24}
                alt="duration"
              />
              {totalHours.toFixed(1)} hours
            </div>
          )}
          {dates && (
            <div className="flex gap-2">
              <Image
                src={"/icons/calendar.svg"}
                width={24}
                height={24}
                alt="date"
              />
              {dates}
            </div>
          )}

          {reviews && (
            <div className="flex justify-between gap-3">
              <div className="flex gap-1">
                {Array.from(
                  { length: parseInt(String(rating)) },
                  (_, index) => (
                    <Image
                      key={index}
                      src={"/Assets/rating.svg"}
                      alt="rating"
                      width={24}
                      height={24}
                    />
                  ),
                )}
              </div>
              <span>({reviews} reviews)</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
