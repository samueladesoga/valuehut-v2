import Link from "next/link";
import type { Metadata } from "next";
import { SolidNavbar } from "./components/Navbar/SolidNavbar";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const links = [
  { href: "/academy", label: "Upcoming courses", note: "Agile, Scrum and leadership classes" },
  { href: "/consulting", label: "Consulting", note: "How we help organisations change" },
  { href: "/talent-matching", label: "Talent matching", note: "Vetted Agile professionals" },
  { href: "/blog", label: "Blog", note: "Insights from our work" },
];

export default function NotFound() {
  return (
    <main className="bg-[#f5f5f5]">
      <SolidNavbar />
      <div className="container px-4 xl:px-0 pt-40 pb-24 flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="font-secondary text-sm font-semibold text-[#05668D]">404</p>
          <h1 className="text-[44px] leading-[52px] sm:text-[56px] sm:leading-[64px] font-primary font-medium text-main">
            We can&apos;t find that page
          </h1>
          <p className="font-secondary text-lg text-secondary">
            It may have moved, or a class may have finished. Here are some good places to
            continue:
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex flex-col gap-1 rounded-2xl bg-white p-6 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[#05668D]"
              >
                <span className="font-secondary text-lg font-semibold text-main">{link.label} →</span>
                <span className="font-secondary text-sm text-secondary">{link.note}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-secondary text-base text-main">
          Still stuck?{" "}
          <Link href="/contact-us" className="text-[#05668D] underline">
            Contact us
          </Link>{" "}
          or go to the{" "}
          <Link href="/" className="text-[#05668D] underline">
            homepage
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
