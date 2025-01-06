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
  title: "Transforming Organisations and Teams.",
  subtitle:
    "Your people are the heart of your organisation; hence, our mission is to help improve how people work, lead, and are led.",
  showRating: true,
  ratingText: "Excellent",
  ratingDetails: "4.78 out of 5 based on 34 reviews",
  backgroundImage: "/images/hero.png",
};
