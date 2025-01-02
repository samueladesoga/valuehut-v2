import { OrderSummaryProps } from "@/data/Academy/OrderSummary";
import React from "react";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discountText,
  total,
  perPerson,
}) => {
  return (
    <div className="w-full sm:w-[486px] sm:p-8 bg-white sm:rounded-xl p-4">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl !leading-[27px] font-semibold font-secondary text-[#141834]">
          Order summary
        </h1>

        <div className="flex justify-between">
          <h4 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Subtotal
          </h4>
          <p className="text-sm font-medium text-main font-secondary">
            {subtotal}
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="text-sm font-medium text-main opacity-[70%] font-secondary">
            Discount
          </h4>
          <a
            href="#"
            className="text-sm font-medium text-[#05668D] font-secondary"
          >
            {discountText}
          </a>
        </div>

        <div className="flex justify-between">
          <h1 className="text-[26px] leading-[39px] font-semibold text-main opacity-[70%] font-secondary">
            Order total
          </h1>
          <p className="text-[26px] leading-[39px] font-semibold text-main font-secondary">
            £{total}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-sm font-medium text-secondary font-secondary">
          {perPerson}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
