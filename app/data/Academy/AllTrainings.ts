export interface IAllTrainings {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  dates: string;
  rating: number;
  reviews: number;
  slug?: string;
  logo: string;
}
export interface ICourseCard {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  dates: string;
  rating: number;
  slug: string;
  reviews: number;
  logo: string;
}

export interface IAcadmeyHero {
  pill?: string | React.ReactNode;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  showRating?: boolean;
  ratingText?: string;
  ratingDetails?: string;
  ratingImage?: string;
}

export const AcademyHero: IAcadmeyHero = {
  title: "Agile and Scrum Courses",
  subtitle:
    "Join an upcoming Agile Leadership, Product Management or Scrum Mastery course guaranteed to get your organisation working faster, better and safer.",
  backgroundImage: "/images/trainings.png",
  pill: "ACADEMY",
  showRating: true,
  ratingText: "Excellent",
  ratingDetails: "4.78 out of 5 based on 34 reviews",
  ratingImage: "/images/logo-01.svg",
};