import React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import BlogItem from "@/components/Blog/BlogItem";
import ArticlesSection from "@/components/Blog/articles-section";

const Blogs: React.FC = () => {
  const mainArticle = {
    image: "/images/blog/blog-v2-front.jpeg",
    title: "Understanding Technical Debt: A Guide for Executives",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    date: "22 Sept 2024",
    category: "Technology",
    slug: "understanding-technical-debt",
  };
  const sideArticles = [
    {
      image: "/images/blog/blog1.png",
      title: "Immersive Training for Scrum and Agile Leadership Courses",
      date: "22 Sept 2024 ",
      tag: " Sports",
      slug: "immersive-training-scrum",
    },
    {
      image: "/images/blog/blog2.png",
      title: "Agile Methodologies and Their Role in the Future of Work",
      date: "22 Sept 2024 ",
      tag: "All news",
      slug: "agile-methodologies-and-future",
    },
    {
      image: "/images/blog/blog3.png",
      title: "How Scrum Framework Helps Scale Agile in Large ",
      date: "22 Sept 2024 ",
      tag: " Technology",
      slug: "scrum-framework-agile",
    },
    {
      image: "/images/blog/blog4.png",
      title: "Driving Business Value with Agile Transformation",
      date: "22 Sept 2024 ",
      tag: "Business ",
      slug: "business-value-agile",
    },
    {
      image: "/images/blog/blog5.png",
      title: "The Future of Work: Combining Agile and AI for Better ",
      date: "22 Sept 2024 ",
      tag: " Robotics",
      slug: "future-work-agile-ai",
    },
  ];
  const articles = [
    {
      id: 1,
      title:
        "Impact of User Acceptance Testing (UAT) phase on Organisation Agility",
      date: "22 Sept 2024",
      category: "Sports",
      image: "/images/blog/blog1.png",
      slug: "uat-impact",
    },
    {
      id: 2,
      title:
        "Unlocking Organisational Agility: Key product metrics every business leader should measure",
      date: "22 Sept 2024",
      category: "AI news",
      image: "/images/blog/blog2.png",
      slug: "organizational-agility",
    },
    {
      id: 3,
      title: "Case Study: How we rescued a start-up project within 3 months",
      date: "22 Sept 2024",
      category: "Technology",
      image: "/images/blog/blog3.png",
      slug: "startup-rescue",
    },
    {
      id: 4,
      title: "Understanding Technical Debt: A Guide for Executives",
      date: "22 Sept 2024",
      category: "Robotics",
      image: "/images/blog/blog4.png",
      slug: "technical-debt",
    },
    {
      id: 5,
      title: "Agility for Improved Business Outcomes",
      date: "22 Sept 2024",
      category: "Technology",
      image: "/images/blog/blog5.png",
      slug: "agility-outcomes",
    },
    {
      id: 6,
      title: "A case for Agile and Scrum Training with ValueHut",
      date: "22 Sept 2024",
      category: "AI news",
      image: "/images/blog/blog4.png",
      slug: "agile-training",
    },
  ];
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
                image={mainArticle.image}
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
          articles={articles}
          sortingOptions={sortingOptions}
          defaultSortBy="Latest"
        />
      </section>
    </div>
  );
};
export default Blogs;
