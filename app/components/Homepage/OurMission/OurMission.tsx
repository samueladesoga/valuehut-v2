import React from "react";
import Paragraph from "./Paragraph/Paragrapgh";

interface OurMissionProps {
  description?: string;
  button?: React.ReactNode;
}

function OurMission({ description, button }: OurMissionProps) {
  return (
    <>
      <div className=" sm:w-[700px]  w-[361px] px-6 py-6 sm:py-16 sm:px-12 flex flex-col gap-2 sm:gap-5 mx-auto ">
        <Paragraph text="We help organizations find better ways to work and lead, delivering great products and services." />
        <p className="text-[23px] leading-[34px] text-main font-normal font-secondary pt-4 ">
          {description}
        </p>
        <div className="pt-4">{button}</div>
      </div>
    </>
  );
}

export default OurMission;
