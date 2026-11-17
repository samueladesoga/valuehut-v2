import { scrumOrgRating } from "@/data/shared/scrumOrgRating";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  ratingLink?: string;
  backgroundImage: string;
}

export const heroData: HeroSectionProps = {
  title: "High-Performing Teams Delivering Exceptional Outcomes.",
  subtitle:
    "We partner with organisations to embed Agile and modern ways of working that help teams deliver faster, lead with confidence, and build products people actually want.",
  showRating: true,
  ...scrumOrgRating,
  backgroundImage: "/images/hero.png",
};
