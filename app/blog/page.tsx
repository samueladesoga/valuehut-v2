import React from "react";
import BlogPage from "@/blog/BlogPage";
import ArticlesSection from "./articles-section";

const Blogs: React.FC = () => {
  const mainArticle = {
    image: "/images/blog/blog-v2-front.jpeg",
    title: "Understanding Technical Debt: A Guide for Executives",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    date: "22 Sept 2024",
    category: "Technology",
  };

  const sideArticles = [
    {
      image: "/images/blog/blog-v2-front.jpeg",
      title: "Immersive Training for Scrum and Agile Leadership Courses",
      date: "12th June 2021",
      tag: "Teamwork",
    },
    {
      image: "/images/blog/blog-v2-front.jpeg",
      title: "Agile Methodologies and Their Role in the Future of Work",
      date: "5th June 2021",
      tag: "Agile",
    },
    {
      image: "/images/blog/blog-v2-front.jpeg",
      title: "How Scrum Framework Helps Scale Agile in Large Organizations",
      date: "18th May 2021",
      tag: "Scaling Agile",
    },
    {
      image: "/images/blog/blog-v2-front.jpeg",
      title: "Driving Business Value with Agile Transformation",
      date: "1st April 2021",
      tag: "Business Agility",
    },
    {
      image: "/images/blog/blog-v2-front.jpeg",
      title: "The Future of Work: Combining Agile and AI for Better Outcomes",
      date: "22nd March 2021",
      tag: "AI and Agile",
    },
  ];

  const articles = [
    {
      id: 1,
      title:
        "Impact of User Acceptance Testing (UAT) phase on Organisation Agility",
      date: "22 Sept 2024",
      category: "Sports",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "uat-impact",
    },
    {
      id: 2,
      title:
        "Unlocking Organisational Agility: Key product metrics every business leader should measure",
      date: "22 Sept 2024",
      category: "AI news",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "organizational-agility",
    },
    {
      id: 3,
      title: "Case Study: How we rescued a start-up project within 3 months",
      date: "22 Sept 2024",
      category: "Technology",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "startup-rescue",
    },
    {
      id: 4,
      title: "Understanding Technical Debt: A Guide for Executives",
      date: "22 Sept 2024",
      category: "Robotics",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "technical-debt",
    },
    {
      id: 5,
      title: "Agility for Improved Business Outcomes",
      date: "22 Sept 2024",
      category: "Technology",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "agility-outcomes",
    },
    {
      id: 6,
      title: "A case for Agile and Scrum Training with ValueHut",
      date: "22 Sept 2024",
      category: "AI news",
      image: "/images/blog/blog-v2-front.jpeg",
      slug: "agile-training",
    },
  ];

  const sortingOptions = ["Latest", "Oldest", "Most viewed"];

  return (
    <div className="bg-[#f5f5f5] py-7">
      <BlogPage mainArticle={mainArticle} sideArticles={sideArticles} />
      <ArticlesSection
        articles={articles}
        sortingOptions={sortingOptions}
        defaultSortBy="Latest"
      />
    </div>
  );
};

export default Blogs;
