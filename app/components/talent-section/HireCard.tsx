import React from "react";
import Image from "next/image";

interface HireCardProps {
  title: string;
  description: string;
  className?: string;
  imageSrc: string;
  bgColor: string;
  divRef: React.RefObject<HTMLDivElement>;
}

const HireCard: React.FC<HireCardProps> = ({
  title,
  description,
  className,
  bgColor,
  imageSrc,
  divRef,
}) => {
  return (
    <div
      ref={divRef}
      className={`${bgColor} ${className} rounded-xl p-6 lg:p-8`}
    >
      <Image
        src={imageSrc}
        alt={title}
        className="w-[60px] h-[60px] mb-20"
        width={60}
        height={60}
      />
      <h3 className="text-4xl font-primary font-medium text-main mb-3">
        {title}
      </h3>
      <p className="text-sm text-[#161A1D] font-secondary">{description}</p>
    </div>
  );
};

export default HireCard;
