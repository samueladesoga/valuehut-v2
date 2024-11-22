"use client";

import React, { useState } from "react";
import { addressData } from "./../../../data/contact-us/address";

export const OfficeMap: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState("UK Office");

  const activeMap = addressData.find(
    (office) => office.state === activeOffice
  )?.mapUrl;

  return (
    <div className="container md:pb-6 sm:py-0">
      <div className="flex space-x-4 mt-10 sm:mt-0 max-sm:px-4 mb-6">
        {addressData.map((office) => (
          <button
            key={office.state}
            onClick={() => setActiveOffice(office.state)}
            className={`py-2 px-4 rounded-full ${
              activeOffice === office.state
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray-800 border border-black"
            }`}
          >
            {office.state}
          </button>
        ))}
      </div>

      <div className="relative w-full overflow-hidden px-1 lg:h-[500px] h-[370px] sm:h-[361px]">
        {activeMap ? (
          <iframe
            src={activeMap}
            width="100%"
            height="100%"
            className="rounded-[12px] border-[1px]"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        ) : (
          <p className="text-center text-gray-500">
            Map for the selected office is not available.
          </p>
        )}
      </div>
    </div>
  );
};
