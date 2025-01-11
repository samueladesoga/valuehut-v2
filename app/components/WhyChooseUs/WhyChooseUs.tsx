import React from "react";

interface StatItem {
  title: string;
  number: string;
}

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title,
  subtitle,
  stats,
}) => {
  return (
    <div className="w-full container sm:rounded-3xl bg-fill-neutral-strong py-16 px-4 sm:px-16">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-4xl sm:text-6xl lg:text-9xl font-primary text-accentmain font-medium">
          {title}
        </h2>
        <p className="text-sm sm:text-2xl text-center text-accentmain font-normal font-secondary mt-4">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-evenly py-6">
        {stats.map((c, index) => (
          <div key={index} className="text-center">
            <div className="text-[80px] leading-[104px] font-normal first:text-[#FBAC65] last:text-[#E6E4F3]">
              {c.number}
            </div>
            <div className="text-xl text-[#161A1D] font-normal text-accentsecondary">
              {c.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
