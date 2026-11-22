import Link from "next/link";
import React from "react";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail. The last item is the current page. */
export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-secondary text-sm text-secondary">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-main font-medium line-clamp-1">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-main hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
