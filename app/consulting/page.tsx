import { NextPage } from "next";
import Consulting from "./Consulting";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ValueHut Consulting",
  description:
    "ValueHut Consulting provides Agile and Product Management consulting services to help you achieve your business goals to our global clients - London, Lagos, Accra and other parts of the world.",
};

const Page: NextPage = () => {
  return (
    <>
      <Consulting />
    </>
  );
};

export default Page;
