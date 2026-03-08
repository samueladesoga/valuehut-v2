import React from "react";
import BlogCard from "@/components/Blog/BlogCard/BlogCard";
import BlogItem from "@/components/Blog/BlogItem/BlogItem";
import ArticlesSection from "@/components/Blog/ArticleSection/articles-section";
import { getAllArticles } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Agile, Scrum & Product Management Insights",
  description:
    "ValueHut Consulting Blog is a collection of articles, insights and news on Agile, Scrum, Leadership, Product Management and more.",
  alternates: {
    canonical: "https://www.valuehut.co/blog",
  },
  openGraph: {
    title: "Blog | Agile, Scrum & Product Management Insights - ValueHut Consulting",
    description:
      "Read articles, insights and news on Agile, Scrum, Leadership and Product Management from the ValueHut Consulting team.",
    url: "https://www.valuehut.co/blog",
    type: "website",
    images: [
      {
        url: "/logos/v2-dark.png",
        width: 512,
        height: 512,
        alt: "ValueHut Consulting Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Agile, Scrum & Product Management Insights - ValueHut Consulting",
    description:
      "Read articles, insights and news on Agile, Scrum, Leadership and Product Management from the ValueHut Consulting team.",
    images: ["/logos/v2-dark.png"],
  },
};

export default async function Blogs() {
  const sortingOptions = ["Latest", "Oldest"];
  const allArticles = await getAllArticles();
  const articlesToShow = allArticles.filter(
    (article) => article.isFeatured
  );
  const mainArticle = articlesToShow[0];

  const sideArticles = articlesToShow.slice(1, 6);

  const otherArticles = allArticles
    .filter((article) => article.isFeatured === false || !article.isFeatured)
    .map((article) => ({
      ...article,
      firstPublishedAt: article.firstPublishedAt.toString(),
    }));

  return (
    <div className="bg-[#F5F5F5] py-7">
      <div className="bg-[#f5f5f5] px-4 md:px-4 lg:px-0 container mt-[100px]">
        <div>
          <h1 className="text-[47px] sm:text-9xl leading-[61px] font-primary  mb-9 text-main sm:font-normal font-medium">
            Featured Articles
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-28 ">
            <div className="rounded-xl">
              <BlogCard
                image={mainArticle.cover.url}
                title={mainArticle.title}
                description={mainArticle.description}
                date={mainArticle.date}
                category={mainArticle.category}
                slug={mainArticle.slug}
                tag={mainArticle.tag}
              />
            </div>
            <div className="grid grid-cols-1 w-full content-start">
              <h1 className="font-primary font-medium text-[26px] leading-[33px] sm:hidden mt-8 sm:mt-0">
                Latest Articles
              </h1>
              {sideArticles.map((sideArticle, index) => (
                <div key={index} className="my-1">
                  <BlogItem
                    image={sideArticle.cover.url}
                    title={sideArticle.title}
                    date={sideArticle.date}
                    slug={sideArticle.slug}
                    tag={sideArticle.tag}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="mt-20">
        <ArticlesSection
          articles={otherArticles}
          sortingOptions={sortingOptions}
          defaultSortBy="Latest"
        />
      </section>
    </div>
  );
}
