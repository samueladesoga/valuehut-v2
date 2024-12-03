"use client";

import Image from "next/image";
import Button from "@/components/Button/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionPara from "@/components/SectionPara/SectionPara";
import { useEffect, useRef, useState } from "react";
import less from "@/less.svg";
import greater from "@/greater.svg";
import { useRouter } from "next/navigation";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
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
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1,
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
    <section className="container py-10  px-6 lg:px-0">
      <div className="flex flex-row justify-start items-center  mb-2">
        <div className="">
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
            onClick={()=> router.push('/blog')}
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
                <div className="border border-gray-300 rounded-lg shadow-md bg-white">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={440}
                    height={200}
                    objectFit="cover"
                    className="bg-no-repeat rounded-md mb-4"
                  />
                  <div className="p-6">
                    <h3 className="cursor-pointer text-lg font-primary truncate max-w-96 font-semibold mb-2" onClick={()=> router.push(`/blog/${article.slug}`)}>
                      
                      {article.title}
                    </h3>
                    <p className="text-sm text-body mb-4">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute  bottom-[-70px] left-3 block md:hidden transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
            >
              <Image src={less} alt="less" />
            </button>
          </div>
          <div className="absolute  left-14  bottom-[-70px] block md:hidden transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className=" w-8 h-8 bg-white  flex items-center justify-center rounded-full shadow hover:bg-gray-100"
            >
              <Image src={greater} alt="greater" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
