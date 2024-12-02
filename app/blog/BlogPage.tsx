import React from "react";
import BlogCard from "@/blog/BlogCard";
import BlogItem from "@/components/Blog/BlogItem";

interface BlogPageProps {
  mainArticle: {
    image: string;
    title: string;
    description: string;
    date: string;
    category: string;
  };
  sideArticles: {
    image: string;
    title: string;
    date: string;
    tag: string;
  }[];
}

const BlogPage: React.FC<BlogPageProps> = ({ mainArticle, sideArticles }) => {
  return (
    <div className="bg-[#f5f5f5] pt-28">
      <div className="container py-12">
        <h2 className="text-9xl font-primary text-main font-normal">
          Our Articles
        </h2>
      </div>
      <div>
        <div className="container flex justify-between py-6">
          <div className="flex-1">
            <BlogCard
              image={mainArticle.image}
              title={mainArticle.title}
              description={mainArticle.description}
              date={mainArticle.date}
              category={mainArticle.category}
            />
          </div>
          <div className="flex flex-col space-y-6 max-w-[523px]">
            {sideArticles.map((sideArticle, index) => (
              <div key={index}>
                <BlogItem
                  image={sideArticle.image}
                  title={sideArticle.title}
                  date={sideArticle.date}
                  tag={sideArticle.tag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
