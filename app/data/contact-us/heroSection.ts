export interface IHeroSection {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

export const heroData: IHeroSection = {
  title: "Get in touch.",
  subtitle:
    "Please fill out the form below and one of us will contact you within 24hrs. Or, contact us by email or phone number listed below.",
  backgroundImage: "/images/contact-us.jpeg",
};
