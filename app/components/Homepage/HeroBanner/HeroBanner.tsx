import React from "react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  button?: React.ReactNode;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section
      className="container bg-gradient-custom h-[700px] flex flex-end bg-cover rounded-[30px] object-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/image@2x.jpeg')" }}
    >
      <div className="container flex relative z-10 p-9 sm:p-14 ">
        <div className="absolute flex flex-col gap-4 bottom-10  sm:w-1/2 text-accentmain">
          <h1 className="text-[41px] leading-[45.1px] sm:text-[54px] sm:leading-[59.4px] font-primary font-normal">
            {title}
          </h1>
          <p className="text-lg font-secondary">{subtitle}</p>
          <a href="/explore-courses">
            <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
              Explore Courses <span className="ml-2">→</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
