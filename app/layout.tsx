import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import logoY from "../public/logos/v2-dark.png";
import logoX from "../public/images/Vector.png";
import Footer from "./components/Footer/Footer";
import Menu from "../public/images/menu.png";

export const metadata: Metadata = {
  title: "ValueHut Consulting",
  description:
    "ValueHut Consultancy is an Agile Management Consultancy, help organisation explore better ways of working and leading to deliver great products and services to their clients.",
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
        { label: "About Us", href: "/about-us" },
        { label: "FAQs", href: "/faqs" },
        { label: "Blog", href: "/blog" },
      ],
    },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>
      <body>
        <Navbar logoX={logoX} logoY={logoY} menu={Menu} navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
