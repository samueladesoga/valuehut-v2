export interface ISteps {
  number: string;
  description: string;
  bgColor: string;
}

export const Steps: ISteps[] = [
  {
    number: "01",
    description:
      "Meet with the Hiring Manager to understand the business and team needs.",
    bgColor: "bg-[#C5D8E0]",
  },
  {
    number: "02",
    description: "Draft a Job description and get client approval.",
    bgColor: "bg-[#C4EBE3]",
  },
  {
    number: "03",
    description: "Present relevant profiles with 7 working days.",
    bgColor: "bg-[#F5E5D7]",
  },
];
