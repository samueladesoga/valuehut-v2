


import React from "react";
import type {IHeroSection} from './../../../data/Home/HeroSection'
import Image from "next/image";


const HeroSection = ({ title,
  subtitle,
  buttonText,
  buttonLink,
  showRating,
  ratingText,
  ratingDetails,
  backgroundImage }:IHeroSection) => {
  

  return (
    <section
      className=" bg-gradient-custom h-screen flex flex-end bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container w-full flex h-full font-primary items-end px-6 pb-[60px]">
        <div className="flex flex-col gap-4 space-y-3 bottom-10 w-full text-accentmain">
          <h1 className="text-[47px] sm:text-[87px] w-full sm:w-[60%] leading-[51px] sm:leading-[95.7px] font-semibold font-primary">
            {title}
          </h1>
          <p className="text-[18px] font-secondary sm:text-[21px] leading-[27px] sm:leading-[31px] w-full sm:w-[60%] font-medium  ">
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
                 <Image key={i} src={'/Assets/rating.svg'} alt="rating" width={20} height={19}/>
                ))}
              </span>
            </p>
            <p className="text-accentmain font-normal text-sm">{ratingDetails}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
