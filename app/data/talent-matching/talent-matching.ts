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
  title: "Recruitment for IT, Transformation & Product Professionals",
  subtitle:
    "Talent Matching and screening done by professional consultants who have experiences of working in similar organisations as yours and working in similar roles you are hiring for.", 
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/talentmatching/talent-hero.png",
  buttonText: "Book a consultation",
  buttonLink: "https://calendly.com/samueladesoga/valuehut-consulting",
};
