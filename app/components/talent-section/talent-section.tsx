"use client";

import React, { useState, useRef } from "react";
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
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Team Lead",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Developer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    name: "Chris Brown",
    role: "Designer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    name: "Alex Johnson",
    role: "QA Engineer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Scrum Master",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 7,
    name: "Liam Jones",
    role: "Product Manager",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 8,
    name: "Olivia Garcia",
    role: "DevOps Engineer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    role: "UX Researcher",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 10,
    name: "Ava Robinson",
    role: "Backend Developer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 11,
    name: "Isabella Lee",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 12,
    name: "Mia Perez",
    role: "Tech Lead",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 13,
    name: "Elijah Clark",
    role: "Software Engineer",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 14,
    name: "Lucas Rodriguez",
    role: "Business Analyst",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 15,
    name: "James Anderson",
    role: "Data Scientist",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 16,
    name: "Henry Thomas",
    role: "AI Specialist",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 17,
    name: "Emily Davis",
    role: "Marketing Lead",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 18,
    name: "Charlotte White",
    role: "HR Manager",
    image: "/placeholder.svg?height=48&width=48",
  },
];

export default function TalentSection() {
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAvatarClick = (talent: Talent, event: React.MouseEvent) => {
    const avatar = event.currentTarget as HTMLDivElement;
    const rect = avatar.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    setModalPosition({
      top: rect.top - (containerRect?.top || 0) - 120,
      left: rect.left - (containerRect?.left || 0),
    });
    setSelectedTalent(talent);
  };

  const handleCloseModal = () => {
    setSelectedTalent(null);
    setModalPosition(null);
  };

  return (
    <div className="bg-[#F5F5F5] py-16 relative">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 relative mb-12 lg:mb-0">
            <h2 className="text-2xl font-secondary font-semibold text-[#161A1D] mb-6 lg:hidden">
              Available talents
            </h2>

            <div className="grid grid-cols-6 gap-4 relative">
              {talents.slice(0, 18).map((talent) => (
                <div
                  key={talent.id}
                  className="cursor-pointer"
                  onClick={(event) => handleAvatarClick(talent, event)}
                >
                  <Image
                    src={talent.image}
                    alt={talent.name || "Avatar"}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>

            {/* Modal */}
            {selectedTalent && modalPosition && (
              <div
                className="absolute bg-white rounded-lg p-4 shadow-lg z-50"
                style={{
                  top: modalPosition.top,
                  left: modalPosition.left,
                  width: "200px",
                  transform: "translate(-50%, -10px)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <Image
                    src={selectedTalent.image}
                    alt={selectedTalent.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="font-semibold text-lg text-[#161A1D] mt-2">
                    {selectedTalent.name}
                  </h3>
                  <p className="text-gray-600">{selectedTalent.role}</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="  text-[47px]  leading-[61px] lg:text-5xl xl:text-9xl font-medium font-primary  mb-6">
              We help you hire top-notch talent
            </h2>
            <p className="text-lg lg:text-xl text-main  font-normal font-secondary mb-8">
              Our talent matching service would provide you with no-frills
              Professional Scrum Masters; individuals that have successfully
              built self-managing teams that are able to deliver value to their
              customers.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for closing modal */}
      {selectedTalent && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={handleCloseModal}
        ></div>
      )}
    </div>
  );
}
