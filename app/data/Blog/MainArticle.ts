export interface IMainArticle {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
}

export const MainArticle: IMainArticle = {
  image: "/images/blog/blog-v2-front.jpeg",
  title: "Understanding Technical Debt: A Guide for Executives",
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  date: "22 Sept 2024",
  category: "Technology",
  slug: "technical-debt",
};
