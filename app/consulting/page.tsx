"use client";
import React, { useState } from "react";
// import MeetExperts from "@/components/Consulting/meet-experts";
import OurPartners from "@/components/FaqPage/OurPartners/OurPartners";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import BookACallCTA from "@/components/Homepage/BookACallCTA/BookACallCTA";
import { services } from "@/data/Consulting/services";
import { consultingheroData } from "@/data/Consulting/consulting";
import ConsultancyServiceItem from "@/components/Consulting/ConsultancyServiceItem";
import leftImage from "@/consulting/left-image.jpeg";
import rightImage from "@/consulting/valuehut-image.jpeg";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { ChevronRight } from "lucide-react";

const getBackgroundColor = (index: number) => {
  const colors = [
    "bg-[#E5EEF7]",
    "bg-[#D5D5D5]",
    "bg-[#FFF4EC]",
    "bg-[#E5EEF7]",
  ];
  return colors[index % colors.length];
};

function ConsultingPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={consultingheroData.title}
        subtitle={consultingheroData.subtitle}
        backgroundImage={consultingheroData.backgroundImage}
        buttonText={consultingheroData.buttonText}
      />
      <div className="my-16">
        <div className="container px-4 sm:p-8">
          <div className="">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-primary leading-tight  mb-8 sm:mb-12">
              Consultancy Services
              <br />
              Delivered by Our Experts
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <ConsultancyServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                points={service.points}
                backgroundColor={getBackgroundColor(index)}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 mt-5 sm:my-16">
          <div className="bg-[#E5DFD9] rounded-[21.5px] shadow-lg sm:transform sm:-rotate-[10deg] sm:z-10 sm:translate-x-14">
            <Image
              src={leftImage}
              alt="question"
              width={265}
              height={382}
              className="object-fit h-[382px] w-[265px] rounded-[21.5px]"
            />
          </div>
          <div className="bg-[#A5E0E7] rounded-[21.5px] shadow-lg sm:transform sm:rotate-[10deg] z-20 sm:-translate-x-14">
            <Image
              src={rightImage}
              alt="blend"
              width={265}
              height={382}
              className="object-fit h-[382px] w-[265px] rounded-[21.5px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-primary text-[#161A1D] mb-8">
            Meet our experts
          </h2>

          <p className="text-lg md:text-xl text-[#161A1D] font-secondary mb-10 max-w-2xl">
            Helping Organisations transform into a network of interdependent
            product teams across different business units into a network of
            interdependent.
          </p>

          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            icon={<ChevronRight />}
            rounded="full"
            className="mt-5 text-start "
          >
            Let&apos;s get in touch
          </Button>
        </div>
      </div>
      <div>
        <OurPartners />
      </div>
      <div className="pb-0 md:pb-20 mt-10 md:mt-0">
        <BookACallCTA
          title="Ready to book a free call?"
          description="ValueHut Consultancy is an Agile Management Consultant, helping organizations explore better ways of working and leading."
          buttonText="Book a free call"
          imageUrl="/images/BookACallCTA-image.png"
        />
      </div>
    </div>
  );
}

export default ConsultingPage;
