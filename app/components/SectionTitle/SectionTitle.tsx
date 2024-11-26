import React from "react";

interface SectionTitleProps {
  title?: string;
  className?: string;
}

function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`sm:text-9xl text-[47px] leading-[61px] font-medium text-main font-primary text-center ${className}`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
