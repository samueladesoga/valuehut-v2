"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useTransform, MotionValue } from "framer-motion";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.25"],
  });

  const words = text.split(" ");
  return (
    <p ref={element} className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        if (i < 3) {
          return (
            <span
              key={i}
              className="relative text-[47px] text-main leading-[65.8px] font-primary font-medium md:text-[67px] md:leading-[93px] mr-3 mt-3"
            >
              {word}
            </span>
          );
        }
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default Paragraph;

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative text-[47px] text-main leading-[65.8px] font-primary font-medium md:text-[67px] md:leading-[93px] mr-3 mt-3">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
