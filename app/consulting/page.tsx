import { NextPage } from "next";
import Consulting from "./Consulting";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agile & Product Management Consulting",
  description:
    "ValueHut Consulting provides Agile and Product Management consulting services to help you achieve your business goals to our global clients - London, Lagos, Accra and other parts of the world.",
  alternates: {
    canonical: "https://www.valuehut.co/consulting",
  },
  openGraph: {
    title: "Agile & Product Management Consulting | ValueHut Consulting",
    description:
      "ValueHut Consulting provides Agile and Product Management consulting services to global clients in London, Lagos, Accra and beyond.",
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
    title: "Agile & Product Management Consulting | ValueHut Consulting",
    description:
      "ValueHut Consulting provides Agile and Product Management consulting services to global clients in London, Lagos, Accra and beyond.",
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
