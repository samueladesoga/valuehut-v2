import React from "react";

interface SectionParaProps {
  para?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

function SectionPara({ para, className, ref }: SectionParaProps) {
  return (
    <div
      ref={ref}
      className={`${className} font-secondary font-normal text-main text-base sm:text-xl text-center`}
    >
      {para}
    </div>
  );
}

export default SectionPara;
