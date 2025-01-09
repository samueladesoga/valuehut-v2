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
  title: "Creating better ways of working and leading.",
  subtitle:
    "We help organisations navigate through the complexities of modern product development.",
  statistics: [
    { value: "100+", label: "Years of collective experience" },
    { value: "3x", label: "More Effective Teams" },
  ],
  cards: [
    {
      title: "Academy",
      description: `Empowering professionals with cutting-edge skills and transformative learning experiences, 
        providing training courses that equip your teams with the dynamic capabilities needed to thrive 
        in rapidly evolving business landscapes.`,
      buttonText: "Explore Courses",
      buttonLink: "#",
      bgColor: "bg-[#05668D]",
      href: "/academy",
    },
    {
      title: "Consulting",
      description: `Delivering expert strategic guidance that helps organisations navigate complex business challenges, 
        offering innovative solutions and actionable insights that drive operational excellence and strategic 
        transformation.
`,
      buttonText: "Read More",
      buttonLink: "#",
      bgColor: "bg-[#02374B]",
      href: "/consulting",
    },
    {
      title: "Talent Matching",
      description: `Connecting organisations with exceptional professionals who can drive innovation, efficiency, and 
        sustainable growth, ensuring that businesses are paired with top-tier agile talent perfectly aligned 
        with their strategic objectives.`,
      buttonText: "Read More",
      buttonLink: "#",
      bgColor: "bg-[#A97240]",
      href: "/talent-matching",
    },
  ],
};
