export interface IHeroSection {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  backgroundImage: string;
}

export const heroData: IHeroSection = {
  title: "Talent Matching",
  subtitle:
    "Our recruitment service for IT and Transformation Professionals by professional consultants with experiences of working in similar organisations and roles.", 
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/talentmatching/talent-hero.png",
  buttonText: "Book a consultation",
  buttonLink: "https://calendly.com/samueladesoga/valuehut-consulting",
};
