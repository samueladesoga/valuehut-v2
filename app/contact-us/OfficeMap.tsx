"use client";

import React, { useState } from "react";

export const OfficeMap: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState<"uk" | "nigeria">("uk");

  const officeMaps = {
    uk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.219070052229!2d-0.12775868368950137!3d51.50735187963644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b322c0e9f21%3A0x6819b1c7b2c49d3b!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1690102034123!5m2!1sen!2s",
    nigeria:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.134305231469!2d3.3792053834514674!3d6.524379357583887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b018094d821%3A0xbcd4c2e7a93e55e!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1690102034123!5m2!1sen!2s",
  };

  return (
    <div className="container mx-auto  ">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveOffice("uk")}
          className={`py-2 px-4 rounded-full ${
            activeOffice === "uk"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-800 border border-black"
          }`}
        >
          UK Office
        </button>
        <button
          onClick={() => setActiveOffice("nigeria")}
          className={`py-2 px-4 rounded-full font-secondary  ${
            activeOffice === "nigeria"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-800 border border-black"
          }`}
        >
          Nigeria Office
        </button>
      </div>

      <div className="relative w-full overflow-hidden px-1 lg:h-[500px] h-[370px] sm:h-[361px]">
        <iframe
          src={officeMaps[activeOffice]}
          width="100%"
          height="100%"
          className="rounded-[12px] border-[1px]"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
