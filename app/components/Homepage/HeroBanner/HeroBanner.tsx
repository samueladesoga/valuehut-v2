"use client";

import React from "react";
import Button from "@/components/Button/Button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
  button?: React.ReactNode;
  btnText?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  image = "/images/image@2x.jpeg",
  btnText = "Get Started",
}: HeroBannerProps) {
  const router = useRouter();

  return (
    <section className="container px-6 py-6 sm:py-16 xl:px-0">
      <div
        className="bg-gradient-custom h-[700px] flex flex-end bg-cover rounded-[30px] object-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container flex relative z-10 p-9 sm:p-20">
          <div className="absolute flex flex-col gap-4 bottom-10 sm:w-1/2 text-accentmain">
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
