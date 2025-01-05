"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Expert {
  name: string;
  role: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Samuel Adesoga",
    role: "Founder & Managing Consultant",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Temitope Awere",
    role: "Partner Consultant",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function MeetExperts() {
  return (
    <div className="w-full bg-white">
      <div className="hidden sm:block container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="relative w-full max-w-lg mb-12">
            <div
              className="absolute inset-0 bg-[#F8ECE9] rounded-[32px] transform rotate-6"
              style={{ right: "-10%" }}
            />
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Our experts discussing strategy"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-primary text-[#161A1D] mb-8">
            Meet our people
          </h2>

          <p className="text-lg md:text-xl text-[#161A1D] font-secondary mb-10 max-w-2xl">
            Helping Organisations transform into a network of interdependent
            product teams across different business units into a network of
            interdependent.
          </p>

          <button className="bg-[#FF9F5A] text-white font-secondary px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#FF9F5A]/90 transition-colors">
            Let&apos;s get in touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="sm:hidden px-4 py-8">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-primary text-[#161A1D] mb-4">
            Meet our People
          </h2>

          <p className="text-base text-[#161A1D] font-secondary mb-6">
            Helping Organisations transform into a network of interdependent
            product teams across different business units into a network of
            interdependent.
          </p>

          <button className="bg-[#FF9F5A] text-white font-secondary px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#FF9F5A]/90 transition-colors mb-8">
            Let&apos;s get in touch
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="w-full space-y-4">
            {experts.map((expert, index) => (
              <div
                key={expert.name}
                className={`relative rounded-2xl overflow-hidden ${
                  index === 0 ? "bg-white" : "bg-[#F8ECE9]"
                }`}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-xl font-semibold text-white font-secondary">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-white/90 font-secondary">
                      {expert.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
