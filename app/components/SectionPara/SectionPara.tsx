import React from "react";

interface SectionParaProps {
  para?: string;
  className?: string;
}

function SectionPara({ para, className }: SectionParaProps) {
  return (
    <p
      className={`${className} font-secondary font-normal text-main text-base sm:text-xl text-center`}
    >
      {para}
    </p>
  );
}

export default SectionPara;
