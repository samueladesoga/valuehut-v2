"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SectionPara from "../../SectionPara/SectionPara";
import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ArticlesSectionProps {
  title?: string;
  description?: string;
  articles: Article[];
}

export default function ArticlesSection({
  title,
  description,
  articles,
}: ArticlesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollTo({
        left: currentIndex * width,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);
  return (
    <section className="container py-10  px-10 lg:px-0">
      <div className="flex flex-row justify-start items-center  mb-2">
        <div className=" max-w-xl lg:max-w-3xl ">
          <SectionTitle
            title={title}
            className="fontSize-9xl flex items-start justify-start"
          />
          <SectionPara para={description} className="mb-6" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="flex justify-end w-full mt-[10px] md:mt-[-85px] ">
          <Button
            bgColor="fill-brand-secondary"
            rounded="full"
            size="medium"
            className=""
          >
            View All
          </Button>
        </div>
        
        <div className="relative">
          <div
            className="flex overflow-hidden md:mt-10"
            ref={containerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                    objectFit="cover"
                    className="bg-no-repeat rounded-md mb-4"
                  />

                  <h3 className="text-xl truncate max-w-96 font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{article.description}</p>
                  <a
                    href={article.link}
                    className="text-blue-600 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute  bottom-[-70px] left-3 block md:hidden transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
            >
              &lt;
            </button>
          </div>
          <div className="absolute  left-14  bottom-[-70px] block md:hidden transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
