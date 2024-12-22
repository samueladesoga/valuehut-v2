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
  backgroundImage?: string;
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

export const AllCourses: IAllTrainings[] = [
  {
    id: 1,
    title: "Professional Scrum Master",
    slug: "professional-scrum-master",
    description:
      "Helping Organisations transform into a network of interdependent product teams...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/icons/psm.svg",
  },
  {
    id: 2,
    title: "Professional Scrum Product Owner",
    slug: "professional-scrum-product-owner",
    description:
      "Helping Organisations transform into a network of interdependent product teams...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/icons/pspo.svg",
  },
  {
    id: 3,
    title: "Professional Scrum Master - Advanced",
    slug: "professional-scrum-master-advanced",
    description:
      "Helping Organisations transform into a network of interdependent product teams across different business units into a network of...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/icons/psm.svg",
  },
  {
    id: 4,
    title: "Professional Scrum Facilitation Skills",
    slug: "professional-scrum-facilitation-skills",
    description:
      "Helping Organisations transform into a network of interdependent product teams across different business units into a network of...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/icons/psf.svg",
  },
];
