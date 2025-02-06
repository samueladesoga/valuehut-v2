"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button/Button";
import { convertDate } from "@/utils/ConvertDate";
import AdsImage from "@/data/AdsImage/AdsImage.jpg";

interface IArticle {
  id?: number;
  title: string;
  date: string;
  tag: string;
  image: string;
  slug: string;
  cover: {
    url: string;
  };
  firstPublishedAt: string;
}

interface ArticlesSectionProps {
  articles: IArticle[];
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
  const [visibleArticles, setVisibleArticles] = useState(6);

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      const dateA = new Date(a.firstPublishedAt).getTime();
      const dateB = new Date(b.firstPublishedAt).getTime();

      switch (sortBy) {
        case "Latest":
          return dateB - dateA;
        case "Oldest":
          return dateA - dateB;
        case "Most viewed":
          return 0;
        default:
          return 0;
      }
    });
  }, [articles, sortBy]);

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 6);
  };

  const allArticlesDisplayed = visibleArticles >= sortedArticles.length;

  return (
    <div className="container py-10 bg-white rounded-3xl px-4 xl:px-6">
      <div className="">
        <div className="flex flex-row justify-between">
          <h1 className="font-secondary font-medium text-[26px] leading-[33px] sm:text-5xl  pb-4">
            More articles
          </h1>
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-sm font-secondary text-main pt-1"
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

        <div className="flex justify-between sm:flex-row flex-col gap-10">
          <div className="w-full md:w-2/3">
            {sortedArticles.slice(0, visibleArticles).map((article, index) => (
              <article
                key={index}
                className="flex gap-6 border-b border-[#DEDEDE] py-3 overflow-hidden items-start"
              >
                <Image
                  src={article.cover.url}
                  alt={article.title}
                  width={132}
                  height={90}
                  className="rounded-lg w-[100px] h-[76px] sm:w-[132px] sm:h-[90px] object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-8 w-full">
                  <div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="font-secondary text-[14px] leading-[18px] sm:text-[19px] sm:leading-[24.7px] font-medium text-main line-clamp-2 overflow-hidden"
                    >
                      {article.title}
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-normal font-secondary">
                      {convertDate(article.date)} - {article.tag}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-lg flex items-center justify-center">
            {AdsImage ? (
              <Link href={"https://scrumdaynigeria.org/"} target="_blank">
                <Image
                  src={AdsImage}
                  alt="Ad"
                  width={380}
                  height={290}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </Link>
            ) : (
              <p className="Text-Main font-secondary bg-[#ECECEC] w-[348px] h-[280px] sm:h-[532px] font-semibold text-[21px] leading-[29px]">
                Ad Example / CTA
              </p>
            )}
          </div>
        </div>

        <div>
          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-9"
            onClick={loadMoreArticles}
            disabled={allArticlesDisplayed}
          >
            {allArticlesDisplayed ? "No more articles" : "Load more articles"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
