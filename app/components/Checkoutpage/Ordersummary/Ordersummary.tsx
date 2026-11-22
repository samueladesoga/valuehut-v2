import React from "react";
import { CheckoutTotals, formatMoney } from "@/utils/checkout";

interface OrderSummaryProps {
  totals: CheckoutTotals;
  isUk: boolean;
  appliedCode: string | null;
  discountSlot?: React.ReactNode;
}

const Row = ({
  label,
  value,
  className = "text-main",
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex justify-between gap-4 text-sm font-secondary ${className}`}>
    <dt>{label}</dt>
    <dd className="font-medium text-right">{value}</dd>
  </div>
);

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totals,
  isUk,
  appliedCode,
  discountSlot,
}) => {
  const money = (n: number) => formatMoney(n, isUk);
  const attendees = `${totals.quantity} attendee${totals.quantity === 1 ? "" : "s"}`;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl !leading-[27px] font-semibold font-secondary text-[#141834]">
        Order summary
      </h2>
      <dl className="flex flex-col gap-3">
        <Row
          label={`${money(totals.unitPrice)} × ${attendees}`}
          value={money(totals.subtotal)}
        />
        {totals.discountPercent > 0 && (
          <Row
            className="text-green-800"
            label={`Discount${appliedCode ? ` (${appliedCode})` : ""} · ${totals.discountPercent}% off`}
            value={`−${money(totals.discountAmount)}`}
          />
        )}
        <Row
          label={isUk ? "VAT (20%)" : "VAT"}
          value={isUk ? money(totals.vat) : "Not applicable"}
        />
      </dl>
      {discountSlot}
      <div className="flex justify-between items-baseline border-t border-[#E5E5E5] pt-4">
        <span className="text-lg font-semibold font-secondary text-main">Total</span>
        <span className="text-[26px] leading-[32px] font-semibold font-secondary text-main">
          {money(totals.total)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
