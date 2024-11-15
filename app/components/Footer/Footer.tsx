import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fill-neutral-strong">
      <div className="container pb-8 pt-16 sm:pt-24 px-6 xl:px-0 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="/images/Vector.png"
              alt="Company name"
              width={120}
              height={120}
            />
            <p className="text-balance text-accentmain text-lg">
              ValueHut Consultancy is an Agile Management Consultant, help
              organisation explore better ways of working and leading to deliver
              great products and servicea to their clients.
            </p>
          </div>
          <div className="mt-16 gap-8 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="font-primary text-accentmain font-medium text-2xl">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Academy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Consultation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Talent match
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-primary text-accentmain font-medium text-2xl">
                  Social
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-primary text-accentmain font-medium text-2xl">
                  Contact
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4 text-accentsecondary text-sm font-normal font-secondary"
                >
                  <li>
                    <p className="text-accentsecondary text-sm font-normal font-secondary">
                      UK Office:
                    </p>
                    <p>Email: info@valuehut.co</p>
                    <p> Call: +44(0)7946713054</p>
                  </li>
                  <li>
                    <p className="text-accentsecondary text-sm font-normal font-secondary">
                      Nigeria office:
                    </p>
                    <p>Email: info@valuehut.co</p>
                    <p>Call: +234(0)8143021499</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 sm:mt-10">
          <div className="flex justify-between items-baseline">
            <div className="">
              <h2 className="text-[150px] leading-[195px] font-primary text-[#EFF1CB] font-medium">
                ValueHut
              </h2>
              <p className="font-secondary font-bold text-lg tracking-widest uppercase text-[#EFF1CB]">
                Consulting
              </p>
            </div>
            <div className="">
              <button className="bg-[#FF9F5A] font-secondary px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
                Let's get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex justify-between text-sm font-secondary text-accentmain font-medium">
            <p className="text-sm font-secondary text-accentmain font-medium">
              2024 ValueHut - All rights reserved.
            </p>
            <nav className="inline-flex gap-3">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
