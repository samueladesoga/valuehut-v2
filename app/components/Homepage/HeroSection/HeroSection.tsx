/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from "react";
import type { HeroSectionProps } from "./../../../data/Home/HeroSection";
import Image from "next/image";

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  showRating,
  ratingText,
  ratingDetails,
  smallScreenImage,
  largeScreenImage,
}: HeroSectionProps) => {
  const [backgroundImage, setBackgroundImage] = useState(smallScreenImage); 

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setBackgroundImage(largeScreenImage);
      } else {
        setBackgroundImage(smallScreenImage);
      }
    };

    updateBackgroundImage();

    window.addEventListener("resize", updateBackgroundImage);

    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  return (
    <section className="w-full">
      <div
        className={`h-screen flex flex-end bg-center bg-cover bg-no-repeat ${backgroundImage}`}
      >
        <div className="container w-full flex h-full font-primary items-end px-6 2xl:px-0 pb-[60px]">
          <div className="flex flex-col gap-4 space-y-3 bottom-10 w-full text-accentmain">
            <h1 className="text-[47px] md:text-[87px] w-full md:w-[58%] leading-[51px] md:leading-[95.7px] font-semibold font-primary">
              {title}
            </h1>
            <p className="text-[18px] font-secondary sm:text-[21px] leading-[27px] sm:leading-[31px] w-full sm:w-[58%] font-medium  ">
              {subtitle}
            </p>
            <a href={buttonLink}>
              <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
                {buttonText}
              </button>
            </a>
          </div>

          {showRating && (
            <div className="hidden md:block">
              <p className="text-accentmain text-base font-medium gap-3 inline-flex">
                {ratingText}
                <span className="flex flex-row gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={"/Assets/rating.svg"}
                      alt="rating"
                      width={20}
                      height={19}
                    />
                  ))}
                </span>
              </p>
              <p className="text-accentmain font-normal text-sm">
                {ratingDetails}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
