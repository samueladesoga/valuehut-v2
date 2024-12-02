import Image from "next/image";
import React from "react";
import { moreInformationData } from "@/data/Academy/MoreInformation";

const MoreInformation: React.FC = () => {
  return (
    <>
      <h2 className="text-6xl  font-medium font-primary text-main">
        More information
      </h2>
      <ul className="flex flex-col gap-2 mt-5">
        {moreInformationData.map((item, index) => (
          <li
            key={index}
            className="text-sm text-body font-secondary font-medium flex items-center gap-2"
          >
            <Image
              src="/greater.svg"
              width={24}
              height={24}
              alt="icon"
              className="w-3 h-3 object-contain"
            />
            {item.isLink ? (
              <a
                href={item.href}
                className="underline hover:text-[#497183]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoreInformation;
