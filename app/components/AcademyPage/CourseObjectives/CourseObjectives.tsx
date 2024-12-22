import { IObjectives } from "@/data/Academy/Objectives";
import Image from "next/image";
import React from "react";

function CourseObjectives({ text }: IObjectives) {
  return (
    <div className="flex items-baseline gap-2 max-w-[560px]">
      <div className="w-3 h-3 shrink-0">
        <Image
          src="/greater.svg"
          width={24}
          height={24}
          alt="icon"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm font-medium text-body font-secondary">{text}</p>
    </div>
  );
}

export default CourseObjectives;
