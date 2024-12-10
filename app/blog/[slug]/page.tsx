import { getSlugArticle } from "@/lib/api";
import React from "react";
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

export interface PageProps {
  params: {
    slug: string;
  };

}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const post = await getSlugArticle(slug);
  
  if (!post) {
    notFound();
  }

  const content = post.content?.json as unknown as Document;

  return (
    <article className="p-10 ">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-white block mb-8">{post.date}</time> 
       <div className="text-white">
          {content && documentToReactComponents(content)}
       </div>
    </article>
  );
}