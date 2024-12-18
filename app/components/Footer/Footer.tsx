import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-fill-neutral-strong">
      <div className="container pb-8 pt-16 px-6 xl:px-0 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="/images/footerImg.png"
              alt="Company name"
              width={70}
              height={70}
            />
            <p className="text-balance text-accentmain text-lg font-normal font-secondary">
              ValueHut Consultancy is an Agile Management Consultancy, help
              organisation explore better ways of working and leading to deliver
              great products and services to their clients.
            </p>
          </div>
          <div className="mt-16 gap-8 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="font-primary text-accentmain font-medium text-2xl">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/academy"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consulting"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/talent-matching"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      Talent matching
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-primary text-accentmain font-medium text-2xl">
                  Social
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                <li>
                    <Link
                      target="_blank"
                      href="https://linkedin.com/company/valuehut-limited"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.scrum.org/valuehut-consulting-limited"
                      className="text-accentsecondary text-sm font-normal font-secondary"
                    >
                      ValueHut on Scrum.Org
                    </Link>
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
                      UK office:
                    </p>
                    <p>Email: info@valuehut.co</p>
                    <p>Tel: +44(0)7946713054</p>
                  </li>
                  <li>
                    <p className="text-accentsecondary text-sm font-normal font-secondary">
                      Nigeria office:
                    </p>
                    <p>Email: info@valuehut.co</p>
                    <p>Tel: +234(0)8143021499</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 sm:mt-10">
          <div className="flex  flex-wrap justify-between item-center ">
            <div className=" flex flex-col  w-full sm:w-auto justify-center">
              <h2 className="text-[70px] sm:text-[150px]  w-full flex justify-center  leading-[91px] sm:leading-[195px] font-primary text-[#EFF1CB] tracking-[2px] font-medium">
                ValueHut
              </h2>
              <p className="font-secondary font-bold text-lg mt-[-15px] sm:mt-[-30px] w-full sm:w-auto flex justify-center sm:justify-end tracking-widest uppercase text-[#EFF1CB]">
                Consulting
              </p>
            </div>
            <div className="flex justify-center  items-center w-full mt-8 md:mt-0 sm:w-auto  ">
              <button className="bg-[#FF9F5A] font-secondary h-auto px-6 py-3 rounded-full text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
                Let&apos;s get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 sm:mt-20 lg:mt-24  w-full flex justify-center md:justify-between ">
          <div className="flex flex-col-reverse sm:flex-row w-full justify-between text-sm  font-secondary text-accentmain font-medium">
            <p className="text-sm font-secondary text-accentmain mt-4  sm:mt-0 w-full  text-center md:text-start justify-center  font-medium">
              2024 ValueHut Consulting Limited - All rights reserved.
            </p>
            <nav className=" w-full flex  gap-10 justify-between md:justify-end">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
