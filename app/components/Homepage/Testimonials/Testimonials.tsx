"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Star from "../../../../public/start.svg";

interface TestimonialProps {
  name: string;
  date: string;
  review: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Demi Adeniji",
      date: "May 20, 2024",
      review:
        "The sessions were engaging and enlightening! I particularly enjoyed how our trainer was able to draw examples from real life scenarios making it easier to understand the concepts taught.",
      rating: 4.9,
    },
    {
      name: "Alex Johnson",
      date: "June 15, 2024",
      review:
        "The sessions were engaging and enlightening! I particularly enjoyed how our trainer was able to draw examples from real life scenarios making it easier to understand the concepts taught.",
      rating: 4.8,
    },
    {
      name: "Maria Garcia",
      date: "July 10, 2024",
      review:
        "The sessions were engaging and enlightening! I particularly enjoyed how our trainer was able to draw examples from real life scenarios making it easier to understand the concepts taught.",
      rating: 5.0,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="font-primary text-9xl font-medium mb-8">
        What our clients say
      </h2>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="relative">
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full hidden sm:block max-w-lg z-10 h-10 rounded-xl bg-[#E2E2E2] opacity-70"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[84%] h-6 rounded-xl hidden sm:block bg-[#E2E2E2] opacity-45 "></div>
          <div className="bg-[#E2E2E2] p-6 rounded-xl shadow-sm border border-gray-200 z-10 relative flex flex-col gap-8">
            <div className="mx-auto">
              <div className="flex gap-1 justify-center items-center mb-2">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Image
                      key={index}
                      className="w-4 h-4 bg-[#00B67A]"
                      src={Star}
                      alt="star"
                    />
                  ))}
              </div>
              <h3 className="text-[#141834] font-primary text-2xl font-semibold">
                {testimonials[currentIndex].name}
              </h3>
            </div>
            <p className="text-xl font-normal font-secondary">
              {testimonials[currentIndex].review}
            </p>
            <footer className="text-gray-500">
              {testimonials[currentIndex].date}
            </footer>
          </div>
        </div>
        <div className="hidden sm:flex justify-between absolute top-1/2 left-[-60px] right-[-60px] transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex sm:hidden justify-center mt-4">
          <button
            onClick={handlePrev}
            className="p-2 mx-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 mx-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mt-16 text-sm text-center text-gray-500">
        Rated <strong className="text-secondary  font-bold">4.9 / 5</strong>{" "}
        based on{" "}
        <a href="#" className="underline text-secondary  font-bold">
          25,133 reviews
        </a>
        . Showing our favorite reviews.
        <div className="mt-2">
          <Image
            src="/images/sliderratings.png"
            alt="Trustpilot"
            width={100}
            height={10}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
