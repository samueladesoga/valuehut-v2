"use client";

import { Features, IFeatures } from "@/data/FeatureCard/FeatureCard";
import Image from "next/image";


export default function HireProfessionals() {
  return (
    <div className="bg-[#F5F5F5] px-6 py-6 sm:py-16 xl:px-0">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-7xl font-medium xl:text-8xl font-primary text-main mb-6 lg:mb-0">
            Hire only professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Features.map((feature:IFeatures) => (
            <div
              key={feature.title}
              className={`${feature.bgColor} rounded-xl p-6 lg:p-8`}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-[60px] h-[60px] mb-20"
                width={60}
                height={60}
              />
              <h3 className="text-4xl font-primary font-medium text-main mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[#161A1D] font-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
