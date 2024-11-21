import React from "react";

interface OurMissionProps {
  description?: string;
  button?: React.ReactNode;
}

function OurMission({ description, button }: OurMissionProps) {
  return (
    <div className="max-w-[636px] px-6 py-6 sm:py-16 sm:px-12 flex flex-col gap-2 sm:gap-5 mx-auto">
      <h1 className="text-[47px] leading-[65.8px] font-primary font-medium md:text-[67px] md:leading-[93px]">
        <span className="text-main">We help organizations </span>
        <span className="text-gray-300">
          find better ways to work and lead, delivering great products and
          services.
        </span>
      </h1>
      <p className="text-[23px] leading-[34px] text-main font-normal font-secondary pt-4">
        {description}
      </p>
      <div className="pt-4">{button}</div>
    </div>
  );
}

export default OurMission;
