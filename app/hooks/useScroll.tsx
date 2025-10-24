"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

const useScroll = <T extends HTMLElement>(options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options },
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, isClient]);

  return [ref, isIntersecting] as const;
};

export default useScroll;
