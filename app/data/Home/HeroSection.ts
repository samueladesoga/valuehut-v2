export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  smallScreenImage?: string;
  largeScreenImage?: string;
}

export const heroData: HeroSectionProps = {
  title: "Redefine the way you work.",
  subtitle:
    "Helping organizations transform into a network of interdependent product teams across different sectors.",
  buttonText: "Get Started Now",
  buttonLink: "/get-started",
  showRating: true,
  ratingText: "Excellent",
  ratingDetails: "4.78 out of 5 based on 34 reviews",
  smallScreenImage: "bg-hero-image1",
  largeScreenImage: "sm:bg-hero-image2",
};
