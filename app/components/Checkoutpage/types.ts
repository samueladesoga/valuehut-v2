export interface CheckoutDetails {
  fullName: string;
  email: string;
  numberOfAttendees: number;
  // Invoice-only fields
  company: string;
  billingContact: string;
  poNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  billingCountry: string;
  phone: string;
  sendToSomeoneElse: boolean;
  invoiceEmail: string;
}

export type CheckoutField = keyof CheckoutDetails | "paymentMethod";

export type FieldErrors = Partial<Record<CheckoutField, string>>;

export type PaymentMethodId = "card" | "invoice";

export type UpdateDetail = <K extends keyof CheckoutDetails>(
  name: K,
  value: CheckoutDetails[K]
) => void;
