export interface ICourseDetails {
  title: string;
  description: string;
  partner: {
    name: string;
    logo: string;
  };
  reviews: {
    rating: number;
    count: number;
  };
  schedule: {
    date: string;
    time: string;
    classType: string;
  };
  images: {
    heroImage: string;
  };
  logo:string
  courseId:string
  classSysId:string
  filled: boolean
  course?: any
  availableClasses?: any[]
}

export const courseDetails: ICourseDetails = {
  title: "Professional Scrum Master",
  description:
    "Understand the importance of self-managing teams and the role of Scrum Master in developing the self-managing abilities of the Scrum Team.",
  partner: {
    name: "Scrum.org",
    logo: "/images/logo-01.svg",
  },
  reviews: {
    rating: 4.9,
    count: 26753,
  },
  schedule: {
    date: "Oct 24 - Oct 25, 2024",
    time: "2h 45m",
    classType: "Virtual",
  },
  images: {
    heroImage: "/images/coursedetails.png",
  },
  logo: "",
  courseId: "",
  classSysId: "",
  filled: false
};
