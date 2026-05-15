export interface OrderSummaryProps {
  subtotal: number;
  total: number;
  quantity: number;
  isUk: boolean;
  discountPercent?: number;
  appliedCode?: string | null;
}
