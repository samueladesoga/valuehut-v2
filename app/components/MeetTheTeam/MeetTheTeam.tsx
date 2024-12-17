import Image from "next/image";
import React from "react";

function MeetTheTeam() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="bg-[#E5DFD9] flex flex-col gap-8 md:gap-10 p-8 rounded-[20px]">
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src={"/images/Coach-02.png"}
              width={176}
              height={180}
              alt="coach"
            />
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-primary font-medium text-main">
                  Nigel Thurlow
                </h2>
                <h3 className="text-sm md:text-lg font-normal font-secondary text-secondary">
                  Advisor
                </h3>
              </div>
              <span className="flex gap-2">
                <div className="bg-cover w-8 h-8  bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/twitter.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="bg-cover w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/likdin.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/share.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                    className="bg-cover"
                  />
                </div>
              </span>
            </div>
          </div>
          <p className="text-sm font-normal font-secondary text-main">
            Sam is our Principal Coach and Lead Trainer at ValueHut Consulting;
            He is an agnostic Enterprise Agile Coach and Practitioner, a
            Professional Scrum Trainer with Scrum.org. In the last 20years, Sam
            has supported individuals, teams and Organisations to deliver value
            using Agile Frameworks and Practices; ultimately developing the
            mindset required to thrive in Volatile, Uncertain, Complex and
            Ambiguous (VUCA) business environment.
          </p>
        </div>
        <div className="bg-[#E5DFD9] flex flex-col gap-8 md:gap-10 p-8 rounded-[20px]">
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src={"/images/Coach-02.png"}
              width={176}
              height={180}
              alt="coach"
            />
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-primary font-medium text-main">
                  Samuel Adesoga
                </h2>
                <h3 className="text-sm md:text-lg font-normal font-secondary text-secondary">
                  Managing Partner
                </h3>
              </div>
              <span className="flex gap-2">
                <div className="bg-cover w-8 h-8  bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/twitter.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="bg-cover w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/likdin.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/share.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                    className="bg-cover"
                  />
                </div>
              </span>
            </div>
          </div>
          <p className="text-sm font-normal font-secondary text-main">
            Sam is our Principal Coach and Lead Trainer at ValueHut Consulting;
            He is an agnostic Enterprise Agile Coach and Practitioner, a
            Professional Scrum Trainer with Scrum.org. In the last 20years, Sam
            has supported individuals, teams and Organisations to deliver value
            using Agile Frameworks and Practices; ultimately developing the
            mindset required to thrive in Volatile, Uncertain, Complex and
            Ambiguous (VUCA) business environment.
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="bg-[#A5E0E7] flex flex-col gap-8 md:gap-10 p-8 rounded-[20px]">
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src={"/images/Coach-01.png"}
              width={176}
              height={180}
              alt="coach"
            />
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-primary font-medium text-main">
                  Samuel Adesoga
                </h2>
                <h3 className="text-sm md:text-lg font-normal font-secondary text-secondary">
                  Partner Coach
                </h3>
              </div>
              <span className="flex gap-2">
                <div className="bg-cover w-8 h-8  bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/twitter.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="bg-cover w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/likdin.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/share.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                    className="bg-cover"
                  />
                </div>
              </span>
            </div>
          </div>
          <p className="text-sm font-normal font-secondary text-main">
            Temitope is a Partner Coach and Trainer at ValueHut Consulting; Temi
            is an experienced Lean-Agile Practitioner, Accredited Kanban
            Trainer, ICAgile Instructor Agile Coach, Professional Scrum Master,
            Agile Project Manager, SAFe Program consultant and Kanban Management
            Professional with over 10 years’ experience empowering and coaching
            development teams and organizations in the adoption agile principles
            and improving the flow of customer value through scalable,
            maintainable software solutions.
          </p>
        </div>
        <div className="bg-[#E5DFD9] flex flex-col gap-8 md:gap-10 p-8 rounded-[20px]">
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src={"/images/Coach-02.png"}
              width={176}
              height={180}
              alt="coach"
            />
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-primary font-medium text-main">
                  Temitope Dada
                </h2>
                <h3 className="text-sm md:text-lg font-normal font-secondary text-secondary">
                  Executive Assistant
                </h3>
              </div>
              <span className="flex gap-2">
                <div className="bg-cover w-8 h-8  bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/twitter.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="bg-cover w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/likdin.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                  />
                </div>
                <div className="w-8 h-8 bg-[#F5F5F5] rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center">
                  <Image
                    src={"/icons/share.svg"}
                    width={14}
                    height={12}
                    alt="twitter"
                    className="bg-cover"
                  />
                </div>
              </span>
            </div>
          </div>
          <p className="text-sm font-normal font-secondary text-main">
            Sam is our Principal Coach and Lead Trainer at ValueHut Consulting;
            He is an agnostic Enterprise Agile Coach and Practitioner, a
            Professional Scrum Trainer with Scrum.org. In the last 20years, Sam
            has supported individuals, teams and Organisations to deliver value
            using Agile Frameworks and Practices; ultimately developing the
            mindset required to thrive in Volatile, Uncertain, Complex and
            Ambiguous (VUCA) business environment.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MeetTheTeam;
