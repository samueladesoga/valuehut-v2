"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  logoX: StaticImageData;
  logoY: StaticImageData;
  menu: StaticImageData;
  navLinks?: Array<{
    badge?: string;
    label: string;
    href: string;
    subLinks?: Array<{ label: string; href: string }>;
  }>;
  isVariation2?: boolean;
}

const Navbar = ({ logoX, logoY, menu, navLinks = [] }: NavbarProps) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const closeDropdown = () => setOpenDropdownIndex(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const pathname = usePathname();

  const isWhiteBackgroundRoutes = ["/about-us", "/faqs", "/blog", "/checkout"];

  const isDynamicWhiteBackgroundRoute =
    pathname.startsWith("/academy/") && pathname.includes("/details/");

  const isWhiteHero = pathname.startsWith("/blog/");

  const logo =
    isWhiteBackgroundRoutes.includes(pathname) ||
    isDynamicWhiteBackgroundRoute ||
    scrolled
      ? logoY
      : isWhiteHero
        ? logoY
        : logoX;

  const navbarStyle =
    isWhiteBackgroundRoutes.includes(pathname) ||
    isDynamicWhiteBackgroundRoute ||
    scrolled
      ? "bg-white text-black shadow-md"
      : isWhiteHero
        ? "bg-white text-black shadow-md"
        : "bg-[#707070]/10 backdrop-blur-3xl text-white";

  const isNavbarWhite =
    isWhiteBackgroundRoutes.includes(pathname) ||
    isDynamicWhiteBackgroundRoute ||
    scrolled ||
    isWhiteHero;

  return (
    <div className={`fixed w-full md:pt-3 z-50`}>
      <nav
        className={`container py-4 ${navbarStyle} md:rounded-xl overflow-visible`}
      >
        <div className="relative z-10 flex items-center justify-between w-full px-6 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={118} height={31} className="" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-xs">
            {navLinks.map((link, index) =>
              link.subLinks ? (
                <div
                  key={index}
                  className="relative"
                  ref={openDropdownIndex === index ? dropdownRef : null}
                >
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center hover:text-gray-300 focus:outline-none"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg">
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={closeDropdown}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="relative flex items-center hover:text-gray-300"
                >
                  {link.label}

                  {link?.badge && (
                    <span
                      className={`ml-1 flex items-center justify-center px-1 text-[10px] font-semibold rounded-full ${
                        isNavbarWhite
                          ? "bg-[#E6E4F3] text-main"
                          : "bg-white text-main"
                      } min-w-[30px] h-[15px]`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              ),
            )}
          </div>

          <Link
            target="_blank"
            href="https://calendly.com/samueladesoga/valuehut-consulting"
          >
            <Button
              bgColor="fill-brand-secondary"
              className="py-2 px-5 text-xs font-medium text-main hidden lg:flex"
            >
              Book a free call
            </Button>
          </Link>

          <button
            className={`lg:hidden flex items-center focus:outline-none ${
              isNavbarWhite ? "text-main" : "text-accentMain"
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <div className="flex justify-center gap-[6px] items-center">
                <h4
                  className={`text-[12px] leading-[22px] font-bold font-secondary uppercase ${
                    isNavbarWhite ? "text-main" : "text-accentMain"
                  }`}
                >
                  menu
                </h4>
                <X
                  className={`h-3.5 w-3.5 ${
                    isNavbarWhite ? "text-main" : "text-accentMain"
                  }`}
                />
              </div>
            ) : (
              <div className="flex justify-center gap-[6px] items-center">
                <h4
                  className={`text-[12px] leading-[22px] font-bold font-secondary uppercase ${
                    isNavbarWhite ? "text-main" : "text-accentMain"
                  }`}
                >
                  menu
                </h4>
                <Image
                  src={menu}
                  alt="menu"
                  width={200}
                  height={200}
                  className={`h-auto w-auto ${
                    isNavbarWhite ? "filter invert" : ""
                  }`}
                />
              </div>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#707070]/10 backdrop-blur-3xl p-6 absolute inset-x-0 top-full">
            <ul className="flex flex-col space-y-4 text-white">
              {navLinks.map((link, index) =>
                link.subLinks ? (
                  <li key={index} className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full focus:outline-none"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 ml-1 transition-transform ${
                          openDropdownIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdownIndex === index && (
                      <ul className="mt-2 space-y-2 pl-4 text-gray-300">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subLink.href}
                              className="block hover:text-white"
                              onClick={() => {
                                toggleMobileMenu();
                                closeDropdown();
                              }}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block hover:text-gray-300"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link href="/contact-us">
                  <Button
                    rounded="md"
                    bgColor="fill-brand-secondary"
                    className="w-full rounded-lg py-2 text-xs font-medium text-main"
                  >
                    Book a free call
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
