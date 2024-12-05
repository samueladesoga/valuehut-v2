export interface Statistic {
  value: string;
  label: string;
}

export interface Card {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  href: string;
}

export interface IServicesSection {
  title: string;
  subtitle: string;
  statistics: Statistic[];
  cards: Card[];
}

export const coCreatingData: IServicesSection = {
  title: "Co-creating better ways of working and leading",
  subtitle:
    "Established product delivery teams often face challenges related to adoption",
  statistics: [
    { value: "25+", label: "Years of collective experience" },
    { value: "3x", label: "More Efficient Workflow" },
  ],
  cards: [
    {
      title: "Academy",
      description:
        "Developing Organisation agility capabilities is a complex journey of Learning and Unlearning",
      buttonText: "Explore Courses",
      buttonLink: "#",
      bgColor: "bg-[#05668D]",
      href: "/academy",
    },
    {
      title: "Consulting",
      description:
        "Our training courses have been carefully designed to provide individuals and teams",
      buttonText: "Read More",
      buttonLink: "#",
      bgColor: "bg-[#02374B]",
      href: "/consulting",
    },
    {
      title: "Talent Matching",
      description:
        "Established product delivery teams often face challenges related to adoption",
      buttonText: "Read More",
      buttonLink: "#",
      bgColor: "bg-[#A97240]",
      href: "/talent-matching",
    },
  ],
};
