export interface ICountry {
  code: string;
  name: string;
}

export interface IRegisterModal {
  image: string;
  title: string;
  date: string;
  countries: ICountry[];
}

export const RegisterModalData: IRegisterModal = {
  image: "/images/psm.png",
  title: "Professional Scrum Master",
  date: "Oct 24 - Oct 25, 2024",
  countries: [
    { code: "UK", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "IN", name: "India" },
    { code: "AU", name: "Australia" },
    { code: "CA", name: "Canada" },
  ],
};
