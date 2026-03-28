import { NextPage } from "next";
import Consulting from "./Consulting";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agile Consulting London & Lagos | ValueHut Consulting",
  description:
    "ValueHut Consulting provides Agile and Product Management consulting for organisations in London, Lagos, Accra and beyond. Book a free call today.",
  alternates: {
    canonical: "https://www.valuehut.co/consulting",
  },
  openGraph: {
    title: "Agile Consulting London & Lagos | ValueHut Consulting",
    description:
      "ValueHut Consulting provides Agile and Product Management consulting for organisations in London, Lagos, Accra and beyond. Book a free call today.",
    url: "https://www.valuehut.co/consulting",
    images: [
      {
        url: "/images/consultinghero.png",
        width: 1200,
        height: 630,
        alt: "ValueHut Consulting - Agile Management Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Consulting London & Lagos | ValueHut Consulting",
    description:
      "ValueHut Consulting provides Agile and Product Management consulting for organisations in London, Lagos, Accra and beyond. Book a free call today.",
    images: ["/images/consultinghero.png"],
  },
};

const Page: NextPage = () => {
  return (
    <>
      <Consulting />
    </>
  );
};

export default Page;
