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
  title: "Find the missing piece of your team",
  subtitle:
    "Our talent matching services help you find professional Scrum Masters, Delivery Leads and Delivery Managers..",
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/images/image@2x.jpeg",
  buttonText: "Book a consultation",
};
