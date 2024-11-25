

import React from "react";

interface StatItem {
  title: string;
  number: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
}

const StatsSection = ({ title, number, description }: StatItem) => (
  <div className="text-center lg:text-left">
    <div className="text-5xl font-semibold text-[#FF9F5A]">{number}</div>
    <div className="text-xl text-[#161A1D] font-semibold">{title}</div>
    <p className="text-sm text-[#161A1D]">{description}</p>
  </div>
);

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, subtitle, stats }) => {
  return (
    <div className="w-full bg-[#2D3748] py-16 px-4 sm:px-16">
      {/* Header */}
      <div className="mb-12 text-center lg:text-left">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-primary text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-white mt-4">
          {subtitle}
        </p>
      </div>

      {/* Stats Sections */}
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-12">
        {stats.map((stat, index) => (
          <StatsSection
            key={index}
            title={stat.title}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
