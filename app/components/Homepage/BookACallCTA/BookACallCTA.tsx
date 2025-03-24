"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import Link from "next/link";

interface BookACallCTAProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  url?: string;
}

const BookACallCTA: React.FC<BookACallCTAProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  url,
}) => {
  return (
    <div className="container  bg-fill-brand-secondary h-auto md:h-[404px] p-0 sm:p-20 flex flex-col md:flex-row px-8 justify-between items-center xl:rounded-[30px]">
      <div className="mt-10 py-10 md:mt-0 ">
        <h2 className="text-[47px] sm:text-9xl font-normal text-main font-primary leading-[61px] ">
          {title}
        </h2>
        <p className="text-lg text-main font-secondary mt-2 w-full sm:max-w-[70%] font-normal">
          {description}
        </p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link target="_blank" href={url || ""}>
            <Button
              bgColor="[#032432]"
              textColor="white"
              rounded="full"
              className="font-secondary h-auto px-6 py-3 text-main text-sm font-medium "
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="flex-shrink-0 w-[307px] h-auto mb-0 sm:mb-6">
        <Image
          src={imageUrl}
          alt="Consultant ready to help"
          width={307}
          height={428}
          className="w-full h-auto object-contain bg-no-repeat rounded-md"
        />
      </div>
    </div>
  );
};

export default BookACallCTA;
