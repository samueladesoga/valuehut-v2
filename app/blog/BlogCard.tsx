import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
  category,
}) => {
  return (
    <div className="rounded-[20px] shadow-lg max-w-[725px]">
      <Image
        src={image}
        alt="blog"
        width={725}
        height={372}
        className="rounded-t-[20px]"
      />
      <div className="flex flex-col p-6 gap-4">
        <h3 className="text-xl font-primary text-main font-semibold">
          {title}
        </h3>
        <p className="text-sm font-secondary text-secondary font-normal">
          {description}
        </p>
        <div className="flex flex-row text-xs font-normal text-secondary">
          <p>{date} - </p>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
