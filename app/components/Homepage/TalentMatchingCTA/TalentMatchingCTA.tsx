"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import Image from "next/image";
import GirlImage from "@/images/BookACallCTA-image.png";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface CTAHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CTASubheadingProps {
  headline: string;
  description: string;
}

const TalentMatchingCTA: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-fill-neutral-strong container flex flex-col md:flex-row xl:rounded-[30px] items-center p-9 sm:p-20 pt-20 pb-10 justify-between relative space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="flex flex-col gap-6 items-start ">
        <div className="text-2xs text-[#ffff] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#fff]/50">
          Talent Matching
        </div>

        <div>
          <CTAHeading text="Recruitment service, done better." />
          <div className="flex flex-col sm:flex-row gap-8">
            <CTASubheading
              headline="Specialist"
              description="Our recruitment service caters for Delivery Managers/Lead, Scrum Masters and Product Owners."
            />
            <CTASubheading
              headline="Why us"
              description="We screen candidates better than traditional recruiters."
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            icon={<ChevronRight />}
            rounded="full"
            className="mt-5 "
            onClick={() => router.push("/talent-matching")}
          >
            Get started now
          </Button>
        </motion.div>
      </div>

      <div className="max-w-[454px] bg-[#E7EDE4] rounded-[20px] pt-6 px-6 flex justify-center items-center flex-col gap-2">
        <div className="flex gap-2 items-center">
          <hr className="w-14 rotate-90 border-2 border-[#FBAC65]" />
          <p className="text-sm italic  w-full text-main font-normal">
            Established product delivery teams often face challenges related to
            adoption
          </p>
        </div>
        <Image src={GirlImage} alt="image" width={300} height={300} />
      </div>
    </section>
  );
};

const CTAHeading: React.FC<CTAHeadingProps> = ({ text }) => (
  <h2 className={`text-9xl font-medium text-accentMain font-primary`}>
    {text.split(" ").map((word, index, array) =>
      word.toLowerCase() === "fast." && index === array.length - 1 ? (
        <span key={index} className="text-[#EFF1CB]">
          {word}
        </span>
      ) : (
        <span key={index} className="text-accentsecondary">
          {word}{" "}
        </span>
      ),
    )}
  </h2>
);

const CTASubheading: React.FC<CTASubheadingProps> = ({
  headline,
  description,
}) => (
  <div className="mt-5">
    <h3 className="text-xl font-semibold mb-2 text-[#ffff] font-secondary">
      {headline}
    </h3>
    <p className="text-sm font-normal text-[#ffff] font-secondary">
      {description}
    </p>
  </div>
);

export default TalentMatchingCTA;
