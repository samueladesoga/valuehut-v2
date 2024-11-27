import Button from "../Button/Button";

export default function HiringProcess() {
  const steps = [
    {
      number: "01",
      description:
        "Meet with the Hiring Manager to understand the business and team needs.",
      bgColor: "bg-[#C5D8E0]",
    },
    {
      number: "02",
      description: "Draft a Job description and get client approval.",
      bgColor: "bg-[#C4EBE3]",
    },
    {
      number: "03",
      description: "Present relevant profiles with 7 working days.",
      bgColor: "bg-[#F5E5D7]",
    },
  ];

  return (
    <div className="container mx-auto  p-4 lg:p-0 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className=" leading-[61px] text-[47px] lg:text-5xl xl:text-9xl font-primary font-medium text-main mb-6">
            How does our hiring process work?
          </h2>
          {/* <button className="bg-[#FF9F5A] text-white font-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-[#FF9F5A]/90 w-fit">
              Get more information
            </button> */}

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
          {steps.map((step) => (
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
