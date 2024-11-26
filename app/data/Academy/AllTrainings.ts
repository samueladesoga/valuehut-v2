export interface IAllTrainings {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  dates: string;
  rating: number;
  reviews: number;
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
}

export const AcademyHero: IAcadmeyHero = {
  title: "Maximize your career growth with us",
  subtitle:
    "Helping Organisations transform into a network of interdependent product teams across different business units.",
  backgroundImage: "/images/image@2x.jpeg",
  pill: "ACADEMY",
};

export const AllCourses: IAllTrainings[] = [
  {
    id: 1,
    title: "Professional Scrum Master",
    description:
      "Helping Organisations transform into a network of interdependent product teams...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/images/psm.png",
  },
  {
    id: 2,
    title: "Professional Scrum Product Owner",
    description:
      "Helping Organisations transform into a network of interdependent product teams...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/images/pspo.png",
  },
  {
    id: 3,
    title: "Professional Scrum Master - Advanced",
    description:
      "Helping Organisations transform into a network of interdependent product teams across different business units into a network of...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/images/psm.png",
  },
  {
    id: 4,
    title: "Professional Scrum Facilitation Skills",
    description:
      "Helping Organisations transform into a network of interdependent product teams across different business units into a network of...",
    level: "Intermediate",
    duration: "2h 45m",
    dates: "19 Jul & 21 Sep 2024",
    rating: 5,
    reviews: 7,
    logo: "/images/psf.png",
  },
];
