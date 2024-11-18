import React from "react";

interface OurMissionProps {
  title?: string;
  description?: string;
  button?: React.ReactNode;
}

function OurMission({ title, description, button }: OurMissionProps) {
  return (
    <div className="w-full ">
      <div className="max-w-[636px] flex flex-col gap-2 sm:gap-5 mx-auto px-7 pt-8 sm:px-14 sm:pt-24">
        <h1 className="text-[30px] md:text-[47px] leading-[65.8px] font-medium sm:text-[67px] sm:leading-[80px]">
          <span className="text-black">We help organizations</span>{" "}
          <span className="text-gray-300">
            find better ways to work and lead, delivering great products and
            services.
          </span>
        </h1>
        <p className="text-[23px] leading-[34px] text-[#101010] font-normal">
          {description}
        </p>
        <div>{button}</div>
      </div>
    </div>
  );
}

export default OurMission;
