import React from "react";
import ClientLogosSection from "@/components/Homepage/ClientLogosSection/ClientLogosSection";
import { getClientLogos } from "@/lib/api";

const ClientLogosSectionWrapper = async () => {
  const { logos } = await getClientLogos();
  return <ClientLogosSection logos={logos} />;
};

export default ClientLogosSectionWrapper;
