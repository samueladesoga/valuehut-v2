import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  showRating,
  ratingText,
  ratingDetails,
}) => {
  return (
    <section
      className=" bg-gradient-custom h-screen flex flex-end  bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="  container w-full flex relative px-8 md:px-0 mb-10  ">
        <div className="absolute flex flex-col gap-4 space-y-3  bottom-10 w-full  md:w-1/2 text-accentmain">
          <h1 className="text-[47px] sm:text-[87px] md:max-w-2xl leading-[51px] sm:leading-[95.7px] font-semibold ">
            {title}
          </h1>
          <p className="text-[18px] sm:text-[21px] leading-[27px] sm:leading-[31px] md:max-w-3xl  font-semibold">{subtitle}</p>
          <a href={buttonLink}>
            <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              {buttonText}
            </button>
          </a>
        </div>

        {showRating && (
          <div className="absolute bottom-10 right-5 hidden md:block">
            <p className="text-accentmain text-base font-medium gap-3 inline-flex">
              {ratingText}
              <span className="flex flex-row gap-1">
                 {[1,2,3,4].map(i =>{
                  return <svg
                  key={i}
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                    fill="#FBAC65"
                  />
                </svg>
                 })}
              </span>
            </p>
            <p className="text-accentmain font-normal text-sm">
              {ratingDetails}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;