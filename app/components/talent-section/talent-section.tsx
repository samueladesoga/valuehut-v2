"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TalentAvatars } from "@/data/talent-matching/Talents";

// 6x3 grid of indices into TalentAvatars. Columns 3–4 sit fully behind the
// "Available talents" card, so they stay empty; columns 2 and 5 are half
// covered, which is where the single spare slot goes.
const AVATAR_LAYOUT: (number | null)[][] = [
  [0, 6, null, null, 7, 1],
  [2, 8, null, null, 9, 3],
  [4, 10, null, null, null, 5],
];

export default function TalentSection() {
  return (
    <div className=" py-16 relative">
      <div className="container mx-auto max-sm:px-4">
        <div className="flex flex-col-reverse  lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-sm:mt-20">
            {/* Same footprint as the old avaible.png (306x399, card ~224x312
                inside a glow) so the avatar layout above still lines up. */}
            <div className="absolute top-[-90px] w-[306px] h-[399px] left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
              <div className="w-[224px] h-[312px] bg-white rounded-[10px] px-3 pt-5 pb-3 flex flex-col font-secondary text-left shadow-[0_0_28px_14px_rgba(60,60,110,0.55)]">
                <p className="font-primary font-medium text-[15px] leading-5 text-[#1A1B3D] px-1">
                  Available talents
                </p>

                <div className="mt-4 bg-[#EFEFEF] rounded-lg p-3" aria-hidden="true">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#D9D9D9]" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-4/5 rounded-full bg-[#D9D9D9]" />
                      <div className="h-2 w-1/2 rounded-full bg-[#E3E3E3]" />
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-11/12 rounded-full bg-[#DDDDDD]" />
                  <div className="mt-2 h-1.5 w-3/5 rounded-full bg-[#DDDDDD]" />
                </div>

                <ul className="mt-4 space-y-1.5 px-1 text-[11px] leading-4 text-[#2E3A4B]">
                  <li className="flex gap-1.5">
                    <span className="text-[#FF9F5A]" aria-hidden="true">✓</span>
                    Vetted by practising consultants
                  </li>
                  <li className="flex gap-1.5">
                    <span className="text-[#FF9F5A]" aria-hidden="true">✓</span>
                    Availability: full time / part time
                  </li>
                </ul>

                <Link
                  href="/contact-us"
                  className="mt-auto rounded-lg bg-[#D4E2EC] hover:bg-[#C4D6E3] transition-colors py-2.5 text-center text-[12px] font-medium text-[#1A1B3D]"
                >
                  Request profiles
                </Link>
              </div>
            </div>

            <div className="relative grid grid-cols-6 gap-5 w-auto" aria-hidden="true">
              {AVATAR_LAYOUT.flat().map((avatarIndex, cell) => (
                <div key={cell} className="w-[53px] h-[53px]">
                  {avatarIndex !== null && (
                    <Image
                      src={TalentAvatars[avatarIndex]}
                      alt=""
                      width={80}
                      height={80}
                      className="rounded-full bg-cover w-[53px] h-[53px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:max-w-[50%]">
            <h2 className="text-[47px] leading-[61px] lg:text-5xl xl:text-9xl font-medium font-primary mb-4">
              Transparent recruitment service.
            </h2>
            <p className="text-lg lg:text-xl text-main font-normal font-secondary mb-8">
              Our talent matching service provides no-frills IT, Transformation & Product Professionals to help you achieve your business goals.
              We only recommend talents that we would hire in our consulting business. Give us a try today and see the difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
