import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: any;
  className?: string;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div
      className={`max-w-[400px] h-[350px] sm:h-[500px] flex flex-col gap-28 sm:gap-44 md:gap-56 p-8`}
    >
      {icon && <Image src={icon} height={50} width={50} alt="image" />}
      <div className="">
        <h1 className="text-6xl font-medium font-secondary">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}

export default Card;
