"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { StaticImageData } from "next/image";

interface NavbarProps {
  logo: StaticImageData;
  navLinks?: Array<{
    label: string;
    href: string;
    subLinks?: Array<{ label: string; href: string }>;
  }>;
}

const Navbar = ({ logo, navLinks = [] }: NavbarProps) => {
  return (
    <div className="fixed w-full sm:mt-3 z-50 ">
      <nav className=" sm:mx-20 bg-[#707070]/10 backdrop-blur-3xl sm:rounded-xl  text-white py-4 shadow-md">
        <div className="relative z-10 flex items-center justify-between  w-full  px-6 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={118}
              height={31}
              className="h-auto w-auto"
            />
          </Link>

          <div className="text-xs text-accentmain hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) =>
              link.subLinks ? (
                <div key={index} className="relative group">
                  <button className="flex items-center hover:text-gray-300">
                    {link.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 hidden w-40 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-gray-300"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <Link href="/contact">
            <button className="bg-fill-brand-secondary py-2 px-5 rounded-lg text-main hidden md:inline-flex">
              Book a free call
            </button>
          </Link>

          <button className="md:hidden">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
