export interface IReviews {
  id: number;
  title: string;
  date: string;
  description: string;
  name: string;
  rating: number;
}

export const Reviews: IReviews[] = [
  {
    id: 1,
    title: "Product Owner Training Feedback",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 3,
  },
  {
    id: 2,
    title: "Great clarity, explanation and real life examples",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 3,
    title: "Detailed and practical sessions",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 4,
    title: "Session was interactive and engaging",
    date: "4 days ago",
    description:
      "Good training. Good delivery. Very Knowledgeable trainer and continuously engaged the trainees throughout the session.",
    name: "Student Name",
    rating: 5,
  },
  {
    id: 5,
    title: "Exceptional training and support",
    date: "3 days ago",
    description:
      "Great training delivery. Trainer was highly skilled and addressed all the doubts with practical examples.",
    name: "Student Name",
    rating: 5,
  },
];
