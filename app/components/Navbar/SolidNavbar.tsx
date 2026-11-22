"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Lets a page ask for the solid (white) navbar regardless of its URL — needed
 * for pages like the 404, which can appear at any path and have no dark hero.
 */
const SolidNavbarContext = createContext<{
  solid: boolean;
  setSolid: (solid: boolean) => void;
}>({ solid: false, setSolid: () => {} });

export function SolidNavbarProvider({ children }: { children: React.ReactNode }) {
  const [solid, setSolid] = useState(false);
  return (
    <SolidNavbarContext.Provider value={{ solid, setSolid }}>
      {children}
    </SolidNavbarContext.Provider>
  );
}

export const useSolidNavbar = () => useContext(SolidNavbarContext).solid;

/** Render on a page to show the solid navbar while that page is mounted. */
export function SolidNavbar() {
  const { setSolid } = useContext(SolidNavbarContext);
  useEffect(() => {
    setSolid(true);
    return () => setSolid(false);
  }, [setSolid]);
  return null;
}
