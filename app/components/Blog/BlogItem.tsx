import Image from "next/image";
import React from "react";

interface BlogItemProps {
  image: string;
  title: string;
  date: string;
  tag: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ image, title, date, tag }) => {
  return (
    <div className="blog-item flex gap-3 rounded-2xl bg-white shadow-md">
      <div className="w-[250px]">
        <Image
          src={image}
          alt="blog"
          width={136}
          height={100}
          className="object-contain rounded-l-2xl  "
        />
      </div>
      <div className="flex flex-col gap-5 p-2">
        <h2 className="text-main text-sm">{title}</h2>
        <div className="flex flex-row font-normal text-secondary text-xs">
          <p>
            {date} - {tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
