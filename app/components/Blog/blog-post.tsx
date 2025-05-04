import Image from "next/image";
import { Share2 } from "lucide-react";

interface Section {
  title: string;
  content: string;
}

interface BlogPostProps {
  title: string;
  date: string;
  updatedDate: string;
  imageUrl: string;
  imageAlt: string;
  introduction: string;
  sections: Section[];
}

export default function BlogPost({
  title,
  date,
  imageUrl,
  imageAlt,
  introduction,
  sections,
}: BlogPostProps) {
  return (
    <article className="container  max-w-[800px] px-4  ">
      <h1 className="font-primary text-4xl md:text-7xl text-main text-center py-48">
        {title}
      </h1>

      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover w-[800px] h-[400px]"
          priority
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <time className="text-sm text-secondary font-secondary">{date}</time>
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary font-secondary">
            Share to
          </span>
          <button className="p-2 hover:bg-fill-neutral-strong rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>

      <div className="space-y-6 font-secondary">
        <p className="text-base text-body">{introduction}</p>

        {sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="font-primary text-2xl text-main">{section.title}</h2>
            <p className="text-base text-body">{section.content}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
