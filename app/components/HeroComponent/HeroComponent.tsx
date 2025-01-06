import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  pill?: string | React.ReactNode;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  ratingImage?: string;
}

const HeroComponent: React.FC<HeroSectionProps> = ({
  pill,
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  showRating,
  ratingText,
  ratingDetails,
  ratingImage,
}) => {
  return (
    <section className="w-full relative">
      <Image
        src={backgroundImage}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt="image"
        priority
      />
      <div className="bg-gradient-custom relative z-1 h-[600px] flex flex-end">
        <div className="flex items-end justify-between container sm:px-4 md:px-0 pb-20 px-6 xl:px-0 overflow-x-hidden">
          <div className="flex items-start flex-col gap-4 space-y-3 bottom-10 w-full md:w-1/2">
            {pill && (
              <div className="bg-fill-Brand-quaternary text-main text-xs font-secondary px-3 py-1 font-semibold rounded-full">
                {pill}
              </div>
            )}
            <h1 className="text-7xl sm:text-[67px] md:max-w-2xl font-primary sm:leading-[80px] font-normal text-accentmain">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base font-secondary sm:text-lg font-medium text-accentsecondary">
                {subtitle}
              </p>
            )}
            {buttonText && (
              <Link href={buttonLink || ""} target="_blank">
                <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
                  {buttonText}
                </button>
              </Link>
            )}
          </div>

          {showRating && (
            <div className="hidden md:flex justify-between items-center gap-3">
              {ratingImage && (
                <Image src={ratingImage} width={86} height={86} alt="image" />
              )}

              <div>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
