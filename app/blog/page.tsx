import React from "react";
import BlogCard from "@/components/Blog/BlogCard/BlogCard";
import BlogItem from "@/components/Blog/BlogItem/BlogItem";
import ArticlesSection from "@/components/Blog/ArticleSection/articles-section";
import { Articles } from "@/data/Blog/Articles";
import { SideArticles } from "@/data/Blog/SideArticles";
import { MainArticle } from "@/data/Blog/MainArticle";

const Blogs: React.FC = () => {
  const sortingOptions = ["Latest", "Oldest", "Most viewed"];
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
                image={MainArticle.image}
                title={MainArticle.title}
                description={MainArticle.description}
                date={MainArticle.date}
                category={MainArticle.category}
                slug={MainArticle.slug}
              />
            </div>
            <div className="grid grid-cols-1 w-full ">
              <h1 className="font-primary font-medium text-[26px] leading-[33px] sm:hidden mt-8 sm:mt-0">
                Latest Articles
              </h1>
              {SideArticles.map((sideArticle, index) => (
                <div key={index} className="my-1">
                  <BlogItem
                    image={sideArticle.image}
                    title={sideArticle.title}
                    date={sideArticle.date}
                    tag={sideArticle.tag}
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
          articles={Articles}
          sortingOptions={sortingOptions}
          defaultSortBy="Latest"
        />
      </section>
    </div>
  );
};
export default Blogs;
