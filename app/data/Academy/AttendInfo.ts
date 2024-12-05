export interface IAttendInfo {
  number: string;
  description: string;
  bgColor: string;
}

export const AttendInfo: IAttendInfo[] = [
  {
    number: "01",
    description:
      "Practitioners that are interested in starting a career as a Scrum Master",
    bgColor: "bg-[#C5D8E0]",
  },
  {
    number: "02",
    description:
      "Scrum Masters, Agile/Scrum Coaches and consultant looking to improve their use of Scrum",
    bgColor: "bg-[#C4EBE3]",
  },
  {
    number: "03",
    description: "Anyone involved in product delivery using Scrum",
    bgColor: "bg-[#F5E5D7]",
  },
];
