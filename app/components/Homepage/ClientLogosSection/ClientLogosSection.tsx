"use client";

import React from "react";
import { motion } from "framer-motion";
import { clientLogos, Logo } from "@/data/Home/clientLogos";
import Image from "next/image";

const ClientLogosSection = () => {
  return (
    <div className="client-logos-container container flex flex-col justify-center items-center text-center p-6 py-16 font-secondary font-medium">
      <div className="flex justify-center">
        <p className="text-[16px] leading-[24px] flex justify-center w-60 font-semibold mb-6">
          We are proud of working with the following clients
        </p>
      </div>
      <div className="logos-wrapper-container w-2/4 overflow-hidden">
        <div className="flex gap-8 sm:gap-20 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 gap-8 sm:gap-20"
          >
            {clientLogos.map((logo: Logo) => (
              <div key={logo.id} className="h-20 w-20">
                <Image
                  src={logo.url}
                  alt={`Logo of ${logo.name}`}
                  width={200}
                  height={200}
                  className="h-20 w-20 opacity-75 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 gap-8 sm:gap-20"
          >
            {clientLogos.map((logo: Logo) => (
              <div key={logo.id} className="h-20 w-20">
                <Image
                  src={logo.url}
                  alt={`Logo of ${logo.name}`}
                  width={200}
                  height={200}
                  className="h-20 w-20 opacity-75 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSection;
