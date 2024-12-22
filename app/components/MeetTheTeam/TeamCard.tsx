import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITeamCard {
  bgColor: string;
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  socialLinks: { icon: string; alt: string; url: string }[];
}

function TeamCard({
  bgColor,
  imageSrc,
  name,
  role,
  description,
  socialLinks,
}: ITeamCard) {
  return (
    <div
      className={`flex flex-col gap-8 md:gap-10 p-8 rounded-[20px] ${bgColor}`}
    >
      <div className="flex gap-4">
        <Image
          src={imageSrc}
          width={176}
          height={180}
          alt={`${name}'s photo`}
        />
        <div className="flex flex-col justify-between items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-primary font-medium text-main">
              {name}
            </h2>
            <h3 className="text-sm md:text-lg font-normal font-secondary text-secondary">
              {role}
            </h3>
          </div>
          <span className="flex gap-2">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-[#F5F5F5] cursor-pointer rounded-full p-2 hover:bg-[#f5f5f5ea] flex justify-center items-center"
              >
                <Link href={link.url || ""} target="_blank">
                  <Image
                    src={link.icon}
                    width={14}
                    height={12}
                    alt={link.alt}
                  />
                </Link>
              </div>
            ))}
          </span>
        </div>
      </div>
      <p className="text-sm font-normal font-secondary text-main">
        {description}
      </p>
    </div>
  );
}

export default TeamCard;
