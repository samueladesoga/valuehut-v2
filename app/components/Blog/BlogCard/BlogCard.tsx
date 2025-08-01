"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
  slug: string;
  tag?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
  tag,
  category,
  slug,
}) => {
  return (
    <div className="rounded-[20px] bg-white w-full">
      <div className=" w-full h-[200px] md:h-[375px]">
        <Image
          src={image}
          alt="blog"
          width={725}
          height={372}
          objectFit="contain"
          className="rounded-t-[20px] w-full h-[200px] md:h-[375px]"
        />
      </div>
      <div className="flex flex-col  p-4 gap-4">

        <Link
          className="sm:text-xl leading-[29px] font-secondary text-main font-semibold cursor-pointer "
          href={`/blog/${slug}`}
        >
          {title}
        </Link>
        <p className="line-clamp-2 sm:line-clamp-2 sm:text-sm font-secondary text-secondary text-[14px] leading-[21px] font-normal">
          {description}
        </p>
        <div className="flex flex-row text-xs font-secondary font-normal text-secondary">
          <p>
            {date} - {tag}
          </p>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
