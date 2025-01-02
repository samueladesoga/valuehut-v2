import Link from "next/link";
import React from "react";

function WhoAreWe() {
  return (
    <section className="md:flex justify-between items-start">
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start gap-8">
        <h1 className="text-8xl font-medium text-[#141834] font-primary text-center md:text-left">
          Who are we
        </h1>
        <Link
          href="https://calendly.com/samueladesoga/valuehut-consulting"
          target="_blank"
        >
          <button className="hidden md:flex rounded-full bg-[#FF9F5A] px-6 py-3 text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
            Get to know us better
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start gap-10 md:gap-14  pt-8 md:pt-0">
        <div className="flex flex-col justify-between gap-3">
          <h2 className="text-4xl font-semibold font-primary text-center text-main md:text-left">
            Our Vision
          </h2>
          <p className="text-lg font-normal text-center font-secondary md:text-left">
            Creating Organisations that are able to meaningfully engage their
            employees to create great product and services that their customer
            love.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <h2 className="text-4xl font-semibold font-primary text-center text-main md:text-left">
            Our Mission
          </h2>
          <p className="text-lg font-normal text-center font-secondary md:text-left">
            At ValueHut Consulting, we help organizations, teams and individual
            improve their ways of working leveraging practices from agile and
            lean methods. Through our service pillars – Academy, Consulting and
            Talent Matching, we partner with our clients to build effective
            organizations that solve complex problems and are able deliver
            products their customers love.
          </p>
        </div>
        <button className="flex md:hidden items-center justify-center rounded-full bg-[#FF9F5A] px-6 py-3 text-main text-sm font-medium hover:bg-[#FF9F5A]/90">
          Get to know us better
        </button>
      </div>
    </section>
  );
}

export default WhoAreWe;
