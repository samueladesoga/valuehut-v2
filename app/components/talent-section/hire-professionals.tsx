"use client";

import HireCard from "./HireCard";
import useScroll from "@/hooks/useScroll";

export default function HireProfessionals() {
  const [divRef, isDivVisible] = useScroll<HTMLDivElement>({
    threshold: 0,
  });

  const fadeUpClass = isDivVisible ? "fade-up-0ms" : "";
  const fadeUpClass1 = isDivVisible ? "fade-up-50ms" : "";
  const fadeUpClass2 = isDivVisible ? "fade-up-100ms" : "";

  return (
    <div className="bg-[#F5F5F5] px-6 py-6 sm:py-16 xl:px-0">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-7xl font-medium xl:text-8xl font-primary text-main mb-6 lg:mb-0">
            Hire only professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HireCard
            title={"Hire Quickly"}
            description={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form."
            }
            imageSrc={"/icons/rocket.svg"}
            bgColor={"bg-[#C5D8E0]"}
            divRef={divRef}
            className={`${fadeUpClass}`}
          />
          <HireCard
            title={"Top candidates"}
            description={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form."
            }
            imageSrc={"/icons/talent-star.svg"}
            bgColor={"bg-[#C4EBE3]"}
            divRef={divRef}
            className={`${fadeUpClass1}`}
          />
          <HireCard
            title={"Leading the Future"}
            description={
              "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form."
            }
            imageSrc={"/icons/Vector.svg"}
            bgColor={"bg-[#F5E5D7]"}
            divRef={divRef}
            className={`${fadeUpClass2}`}
          />
        </div>
      </div>
    </div>
  );
}
