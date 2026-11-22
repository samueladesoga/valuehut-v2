import React from "react";

interface CheckoutStepProps {
  id: string;
  step: number;
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

const CheckoutStep: React.FC<CheckoutStepProps> = ({
  id,
  step,
  title,
  description,
  children,
}) => (
  <section aria-labelledby={`${id}-heading`} id={id} className="scroll-mt-32">
    <div className="flex items-start gap-3 pb-5">
      <span
        aria-hidden="true"
        className="flex-none w-8 h-8 rounded-full bg-[#141834] text-white font-secondary font-semibold text-sm flex items-center justify-center"
      >
        {step}
      </span>
      <div className="flex flex-col gap-1 pt-[2px]">
        <h2
          id={`${id}-heading`}
          className="text-xl !leading-[27px] font-semibold font-secondary text-[#141834]"
        >
          <span className="sr-only">Step {step}: </span>
          {title}
        </h2>
        {description && (
          <p className="text-sm !leading-[20px] font-secondary text-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
    <div className="sm:pl-11">{children}</div>
  </section>
);

export default CheckoutStep;
