import Image from "next/image";
import React from "react";

interface CheckoutCourseDetailsProps {
  title: string;
  image: string;
  date: string;
  time: string;
  classType: string;
  pricingRegion: string;
  isUk: boolean;
}

const CheckoutCourseDetails: React.FC<CheckoutCourseDetailsProps> = ({
  title,
  image,
  date,
  time,
  classType,
  pricingRegion,
  isUk,
}) => {
  const rows: [string, React.ReactNode][] = [
    ["Date", date],
    ["Time", time],
    ["Delivery", classType],
    [
      "Pricing region",
      <>
        {pricingRegion}
        <span className="block text-xs font-normal text-secondary">
          {isUk ? "Prices in GBP, plus 20% VAT" : "Prices in USD, no VAT"}
        </span>
      </>,
    ],
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Image src={image} alt="" className="w-14 h-14" width={60} height={60} />
        <h2 className="text-xl !leading-[27px] font-semibold text-main font-secondary">
          {title}
        </h2>
      </div>
      <dl className="flex flex-col gap-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 text-sm font-secondary">
            <dt className="text-secondary">{label}</dt>
            <dd className="font-medium text-main text-right">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CheckoutCourseDetails;
