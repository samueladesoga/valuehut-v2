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
  title: "Let's get in touch.",
  subtitle:
    "Please fill out the form below and one of us will contact you within 24hrs. Or, contact us by email or phone number listed below.",
  showRating: true,
  ratingText: "Excellent",
  backgroundImage: "/images/image@2x.jpeg",
};
