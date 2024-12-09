export interface IArticles {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export const Articles: IArticles[] = [
  {
    id: 1,
    title:
      "Impact of User Acceptance Testing (UAT) phase on Organisation Agility",
    date: "22 Sept 2024",
    category: "Sports",
    image: "/images/blog/blog-v2-1.png",
    slug: "impact-of-uat-on-organizational-agility",
  },
  {
    id: 2,
    title:
      "Unlocking Organisational Agility: Key product metrics every business leader should measure",
    date: "22 Sept 2024",
    category: "AI news",
    image: "/images/blog/blog-v2-2.png",
    slug: "unlocking-organizational-agility-key-product-metrics-every-business-leader-should-measure",
  },
  {
    id: 3,
    title: "Case Study: How we rescued a start-up project within 3 months",
    date: "22 Sept 2024",
    category: "Technology",
    image: "/images/blog/blog-v2-3.png",
    slug: "case-study-how-we-rescued-a-start-up-project-within-3-months",
  },
  {
    id: 4,
    title: "Understanding Technical Debt: A Guide for Executives",
    date: "22 Sept 2024",
    category: "Robotics",
    image: "/images/blog/blog-v2-4.png",
    slug: "technical-debt-a-guide-for-executives",
  },
  {
    id: 5,
    title: "Agility for Improved Business Outcomes",
    date: "22 Sept 2024",
    category: "Technology",
    image: "/images/blog/blog-v2-5.png",
    slug: "agility-for-improved-business-outcomes",
  },
  {
    id: 6,
    title: "A case for Agile and Scrum Training with ValueHut",
    date: "22 Sept 2024",
    category: "AI news",
    image: "/images/blog/blog-v2-2.png",
    slug: "a-case-for-agile-and-scrum-training-with-valuehut",
  },
];
