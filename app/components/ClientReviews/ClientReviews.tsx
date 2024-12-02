"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Star from "@/start.svg";
import less from "@/less.svg";
import greater from "@/greater.svg";

const reviews = [
  {
    id: 1,
    title: "Product Owner Training Feedback",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 3,
  },
  {
    id: 2,
    title: "Great clarity, explanation and real life examples",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 3,
    title: "Detailed and practical sessions",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 4,
    title: "Session was interactive and engaging",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 5,
    title: "Exceptional training and support",
    date: "3 days ago",
    description:
      "Great training delivery. Trainer was highly skilled and addressed all the doubts with practical examples.",
    name: "Student Name",
    rating: 5,
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (container && card) {
      const cardWidth = card.offsetWidth + 24;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-9xl font-medium font-primary text-main">
          What our clients say
        </h1>
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
          className="flex gap-6 transition-transform duration-500 ease-in-out"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] bg-[#E4E4E4] p-6 rounded-xl"
              ref={currentIndex === review.id - 1 ? cardRef : null}
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
              <h3 className="mt-2 text-lg  font-secondary font-semibold">
                {review.title}
              </h3>
              <p className="text-xs font-secondary  font-normal  text-[#929292]">
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
      <div className="mt-8 text-sm text-center text-gray-500">
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

export default ClientReviews;
