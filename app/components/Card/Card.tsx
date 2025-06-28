import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div
      className={`max-w-[400px] h-[350px] sm:h-[500px] flex flex-col justify-between items-start p-8`}
    >
      {icon && <Image src={icon} height={50} width={50} alt="image" />}
      <div className="">
        <h3 className="text-6xl font-medium font-secondary">{title}</h3>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}

export default Card;
