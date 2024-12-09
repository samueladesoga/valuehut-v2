"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BlogItemProps {
  image: string;
  title: string;
  date?: string;
  tag?: string;
  slug: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  title,
  date,
  tag,
  slug,
}) => {
  const router = useRouter();
  return (
    <div
      className="blog-item flex gap-3 rounded-2xl bg-white shadow-md h-[95px] overflow-hidden sm:p-0  p-2"
    >
      <div className=" sm:w-[136px] sm:h-[95px] w-[100px] h-[76px] flex-shrink-0">
        <Image
          src={image}
          alt="blog"
          width={136}
          height={95}
          className="object-cover   rounded-md sm:rounded-l-2xl  :w-full h-full "
        />
      </div>

      <div className="flex flex-col p-2 cursor-pointer w-full h-full overflow-hidden">
        <h2
          className="text-main text-sm font-secondary font-medium sm:text-[16px] text-[14px] leading-[18px] sm:leading-[24px] line-clamp-2"
          onClick={() => router.push(`/blog/${slug}`)}
        >
          {title}
        </h2>
        <div className="flex flex-row font-normal text-secondary font-secondary sm:text-xs text-[12px] leading-[18px] mt-auto">
          <p>
            {date} - {tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
