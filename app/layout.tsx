import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import logoY from "../public/logos/v2-dark.svg";
import logoX from "../public/logos/v2-light.svg";
import Footer from "./components/Footer/Footer";
import Menu from "../public/images/menu.png";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from '@next/third-parties/google'
import { Bricolage_Grotesque, Inter } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.valuehut.co"),
  title: {
    template: "%s | ValueHut Consulting",
    default: "ValueHut Consulting",
  },
  description:
    "ValueHut Consulting is an Agile Management Consultancy helping organisations discover better ways of working to deliver exceptional products and services.",
  alternates: {
    languages: {
      "en-GB": "https://www.valuehut.co",
      "en-NG": "https://www.valuehut.co",
      "x-default": "https://www.valuehut.co",
    },
  },
  openGraph: {
    siteName: "ValueHut Consulting",
    type: "website",
    images: [
      {
        url: "/logos/v2-dark.png",
        width: 512,
        height: 512,
        alt: "ValueHut Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@valuehut",
  },
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
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <head>
      <GoogleTagManager gtmId="GTM-KFFTR24H" />
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
