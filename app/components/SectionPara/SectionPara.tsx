import React from "react";

interface SectionParaProps {
  para?: string;
  className?: string;
}

function SectionPara({ para, className }: SectionParaProps) {
  return (
    <p
      className={`${className} font-secondary font-normal text-base sm:text-xl text-center sm:text-start`}
    >
      {para}
    </p>
  );
}

export default SectionPara;
