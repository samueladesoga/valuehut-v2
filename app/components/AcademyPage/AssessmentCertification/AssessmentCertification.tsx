import Image from "next/image";
import React from "react";

interface AssessmentCertificationProps {
  content: string; // Add a prop for the variable you want to pass
}
function AssessmentCertification({ content }: AssessmentCertificationProps) {
  return (
    <div className="container px-4 xl:px-0">
      <div className="flex flex-col md:flex-row justify-between rounded-xl border border-[#D0D0D0] bg-fill-brand-primary p-4 md:p-10 gap-8 md:gap-0">
        <div className="max-w-[818px] flex flex-col gap-4 text-accentmain">
          <h2 className="text-4xl md:text-6xl font-medium font-primary">
            Assessment & Certification
          </h2>
          <p className="text-base md:text-lg font-normal font-secondary">
           {content} 
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
