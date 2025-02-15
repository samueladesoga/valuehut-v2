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
  title: "Transforming Teams and Organisations.",
  subtitle:
    "People are the heart of your organisation and we want to help improve how people work, lead, and are led.",
  showRating: false,
  ratingText: "Excellent",
  ratingDetails: "4.9 out of 5 based on 26,000+ reviews",
  backgroundImage: "/images/hero.png",
};
