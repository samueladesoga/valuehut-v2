"use client";

import React from "react";
import Button from "@/components/Button/Button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
  button?: React.ReactNode;
  btnText?: string;
  btnLink?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  image = "/images/image@2x.jpeg",
  btnText = "Get Started",
  btnLink = "#",
}: HeroBannerProps) {
  const router = useRouter();

  return (
    <section className="container px-6 py-6 sm:py-16 xl:px-0">
      <div className="h-[600px] flex flex-end bg-cover rounded-[30px] object-cover bg-center bg-no-repeat relative">
        <Image
          src={image}
          layout="fill"
          className="object-center object-cover rounded-3xl pointer-events-none"
          alt={title ?? ""}
          priority
        />
        <div className="bg-gradient-custom rounded-3xl container flex relative z-1 p-9 sm:p-20">
          <div className=" absolute flex flex-col gap-4 bottom-10 sm:w-1/2 text-accentmain">
            <motion.h1
              className="text-[41px] leading-[45.1px] sm:text-[54px] sm:leading-[59.4px] font-primary font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-xl font-secondary text-accentmain font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex text-start text-main"
            >
              <Link href={btnLink || ""} target="_blank">
                <Button
                  bgColor="fill-brand-secondary"
                  size="medium"
                  icon={<ChevronRight />}
                  rounded="full"
                  className="mt-5 text-start font-semibold"
                  onClick={() => router.push("/academy")}
                >
                  {btnText}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
