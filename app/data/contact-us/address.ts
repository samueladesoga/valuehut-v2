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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.219070052229!2d-0.12775868368950137!3d51.50735187963644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b322c0e9f21%3A0x6819b1c7b2c49d3b!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1690102034123!5m2!1sen!2s",
  },
  {
    phone: "+234(0)8143021499",
    state: "Nigeria Office",
    address: "22 Glover Rd, Ikoyi, Lagos",
    email: "info@valuehut.co",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.134305231469!2d3.3792053834514674!3d6.524379357583887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b018094d821%3A0xbcd4c2e7a93e55e!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1690102034123!5m2!1sen!2s",
  },
];
