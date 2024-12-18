export interface IAddressData {
  phone: string;
  state: string;
  address: string;
  email: string;
  mapUrl: string;
}

export const addressData: IAddressData[] = [
  {
    phone: "+44(0)7946713054",
    state: "UK Office",
    address: "North Westgate House, Harlow. CM20 1YS",
    email: "info@valuehut.co",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9875.726774295277!2d0.08191492476874897!3d51.77085589811162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d89c00fc0bcc4b%3A0x1ea87cb26bc6824b!2sHarlow%20CM20%201YS!5e0!3m2!1sen!2suk!4v1734555161985!5m2!1sen!2suk",
  },
  {
    phone: "+234(0)8143021499",
    state: "Nigeria Office",
    address: "22 Glover Rd, Ikoyi, Lagos",
    email: "info@valuehut.co",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5223041111867!2d3.4277628114152754!3d6.455306393509238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c606744d3b%3A0x1c1aa9f88d750389!2s22%20Glover%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1734555229484!5m2!1sen!2suk",
  },
];
