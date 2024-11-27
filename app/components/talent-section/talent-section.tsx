"use client";

import React from "react";
import Image from "next/image";

interface Talent {
  id: number;
  name: string;
  role: string;
  image: string;
}

const talents: Talent[] = [
  {
    id: 1,
    name: "Monika Norton",
    role: "Delivery Manager",
    image: "/talentmatching/talent1.png",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Team Lead",
    image: "/talentmatching/talent6.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Developer",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 4,
    name: "Chris Brown",
    role: "Designer",
    image: "/talentmatching/talent4.png",
  },
  {
    id: 5,
    name: "Alex Johnson",
    role: "QA Engineer",
    image: "/talentmatching/talent5.png",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Scrum Master",
    image: "/talentmatching/talent6.png",
  },
  {
    id: 7,
    name: "Liam Jones",
    role: "Product Manager",
    image: "/talentmatching/talent2.png",
  },
  {
    id: 8,
    name: "Olivia Garcia",
    role: "DevOps Engineer",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    role: "UX Researcher",
    image: "/talentmatching/talent9.png",
  },
  {
    id: 10,
    name: "Ava Robinson",
    role: "Backend Developer",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 11,
    name: "Isabella Lee",
    role: "Frontend Developer",
    image: "/talentmatching/talent11.png",
  },
  {
    id: 12,
    name: "Mia Perez",
    role: "Tech Lead",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 13,
    name: "Elijah Clark",
    role: "Software Engineer",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 14,
    name: "Lucas Rodriguez",
    role: "Business Analyst",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 15,
    name: "James Anderson",
    role: "Data Scientist",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 16,
    name: "Henry Thomas",
    role: "AI Specialist",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 17,
    name: "Emily Davis",
    role: "Marketing Lead",
    image: "/talentmatching/talent3.png",
  },
  {
    id: 18,
    name: "Charlotte White",
    role: "HR Manager",
    image: "/talentmatching/talent3.png",
  },
];

export default function TalentSection() {
  return (
    <div className=" py-16 relative">
      <div className="container mx-auto max-sm:px-4">
        <div className="flex flex-col-reverse  lg:flex-row lg:items-center lg:justify-between">
          {/* <div className="max-w-[50%] flex  items-center">
          

            <h2 className="text-2xl font-secondary font-semibold text-[#161A1D] mb-6 lg:hidden">
              Available talents
            </h2>

            <div className="relative grid grid-cols-6 gap-8 w-full ">
              {talents.slice(0, 18).map((talent) => (
                <div key={talent.id} className="cursor-pointer">
                  <Image
                    src={talent.image}
                    alt={talent.name || "Avatar"}
                    width={80}
                    height={80}
                    className="rounded-full bg-cover w-[58px] h-[58px]"
                  />
                </div>
              ))}
            </div>
            <div className=" absolute bottom-[-25px]   z-40 text-center mb-6">
              <Image
                src="/talentmatching/avaible.png"
                alt="Top Talent Display"
                width={600}
                height={600}
                className="mx-auto w-[304px] h-[399px]"
              />
            </div>
          </div> */}
          <div className="relative max-sm:mt-20">
            <div className="absolute top-[-90px] w-[306px] h-[399px] left-1/2 transform -translate-x-1/2 z-40 text-center">
              <Image
                src="/talentmatching/avaible.png"
                alt="Top Talent Display"
                width={600}
                height={600}
                className="mx-auto w-full h-full"
              />
            </div>

            <div className="relative grid grid-cols-6 gap-5 w-auto">
              {talents.slice(0, 18).map((talent) => (
                <div key={talent.id} className="cursor-pointer w-[53px] h-[53px]">
                  <Image
                    src={talent.image}
                    alt={talent.name || "Avatar"}
                    width={80}
                    height={80}
                    className="rounded-full bg-cover w-[53px] h-[53px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:max-w-[50%]">
            <h2 className="text-[47px] leading-[61px] lg:text-5xl xl:text-9xl font-medium font-primary mb-4">
              We help you hire top-notch talent
            </h2>
            <p className="text-lg lg:text-xl text-main font-normal font-secondary mb-8">
              Our talent matching service provides no-frills Professional Scrum
              Masters; individuals who successfully build self-managing teams
              that deliver value to their customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
