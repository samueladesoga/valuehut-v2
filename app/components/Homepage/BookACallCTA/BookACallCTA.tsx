"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button/Button";
import useScroll from "@/hooks/useScroll";

interface BookACallCTAProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const BookACallCTA: React.FC<BookACallCTAProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  const [buttonRef, isButtonVisible] = useScroll<HTMLButtonElement>({
    threshold: 0.1,
  });

  const fadeUpClassButton = isButtonVisible ? "fade-up-100ms" : "";
  return (
    <div className="container bg-fill-brand-secondary h-[404px] flex flex-col lg:flex-row px-8 justify-between items-center xl:rounded-[30px]">
      <div className="mt-10 py-10 md:mt-0 ">
        <h2 className="text-[47px] sm:text-9xl font-normal text-main font-primary leading-[61px] ">
          {title}
        </h2>
        <p className="text-lg text-main font-secondary mt-2 w-full sm:max-w-[70%] font-normal">
          {description}
        </p>
        <div className="mt-10">
          <Button
            buttonRef={buttonRef}
            bgColor="[#032432]"
            textColor="white"
            rounded="full"
            className={`font-secondary h-auto px-6 py-3 text-main text-sm font-medium ${fadeUpClassButton}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src={imageUrl}
          alt="Consultant ready to help"
          width={325}
          height={428}
          objectFit="cover"
          className="bg-no-repeat rounded-md sm:block hidden"
        />
      </div>
    </div>
  );
};

export default BookACallCTA;
