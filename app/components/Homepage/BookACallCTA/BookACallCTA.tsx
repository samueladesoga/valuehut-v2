import Image from "next/image";
import React from "react";

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
          <button className="bg-[#032432] font-secondary h-auto px-6 py-3 rounded-full text-white text-main text-sm font-medium ">
            {buttonText}
          </button>
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
