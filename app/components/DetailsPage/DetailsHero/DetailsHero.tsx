"use client";
import Button from "@/components/Button/Button";
import { ICourseDetails } from "@/data/Academy/CourseDetails";
import Image from "next/image";
import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { RegisterModalData } from "@/data/Academy/RegisterModal";
import useScroll from "@/hooks/useScroll";

function DetailsHero({
  title,
  description,
  partner,
  reviews,
  pricing,
  schedule,
  images,
}: ICourseDetails) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [divRef, isDivVisible] = useScroll<HTMLDivElement>({
    threshold: 0,
  });
  const fadeUpClassP = isDivVisible ? "fade-up-50ms" : "";
  const fadeUpClassdiv2 = isDivVisible ? "fade-up-150ms" : "";
  return (
    <div className="container px-4 xl:px-0 pt-36">
      <div className="flex gap-5 justify-between">
        <div className="max-w-[633px] ">
          <h1 className="block text-[46px] leading-[59px] font-primary font-medium text-main">
            {title} <span>{schedule.date}</span>
          </h1>
          <p className="text-sm font-medium font-secondary text-body pt-6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row text-sm font-medium font-secondary text-main gap-2 sm:gap-8 pt-6">
            <div className={`flex gap-[6px] ${fadeUpClassP}`}>
              <Image
                src={partner.logo}
                width={24}
                height={24}
                alt="image"
                className="object-contain "
              />
              <p>Partnered width {partner.name}</p>
            </div>
            <div className={`${fadeUpClassdiv2}`} ref={divRef}>
              {reviews.rating} ({reviews.count} reviews)
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 justify-between bg-white py-4 px-8 rounded-xl mt-10">
            <div className="flex flex-col gap-2  lg:col-span-2">
              <h4 className="text-sm font-normal font-secondary text-main">
                Starting Price
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {pricing.startingPrice}
              </span>
            </div>
            <div className="flex flex-col gap-2 lg:col-span-2">
              <h4 className="text-sm font-normal font-secondary text-main">
                Date
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.date}
              </span>
            </div>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-sm font-normal font-secondary text-main">
                Time
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.time}
              </span>
            </div>
            <div className="flex flex-col gap-2 ">
              <h4 className="text-sm font-normal font-secondary text-main">
                Class type
              </h4>
              <span className=" text-sm font-semibold font-secondary text-main">
                {schedule.classType}
              </span>
            </div>
          </div>
          <div className="pt-4">
            <Button
              rounded="full"
              bgColor="fill-brand-secondary"
              onClick={handleModalToggle}
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <Image
            src={images.heroImage}
            width={530}
            height={411}
            alt="image"
            className="object-containr"
          />
        </div>
      </div>
      {isModalOpen && (
        <RegisterModal
          image={RegisterModalData.image}
          countries={RegisterModalData.countries}
          date={RegisterModalData.date}
          title={RegisterModalData.title}
          onClose={handleModalToggle}
        />
      )}
    </div>
  );
}

export default DetailsHero;