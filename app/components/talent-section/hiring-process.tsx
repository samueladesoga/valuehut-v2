import { ISteps, Steps } from "@/data/talent-matching/Steps";
import Button from "../Button/Button";

export default function HiringProcess() {


  return (
    <div className="container mx-auto  p-4 lg:p-0 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className=" leading-[61px] text-[47px] lg:text-5xl xl:text-9xl font-primary font-medium text-main mb-6">
            How does our hiring process work?
          </h2>

          <Button
            bgColor="fill-brand-secondary"
            size="medium"
            rounded="full"
            className="mt-8 "
          >
            Get more information
          </Button>
        </div>

        <div className="lg:w-1/3 space-y-4">
          {Steps.map((step:ISteps) => (
            <div key={step.number} className={`${step.bgColor} rounded-xl p-6`}>
              <div className="text-[46px] leading-[32.2px] font-primary font-extralight text-main  mb-10 xl:mb-32">
                {step.number}
              </div>
              <p className="text-lg text-main font-secondary font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
