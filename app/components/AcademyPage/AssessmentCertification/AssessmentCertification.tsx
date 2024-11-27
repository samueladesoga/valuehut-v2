import Image from "next/image";
import React from "react";

function AssessmentCertification() {
  return (
    <div className="container px-4 xl:px-0">
      <div className="flex flex-col md:flex-row justify-between rounded-xl border border-[#D0D0D0] bg-fill-brand-primary p-4 md:p-10 gap-8 md:gap-0">
        <div className="max-w-[818px] flex flex-col gap-4 text-accentmain">
          <h1 className="text-4xl md:text-6xl font-medium font-primary">
            Assessment Certification
          </h1>
          <p className="text-base md:text-lg font-normal font-secondary">
            All participants completing the Professional Scrum Master course
            will receive a password to attempt the Professional Scrum Master I
            (PSM I) assessment. The industry-recognized PSM I certification
            requires a minimum passing score of 85%. PSM class participants who
            attempt the PSM I assessment within 14 days of receiving their free
            password and do not score at least 85% will be granted a 2nd attempt
            at no additional cost.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className=" w-full h-auto md:w-[282px] md:h-[183px]">
            <Image
              src="/images/certification.png"
              width={282}
              height={282}
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentCertification;
