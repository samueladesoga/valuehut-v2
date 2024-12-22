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
  title: "Recruitment for Agile Professionals",
  subtitle:
    "Our talent matching services helps you recruits Delivery Managers or Leads, Scrum Masters and Product Owners.",
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/talentmatching/talent-hero.png",
  buttonText: "Book a consultation",
  buttonLink: "https://calendly.com/samueladesoga/valuehut-consulting",
};
