import { NextPage } from "next";
import Consulting from "./Consulting";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "ValueHut Consultancy is an Agile Management Consultancy, help organisation explore better ways of working and leading to deliver great products and services to their clients.",
};

const Page: NextPage = () => {
  return (
    <>
      <Consulting />
    </>
  );
};

export default Page;
