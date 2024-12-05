import React from "react";

interface SectionTitleProps {
  title?: string;
  className?: string;
  titleRef?: React.RefObject<HTMLDivElement>;
}

function SectionTitle({ title, className = "", titleRef }: SectionTitleProps) {
  return (
    <div
      ref={titleRef}
      className={`sm:text-9xl text-[47px] leading-[61px] font-medium text-main font-primary text-center ${className}`}
    >
      {title}
    </div>
  );
}

export default SectionTitle;
