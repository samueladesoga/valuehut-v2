import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <section
      className="bg-gradient-custom h-screen flex flex-end bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container w-full flex relative px-8 md:px-0 mb-10">
        <div className="absolute flex flex-col gap-4 space-y-3 bottom-10 w-full md:w-1/2 ">
          <h1 className="text-7xl sm:text-[67px] md:max-w-2xl font-primary sm:leading-[80px] font-normal text-accentmain">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base font-secondary sm:text-lg font-medium text-accentsecondary">
              {subtitle}
            </p>
          )}
          {buttonText && (
            <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              <a href={buttonLink}>{buttonText}</a>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
