import React from "react";
import Button from "../../Button/Button";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ViewImage from "./../../../../public/talentmatching.png";
import { ChevronRight } from "lucide-react";

interface CTAHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CTASubheadingProps {
  headline: string;
  description: string;
}

interface CTAButtonProps {
  label: string;
}

interface CTAImageProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const TalentMatchingCTA: React.FC = () => {
  return (
    <section className="bg-fill-neutral-strong container flex flex-col lg:flex-row xl:rounded-[30px] items-center px-6 pt-20 pb-10 justify-between relative space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="flex flex-col gap-6 items-start">
        <div className="text-2xs text-[#ffff] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#fff]/50">
          Talent Matching
        </div>

        <div>
          <CTAHeading text="We help you find the right talent, fast." />
          <div className="flex flex-col sm:flex-row gap-8">
            <CTASubheading
              headline="Headline one"
              description="Established product delivery teams often face challenges related to adoption."
            />
            <CTASubheading
              headline="Headline two"
              description="Our tailored solutions make adoption seamless and effective."
            />
          </div>
        </div>

        <Button
          bgColor="fill-brand-secondary"
          size="medium"
          icon={<ChevronRight />}
          rounded="full"
          className="mt-5"
        >
          Get started now
        </Button>
      </div>

      <div className="w-[360px] md:w-[454px] bg-[#E7EDE4] rounded-[20px] p-6 flex  justify-center shadow-lg flex-col">
        <div className="flex items-center">
          <hr className="w-14 rotate-90 border-2 border-[#FBAC65]" />
          <p className="text-sm italic  w-full text-main font-normal">
            Established product delivery teams often face challenges related to
            adoption
          </p>
        </div>
        <div className="w-full">
          <Image src={ViewImage} alt="image" width={300} height={300} />
        </div>
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
      )
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

const CTAButton: React.FC<CTAButtonProps> = ({ label }) => (
  <button
    className="py-3 px-6 rounded-full text-sm flex items-center justify-center w-fit font-medium hover:opacity-90"
    style={{
      backgroundColor: "var(--Color-Fill-Brand-secondary)",
      color: "var(--Color-Text-accentMain)",
      fontFamily: "'Inter', sans-serif",
    }}
  >
    {label}
    <span className="ml-2">→</span>
  </button>
);

const CTAImage: React.FC<CTAImageProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} width={1000} height={700} />
);

export default TalentMatchingCTA;
