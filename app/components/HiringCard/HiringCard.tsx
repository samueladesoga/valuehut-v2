import React from "react";

interface IHiringCard {
  bgColor: string;
  text: string;
  description: string;
  className?: string;
  divRef?: React.RefObject<HTMLDivElement>;
}
export const HiringCard = ({
  bgColor,
  text,
  description,
  divRef,
  className,
}: IHiringCard) => {
  return (
    <div
      ref={divRef}
      className={`${bgColor} ${className} rounded-xl p-6 flex flex-col justify-between max-w-[468px] h-[260px]`}
    >
      <div className="text-[46px] leading-[32.2px] font-primary font-extralight text-main">
        {text}
      </div>
      <p className="text-lg text-main font-secondary font-medium">
        {description}
      </p>
    </div>
  );
};