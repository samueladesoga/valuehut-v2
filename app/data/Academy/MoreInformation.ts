export interface IMoreInformation {
  text: string;
  isLink?: boolean;
  href?: string;
}

export const moreInformationData: IMoreInformation[] = [
  {
    text: "Mode of delivery is either In-Person or Virtual, view course dates for more details.",
  },
  {
    text: "The price for the class is dependent on your home address.",
  },
  {
    text: "Attendees are able to claim 7 PDU credits from the Project Management Institute (PMI)  for each day of training you attend with ValueHut Consulting.",
  },
  {
    text: "Click here for more reasons to train with ValueHut Consulting",
    isLink: true,
    href: "/blog/a-case-for-agile-and-scrum-training-with-valuehut",
  },
];
