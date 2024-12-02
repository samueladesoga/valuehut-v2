"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface ConsultancyServiceItemProps {
  title: string;
  description: string;
  points: string[];
  backgroundColor: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ConsultancyServiceItem: React.FC<ConsultancyServiceItemProps> = ({
  title,
  description,
  points,
  backgroundColor,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`transition-all rounded-[20px] duration-300 ${backgroundColor}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-6 flex justify-between items-center"
      >
        <h3 className="text-xl sm:text-2xl font-secondary font-semibold ">
          {title}
        </h3>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <p className="text-sm sm:text-base  font-secondary mb-4">
            {description}
          </p>
          <div className="mt-4">
            <h4 className="text-sm sm:text-base font-semibold mb-2 font-secondary ">
              Our consultants will assist you with:
            </h4>
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm  font-secondary"
                >
                  <ChevronRight className=" w-4 h-4 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultancyServiceItem;
