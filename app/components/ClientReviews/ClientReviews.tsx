"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Star from "@/start.svg";
import less from "@/less.svg";
import greater from "@/greater.svg";
import { Reviews } from "@/data/ClientReviews/Reviews";

interface ClientReviewsProps {
  title?: string;
}

const ClientReviews = ({
  title = "What our clients say",
}: ClientReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card && containerRef.current) {
      containerRef.current.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? Reviews.length - 1 : prevIndex - 1;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === Reviews.length - 1 ? 0 : prevIndex + 1;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, Reviews.length);
  }, []);

  return (
    <div className="w-full mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-9xl font-medium font-primary text-main">{title}</h1>
        <div className="hidden md:flex gap-4">
          <button
            onClick={handlePrev}
            className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
          >
            <Image src={less} alt="less" width={6} height={11} />
          </button>
          <button
            onClick={handleNext}
            className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
          >
            <Image src={greater} alt="greater" width={6} height={11} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        >
          {Reviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el;
              }}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] bg-[#E4E4E4] p-6 rounded-xl snap-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Image
                      key={index}
                      className="w-4 h-4 bg-[#00B67A]"
                      src={Star}
                      alt="star"
                    />
                  ))}
                </div>
              </div>
              <h3 className="mt-2 text-lg font-secondary font-semibold">
                {review.title}
              </h3>
              <p className="text-xs font-secondary font-normal text-[#929292]">
                {review.date}
              </p>
              <p className="mt-4 font-secondary font-medium text-xs text-main">
                {review.description}
              </p>
              <p className="mt-4 font-medium text-xs text-secondary">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center items-center md:hidden gap-4">
        <button
          onClick={handlePrev}
          className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
        >
          <Image src={less} alt="less" width={6} height={11} />
        </button>
        <button
          onClick={handleNext}
          className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
        >
          <Image src={greater} alt="greater" width={6} height={11} />
        </button>
      </div>
    </div>
  );
};

export default ClientReviews;
