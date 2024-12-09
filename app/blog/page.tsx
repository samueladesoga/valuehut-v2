import React from "react";
import BlogCard from "@/components/Blog/BlogCard/BlogCard";
import BlogItem from "@/components/Blog/BlogItem/BlogItem";
import ArticlesSection from "@/components/Blog/ArticleSection/articles-section";
import { getAllArticles } from "@/lib/api";

export default async function Blogs() {
  const sortingOptions = ["Latest", "Oldest", "Most viewed"];
  const NewArticles = await getAllArticles();
  const mainArticle = NewArticles.props.posts[0];
  const sideArticles = NewArticles.props.posts.slice(1, 6);

  return (
    <div className="bg-[#F5F5F5] py-7">
      <div className="bg-[#f5f5f5] px-4 md:px-4 lg:px-0 container mt-[100px]">
        <div>
          <h2 className="text-[47px] sm:text-9xl leading-[61px] font-primary  mb-9 text-main sm:font-normal font-medium">
            Our Articles
          </h2>
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
              />
            </div>
            <div className="grid grid-cols-1 w-full ">
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="mt-20">
        <ArticlesSection
          articles={NewArticles.props.posts}
          sortingOptions={sortingOptions}
          defaultSortBy="Latest"
        />
      </section>
    </div>
  );
}
