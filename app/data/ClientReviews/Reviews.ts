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
    title: "Helped get our project back on track",
    date: "4 years ago",
    description:
      "ValueHut Consulting helped rescue our rewrite project for our SaaS product; He was able to help with setting clear directions for the delivery team and whilst supporting the team to deliver the project in time for the launch.",
    name: "Kevin, Founder & Product Owner",
    rating: 5,
  },
  {
    id: 2,
    title: "Guided our software delivery team at JP Morgan",
    date: "1 year ago",
    description:
      "The Consultant guided our software development team at JPMorgan. Initially we had two Jira projects, only one with sprints, and always over-committed on the other. He helped us simplify this, make sure we were focussed on business priorities, reduce silos, work out our velocity, and commit to delivering this, reduce churn and develop a very clear agile process.",
    name: "Roger, Software Development Manager",
    rating: 5,
  },
  {
    id: 3,
    title: "Strong automation skills",
    date: "10 years ago",
    description:
      "The Consultant combines strong automation skills in a number of programming languages, and excellent technical exploratory testing skills. I hope to work with the consultant and his team again.",
    name: "Alan R",
    rating: 5,
  },
];
