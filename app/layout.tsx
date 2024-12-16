import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import logoY from "../public/logos/v2-dark.png";
import logoX from "../public/images/Vector.png";
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
