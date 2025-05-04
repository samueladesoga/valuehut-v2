/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSlugArticle } from "@/lib/api";
import React from "react";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getSlugArticle(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      type: "website",
      siteName: "ValueHut Consulting Blogs",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.title,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSlugArticle(slug);

  if (!post) {
    notFound();
  }

  const content = post.content as unknown as Document;
  let paragraphCounter = 0;

  const renderOptions = (
    embeddedAssets: { id: string; url: string; title: string }[]
  ) => ({
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        paragraphCounter++;
        const isFirstParagraph = paragraphCounter === 1;

        const paragraphClass = isFirstParagraph
          ? "text-[23px] leading-[34.5px] text-main font-primary font-normal border-b border-[#555555] border-opacity-[30%] pb-6 mb-6"
          : "text-base font-normal  font-secondary text-main mb-10";

        return <p className={paragraphClass}>{children}</p>;
      },

      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-[26px] leading-[39px] font-medium font-secondary text-main mb-3">
          {children}
        </h3>
      ),

      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),

      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc text-base font-normal font-secondary text-main pl-6 mb-4">
          {children}
        </ul>
      ),

      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="text-base font-normal font-secondary text-main">
          {children}
        </li>
      ),

      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal font-secondary text-main text-[#07658C] dark:text-[#07658C] hover:underline"
        >
          {children}
        </a>
      ),

      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = embeddedAssets.find(
          (item) => item.id === node.data.target.sys.id
        );

        if (asset) {
          return (
            <div className="my-8">
              <Image
                src={`${asset.url}`}
                width={800} // Default or dynamic width
                height={450} // Default or dynamic height
                alt={asset.title || "Embedded asset"}
                className="rounded-lg"
              />
            </div>
          );
        }

        return <p>Embedded asset could not be loaded.</p>;
      },
    },
  });

  const domain = "https://www.valuehut.co";
  const fullUrl = `${domain}/blog/${slug}`;

  return (
    <article className="bg-[#f5f5f5]">
      <div className="max-w-[800px] mx-auto px-4 xl:px-0 py-28 flex flex-col gap-10">
        <h1 className="max-w-[770px] mx-auto text-[37px] leading-[44px] sm:text-[41px] sm:leading-[49px] text-center text-main font-primary font-medium">
          {post.title}
        </h1>
        <div className="flex flex-col gap-4 sm:gap-6">
          <Image
            src={post.cover.url}
            width={800}
            height={450}
            alt="logo"
            className="object-cover rounded-xl"
          />
          <div className="flex justify-between items-center text-secondary text-xs font-normal font-secondary">
            <time>Originally posted on {post.date}</time>
            <div className="flex gap-3">
              <p>Share to</p>
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  fullUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/icons/linkdin-02.svg"}
                  width={16}
                  height={16}
                  alt="linkedin"
                />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  fullUrl
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={"/icons/twitter.svg"}
                  width={16}
                  height={16}
                  alt="twitter"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          {content &&
            documentToReactComponents(
              content,
              renderOptions(post.embeddedAssets)
            )}
        </div>
        <div className="flex justify-between items-center text-secondary text-xs font-normal font-secondary border-t py-4 border-[#555555] border-opacity-[30%]">
          <time>Post updated on {post.updatedDate}</time>
          <div className="flex gap-3">
            <p>Share to</p>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                fullUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={"/icons/linkdin-02.svg"}
                width={16}
                height={16}
                alt="linkedin"
              />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                fullUrl
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={"/icons/twitter.svg"}
                width={16}
                height={16}
                alt="twitter"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
