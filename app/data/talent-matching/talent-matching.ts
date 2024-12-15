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
    "Our talent matching services help you find professional Scrum Masters, Delivery Leads and Delivery Managers..",
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/talentmatching/talent-hero.png",
  buttonText: "Book a consultation",
};
