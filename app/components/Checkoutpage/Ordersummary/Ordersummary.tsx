import { OrderSummaryProps } from "@/data/Academy/OrderSummary";
import React from "react";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  total,
  quantity,
  isUk,
  discountPercent = 0,
  appliedCode,
}) => {
  const currency = isUk ? "£" : "$";
  const discountAmount = total * (discountPercent / 100);
  const discountedTotal = total - discountAmount;
  const vatAmount = isUk ? discountedTotal * 0.2 : 0;
  const orderTotal = discountedTotal + vatAmount;

  return (
    <div className="w-full sm:w-[486px] sm:p-8 bg-white sm:rounded-xl p-4">
      <h1 className="text-xl !leading-[27px] font-semibold font-secondary text-[#141834] pb-6">
        Order summary
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm font-medium text-main opacity-[70%] font-secondary">
              Subtotal
            </h4>
            <p className="text-[26px] leading-[25px] font-semibold text-main font-secondary">
              {currency}{total}
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-sm font-medium text-secondary font-secondary">
              {currency}{subtotal} per person
            </p>
          </div>
        </div>

        {discountPercent > 0 && (
          <div className="flex justify-between">
            <h4 className="text-sm font-medium text-green-700 font-secondary">
              Discount {appliedCode ? `(${appliedCode})` : ""} {discountPercent}% off
            </h4>
            <p className="text-sm font-semibold text-green-700 font-secondary">
              -{currency}{discountAmount.toFixed(2)}
            </p>
          </div>
        )}

        <div className="flex justify-between">
          <h4 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            VAT
          </h4>
          <span className="text-sm font-medium text-[#05668D] font-secondary">
            {isUk ? `${currency}${vatAmount.toFixed(2)}` : "Not applicable"}
          </span>
        </div>

        <div className="flex justify-between">
          <h1 className="text-[26px] leading-[39px] font-semibold text-main opacity-[70%] font-secondary">
            Order total
          </h1>
          <p className="text-[26px] leading-[39px] font-semibold text-main font-secondary">
            {currency}{orderTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
