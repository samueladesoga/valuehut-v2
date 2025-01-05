"use client";

import HireCard from "./HireCard";
import { motion } from "framer-motion";

export default function HireProfessionals() {
  return (
    <div className="bg-[#F5F5F5] px-6 py-6 sm:py-16 xl:px-0">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-7xl font-medium xl:text-8xl font-primary text-main mb-6 lg:mb-0">
            Hire only professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HireCard
              title={"Hire Quickly"}
              description={
                "Reduce the number of rejected candidates at first stage interviews"
              }
              imageSrc={"/icons/rocket.svg"}
              bgColor={"bg-[#C5D8E0]"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HireCard
              title={"Top candidates"}
              description={
                "Our candidates are top 1% in their chosen field of work"
              }
              imageSrc={"/icons/talent-star.svg"}
              bgColor={"bg-[#C4EBE3]"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <HireCard
              title={"Leading the Future"}
              description={
                "We help hire people that support your evolving business needs."
              }
              imageSrc={"/icons/Vector.svg"}
              bgColor={"bg-[#F5E5D7]"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
