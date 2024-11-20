import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import logo from "../public/images/Vector.png";
import Footer from "./components/Footer/Footer";
import Menu from "../public/images/menu.png";

export const metadata: Metadata = {
  title: "Discover ValueHut",
  description:
    "Discover ValueHut Consulting, an agile coaching and training supporting the adoption of agile ways of working using Training and Coaching. Improve your organisational effectivess and efficiency with our help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Academy", href: "/academy" },
    { label: "Consulting", href: "/consulting" },
    {
      label: "Talent Matching",
      href: "/talent-matching",
      badge: "NEW",
    },
    {
      label: "Resources",
      href: "/resources",
      subLinks: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <html lang="en">
      <body>
        <Navbar logo={logo} menu={Menu} navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
