import React from "react";
import { getCourse } from "@/lib/courseApi";
import WrapperCheckout from "@/components/Checkoutpage/WrapperCheckout/WrapperCheckout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PaymentForm({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const courseId = (await params).slug;
  const classSysId = (await params).id;

  const post = await getCourse(courseId);

  const course = post[0];

  return <WrapperCheckout course={course} classSysId={classSysId} />;
}
