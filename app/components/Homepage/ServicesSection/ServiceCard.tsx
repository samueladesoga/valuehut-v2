import React from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  href: string;
  buttonText: string;
  divRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bgColor,
  href,
  buttonText,
  divRef,
  className,
}) => {
  const router = useRouter();

  return (
    <div
      ref={divRef}
      className={`${bgColor} ${className} p-5 sm:p-8 rounded-[20px] font-primary text-white shadow-md flex flex-col justify-between items-start`}
      style={{ minHeight: "400px" }}
    >
      <div>
        <h3 className="text-3xl sm:text-6xl font-semibold mb-2  ">{title}</h3>
        <p className="text-sm mb-6 font-secondary ">{description}</p>
      </div>

      <Button
        size="medium"
        rounded="full"
        className="bg-transparent border border-white"
        onClick={() => router.push(href)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
