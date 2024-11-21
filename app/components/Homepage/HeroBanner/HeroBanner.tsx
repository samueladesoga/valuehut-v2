import React from "react";
import Button from "../../Button/Button";
import { ChevronRight } from "lucide-react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  button?: React.ReactNode;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="container px-6 py-6 sm:py-16 xl:px-0">
      <div
        className="bg-gradient-custom h-[700px] flex flex-end bg-cover rounded-[30px] object-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/image@2x.jpeg')" }}
      >
        <div className="container flex relative z-10 p-9 sm:p-20  ">
          <div className="absolute flex flex-col gap-4 bottom-10  sm:w-1/2 text-accentmain ">
            <h1 className="text-[41px] leading-[45.1px] sm:text-[54px] sm:leading-[59.4px] font-primary font-normal ">
              {title}
            </h1>
            <p className="text-lg font-secondary">{subtitle}</p>
            <div className="flex text-start text-main">
              <Button
                bgColor="fill-brand-secondary"
                size="medium"
                icon={<ChevronRight />}
                rounded="full"
                className="mt-5 text-start "
              >
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
