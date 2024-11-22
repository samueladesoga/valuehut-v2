export interface IAddressData {
  phone: string;
  state: string;
  address: string;
  email: string;
}
export const addressData: IAddressData[] = [
  {
    phone: "+44 123456789",
    state: "UK Office",
    address: "123 Main Street, London, UK",
    email: "ukoffice@example.com",
  },
  {
    phone: "+234 987654321",
    state: "Nigeria office",
    address: "456 Broad Street, Lagos, Nigeria",
    email: "nigeriaoffice@example.com",
  },
];