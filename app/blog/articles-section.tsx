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
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="space-y-6">
            <h1 className="font-secondary  font-medium text-5xl ">
              All articles
            </h1>
            {articles.map((article) => (
              <article
                key={article.id}
                className="flex gap-4 border-b bg-re border-[#DEDEDE] pb-4"
              >
                <div className="shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={137}
                    height={90}
                    className="rounded-lg  object-cover"
                  />
                </div>
                <div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="block font-secondary text-sm font-medium text-main  mb-4"
                  >
                    {article.title}
                  </Link>
                  <p className="text-xs text-secondary font-normal  font-secondary">
                    {article.date} - {article.category}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-9"
          >
            Load more articles
          </Button>
        </div>

        <div className="lg:w-[820px ]  h-[820px]  gap-4 relative">
          <div className="absolute top-0 right-0 mb-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-sm font-secondary text-main"
            >
              Sort by: {sortBy} <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-10">
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

          <div className="bg-[#ECECEC] w-[348px]  h-[532px] rounded-lg aspect-square p-6 flex items-center justify-center mt-12">
            <p className="text-gray-500 font-secondary">Ad Example / CTA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
