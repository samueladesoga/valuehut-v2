"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { useRouter } from "next/navigation"; 



const getBackgroundColor = (index: number) => {
  const colors = [
    "bg-[#E5EEF7]",
    "bg-[#D5D5D5]",
    "bg-[#FFF4EC]",
    "bg-[#E5EEF7]",
    "bg-[#D5D5D5]",
  ];
  return colors[index % colors.length];
};

function ConsultingPage() {


  const router = useRouter(); 

const navigateToContactUs = () => {
  router.push("/contact-us"); 
};
  const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <div className="bg-[#f5f5f5]">
      <HeroComponent
        title={consultingheroData.title}
        subtitle={consultingheroData.subtitle}
        backgroundImage={consultingheroData.backgroundImage}
        buttonText={consultingheroData.buttonText}
        buttonLink={consultingheroData.buttonLink}
      />
      <div className="my-16">
        <div className="container  sm:px-0 px-4 sm:p-8">
          <div className="">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-primary leading-tight  mb-8 sm:mb-12">
              Consultancy Services
              <br />
              Delivered by Our Experts
            </h2>
          </div>

          <div className="relative space-y-[-20px] ">
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
      <div>
        <OurPartners />
      </div>
      <div>
        <WhyChooseUs
          title={"Why Choose Us?"}
          subtitle={
            "Our consultants have successfully helped organisation delivered products while upskilling teams in these organisations."
          }
          stats={[
            {
              title: "Years of Experience",
              number: "10+",
            },
            {
              title: "Projects Completed",
              number: "10+",
            },
            {
              title: "Happy Clients",
              number: "100+",
            },
          ]}
        />
      </div>
      <div className="py-12 flex flex-col-reverse sm:flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-8 mt-5 sm:my-16">
          <div className="md:hidden rounded-[21.5px] relative">
            <div className=" absolute inset-0 rounded-[21px]  bg-gradient-to-t from-[#1A1B13] sm:hidden">
              <div className="absolute bottom-0  p-4 sm:hidden">
                <h1 className=" font-secondary  font-semibold text-2xl text-[#FFFFFF]">
                  Samuel Adesoga
                </h1>
                <h3 className="font-secondary font-semibold text-sm text-[#FFFFFF]">
                  Principal Coach
                </h3>
              </div>
            </div>
            <Image
              src={leftImage}
              alt="question"
              width={265}
              height={382}
              className="object-cover h-[382px] sm:w-[261px] w-[361px] rounded-[21px]"
            />
          </div>

          <div className="md:hidden rounded-[21px] relative ">
            <div className="absolute z-10  rounded-[21px]  inset-0 bg-gradient-to-t from-[#1A1B13] sm:hidden">
              <div className="absolute bottom-0  p-4 sm:hidden">
                <h1 className=" font-secondary  font-semibold text-2xl text-[#FFFFFF]">
                  Temitope Awere
                </h1>
                <h3 className="font-secondary font-semibold text-sm text-[#FFFFFF]">
                  Partner Coach
                </h3>
              </div>
            </div>
            <Image
              src={rightImage}
              alt="blend"
              width={265}
              height={382}
              className="object-cover h-[382px] sm:w-[261px]  w-[361px] rounded-[21.5px] transform  sm:scale-x-[-1]"
            />
          </div>
          <motion.div
            className="hidden md:block"
            initial={{ rotate: -10, x: 65 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={leftImage}
              alt="question"
              width={265}
              height={382}
              className="object-cover h-[382px] sm:w-[261px] w-[361px] rounded-[21px]"
            />
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ rotate: 10, x: -65 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.5 }}
            rounded-lg
            shadow-lg
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={rightImage}
              alt="blend"
              width={265}
              height={382}
              className="object-cover h-[382px] sm:w-[261px]  w-[361px] rounded-[21.5px] transform  sm:scale-x-[-1]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-primary text-[#161A1D] mb-8">
            Meet our People
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
            onClick={navigateToContactUs}
          >
            Let&apos;s get in touch
          </Button>
        </div>
      </div>

      <div className="pb-0 md:pb-20 mt-10 md:mt-0 ">
        <BookACallCTA
          title="Ready to book a free call?"
          description="ValueHut Consultancy is an Agile Management Consultany, helping organizations explore better ways of working and leading."
          buttonText="Book a free call"
          imageUrl="/images/BookACallCTA-image.png"
          url="https://calendly.com/samueladesoga/valuehut-consulting"
        />
      </div>
    </div>
  );
}

export default ConsultingPage;
