import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import logoY from "../public/logos/v2-dark.svg";
import logoX from "../public/logos/v2-light.svg";
import Footer from "./components/Footer/Footer";
import Menu from "../public/images/menu.png";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    template: "%s | ValueHut Consulting",
    default: "ValueHut Consulting", // a default is required when creating a template
  },
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
      <GoogleAnalytics gaId="G-MS8JT45FG9" />
    </html>
  );
}
