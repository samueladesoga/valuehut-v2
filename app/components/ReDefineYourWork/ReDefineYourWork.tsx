import React from "react";

interface ReDefineYourWorkProps {
  title?: string;
  description?: string;
  button?: React.ReactNode;
}

export default function ReDefineYourWork({
  title,
  description,
  button,
}: ReDefineYourWorkProps) {
  return (
    <div className="w-full px-7 pt-8 sm:px-14 sm:pt-24">
      <div
        style={{ backgroundImage: "url('/images/image@2x.jpeg')" }}
        className="relative w-[1,440px] h-[700px] bg-cover bg-center rounded-[30px]"
      >
        <div className="flex flex-col absolute gap-3 sm:gap-6 bottom-10 left-10 sm:bottom-14 sm:left-14 w-80 text-white">
          <h1 className="text-5xl font-normal">{title}</h1>
          <p className="font-medium text-xl">{description}</p>
          <div>{button}</div>
        </div>
      </div>
    </div>
  );
}
