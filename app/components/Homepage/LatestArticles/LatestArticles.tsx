import React from "react";

interface ArticleProps {
  title: string;
  summary: string;
  imageUrl: string;
}

const articles: ArticleProps[] = [
  {
    title: "Getting projects DONE with agility",
    summary:
      "As we see more organisations clamouring for the Product Operating Model type of transformation, one question that has been...",
    imageUrl: "/path/to/first-image.jpg",
  },
  {
    title: "A case for Agile and Scrum Training with ValueHut",
    summary:
      "As we see more organisations clamouring for the Product Operating Model type of transformation, one question that has been...",
    imageUrl: "/path/to/second-image.jpg",
  },
  {
    title: "Case Study: How we rescued a start-up project within 3 months",
    summary:
      "As we see more organisations clamouring for the Product Operating Model type of transformation, one question that has been...",
    imageUrl: "/path/to/third-image.jpg",
  },
];

const LatestArticles: React.FC = () => {
  return (
    <div className="container latest-articles-container">
      <h2>Latest articles</h2>
      <div className="articles-list">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <ViewAllButton />
    </div>
  );
};

const ArticleCard: React.FC<ArticleProps> = ({ title, summary, imageUrl }) => (
  <div className="article-card">
    <img src={imageUrl} alt="Article thumbnail" className="article-image" />
    <h3>{title}</h3>
    <p>{summary}</p>
  </div>
);

const ViewAllButton: React.FC = () => (
  <button className="view-all-button">View All</button>
);

export default LatestArticles;
