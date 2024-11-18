import React from "react";

interface SectionTitleProps {
  title?: string;
  className?: string;
}

function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-[60px] leading-[78px] font-medium font-primary text-center ${className}`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
