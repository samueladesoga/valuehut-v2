import Image from "next/image";
import {
  benefitIconMapping,
  defaultIcon,
} from "@/data/Academy/AdditionalBenefits";

interface IAdditionalBenefit {
  text: string;
  index: number;
}

export const AdditionalBenefitCard = ({ text, index }: IAdditionalBenefit) => {
  const icon = benefitIconMapping[index] || defaultIcon;

  return (
    <div className="w-full sm:w-1/2 h-[328px] sm:h-[328px] bg-white rounded-[20px] p-4 sm:p-8 flex flex-col justify-between">
      <Image
        src={icon}
        alt="icon"
        width={50}
        height={50}
        className="bg-contain"
      />
      <p className="text-lg font-secondary font-medium text-main">{text}</p>
    </div>
  );
};
