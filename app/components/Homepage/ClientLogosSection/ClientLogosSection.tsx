import React from "react";
import { clientLogos, Logo } from "./../../../data/Home/clientLogos";

const ClientLogosSection = () => {
  return (
    <div className="client-logos-container text-center py-12">
      <p className="text-lg font-semibold mb-6">
        We are proud of working with the following clients
      </p>
      <div className="logos-wrapper flex justify-center items-center gap-8">
        {clientLogos.map((logo: Logo) => (
          <div key={logo.id} className="logo-item">
            <img
              src={logo.url}
              alt={`Logo of ${logo.name}`}
              className="h-12 opacity-75 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogosSection;
