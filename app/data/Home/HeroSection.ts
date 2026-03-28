export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  backgroundImage: string;
}

export const heroData: HeroSectionProps = {
  title: "High-Performing Teams Delivering Exceptional Outcomes.",
  subtitle:
    "We partner with organisations to embed Agile and modern ways of working that help teams deliver faster, lead with confidence, and build products people actually want.",
  showRating: false,
  ratingText: "Excellent",
  ratingDetails: "4.9 out of 5 based on 26,000+ reviews",
  backgroundImage: "/images/hero.png",
};
