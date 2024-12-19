"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiringCard } from "@/components/HiringCard/HiringCard";

interface IWhoShouldAttend {
  title?: string;
  contentList?: string[];
}

interface WhoShouldAttendProps {
  WhoShouldAttendData: IWhoShouldAttend;
}

const WhoShouldAttend = ({ WhoShouldAttendData }: WhoShouldAttendProps) => {
  const bgColors = ["bg-[#05668D33]", "bg-[#02C39A33]", "bg-[#F6A75F33]"];
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container px-4 xl:px-0 py-16">
        <div className="flex flex-col gap-5">
          <h3 className="text-6xl font-medium text-main font-primary">
            {WhoShouldAttendData.title}
          </h3>
          <div className="flex flex-col md:flex-wrap md:flex-row gap-4">
            {(WhoShouldAttendData.contentList ?? []).map(
              (attend: string, index: number) => (
                <motion.div
                key={attend} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <HiringCard
                    bgColor={bgColors[index % bgColors.length]}
                    text={`0${index + 1}`}
                    description={attend}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttend;