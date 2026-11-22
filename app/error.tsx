"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-[#f5f5f5]">
      <div className="container px-4 xl:px-0 pt-40 pb-24 flex flex-col gap-6 max-w-2xl">
        <h1 className="text-[44px] leading-[52px] font-primary font-medium text-main">
          Something went wrong
        </h1>
        <p className="font-secondary text-lg text-secondary">
          Sorry — this page didn&apos;t load properly. Please try again. If it keeps happening,
          email{" "}
          <a href="mailto:info@valuehut.co" className="text-[#05668D] underline">
            info@valuehut.co
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-fill-brand-secondary px-6 py-3 font-secondary text-sm font-medium text-main hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#05668D]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-[#BFBFBF] bg-white px-6 py-3 font-secondary text-sm font-medium text-main hover:bg-gray-50"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
