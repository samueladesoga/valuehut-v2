export interface OrderSummaryProps {
  subtotal: string;
  discountText: string;
  total: number;
  perPerson: string;
  isUk: boolean
}

export const orderSummary = {
  subtotal: "Oct 24 - Oct 25, 2024",
  discountText: "Add coupon",
  total: "£1,000.00",
  perPerson: "per person",
};
