"use client";

import React from "react";
import Image from "next/image";
import { Talents } from "@/data/talent-matching/Talents";

export default function TalentSection() {
  return (
    <div className=" py-16 relative">
      <div className="container mx-auto max-sm:px-4">
        <div className="flex flex-col-reverse  lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-sm:mt-20">
            <div className="absolute top-[-90px] w-[306px] h-[399px] left-1/2 transform -translate-x-1/2 z-40 text-center">
              <Image
                src="/talentmatching/avaible.png"
                alt="Top Talent Display"
                width={600}
                height={600}
                className="mx-auto w-full h-full"
              />
            </div>

            <div className="relative grid grid-cols-6 gap-5 w-auto">
              {Talents.slice(0, 18).map((talent) => (
                <div
                  key={talent.id}
                  className="cursor-pointer w-[53px] h-[53px]"
                >
                  <Image
                    src={talent.image}
                    alt={talent.name || "Avatar"}
                    width={80}
                    height={80}
                    className="rounded-full bg-cover w-[53px] h-[53px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:max-w-[50%]">
            <h2 className="text-[47px] leading-[61px] lg:text-5xl xl:text-9xl font-medium font-primary mb-4">
              Transparent recruitment service.
            </h2>
            <p className="text-lg lg:text-xl text-main font-normal font-secondary mb-8">
              Our talent matching service provides no-frills IT, Transformation & Product Professionals to help you achieve your business goals.
              We only recommend talents that we would hire in our consulting business. Give us a try today and see the difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
