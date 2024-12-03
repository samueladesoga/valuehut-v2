"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button/Button";

interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

interface ArticlesSectionProps {
  articles: Article[];
  sortingOptions: string[];
  defaultSortBy: string;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  sortingOptions,
  defaultSortBy,
}) => {
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="container py-10 bg-white rounded-3xl px-4 ">
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-secondary font-medium text-[26px] leading-[33px] sm:text-5xl ">
            All articles
          </h1>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-sm font-secondary text-main"
            >
              Sort by: {sortBy} <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 py-2 bg-white rounded-lg shadow-lg z-10">
                {sortingOptions.map((option) => (
                  <button
                    key={option}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-main font-secondary"
                    onClick={() => {
                      setSortBy(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex sm:flex-row flex-col py-2 gap-8">
          <div>
            {articles.map((article) => (
              <article
                key={article.id}
                className="flex gap-3 border-b border-[#DEDEDE] py-4"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={132}
                  height={90}
                  className="rounded-lg w-[100px] h-[76px] sm:w-[132px] sm:h-[90px] object-cover"
                />
                <div className="flex flex-col items-start gap-3 ">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-secondary text-[14px] leading-[18px] sm:text-[19px] sm:leading-[24.7px] font-medium text-main     "
                  >
                    {article.title}
                  </Link>
                  <p className="text-xs text-secondary font-normal font-secondary">
                    {article.date} - {article.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="bg-[#ECECEC] sm:w-[348px] h-[280px] sm:h-[532px] rounded-lg flex items-center justify-center">
            <p className="Text-Main font-secondary  font-semibold text-[21px]  leading-[29px]">
              Ad Example / CTA
            </p>
          </div>
        </div>
        <div>
          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-9"
          >
            Load more articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
