import { getSlugArticle } from "@/lib/api";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildRenderOptions } from "@/components/Blog/RichTextRenderer/rich-text-renderer";

type Props = {
  params: Promise<{ slug: string }>;
};

function getBlogPostUrl(slug: string) {
  return `https://www.valuehut.co/blog/${slug}`;
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getSlugArticle(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const pageUrl = getBlogPostUrl(slug);
  const canonical =
    post.canonicalUrl && isValidUrl(post.canonicalUrl)
      ? post.canonicalUrl
      : pageUrl;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: pageUrl,
      siteName: "ValueHut Consulting Blog",
      images: [
        {
          url: post.cover.url,
          width: 800,
          height: 450,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover.url],
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

  const fullUrl = getBlogPostUrl(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover.url,
    url: fullUrl,
    datePublished: post.date,
    dateModified: post.updatedDate,
    publisher: {
      "@type": "Organization",
      name: "ValueHut Consulting",
      logo: {
        "@type": "ImageObject",
        url: "https://www.valuehut.co/logos/v2-dark.png",
      },
    },
  };

  return (
    <article className="bg-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-[800px] mx-auto px-4 xl:px-0 py-28 flex flex-col gap-10">
        <h1 className="max-w-[770px] mx-auto text-[37px] leading-[44px] sm:text-[41px] sm:leading-[49px] text-center text-main font-primary font-medium">
          {post.title}
        </h1>
        <div className="flex flex-col gap-4 sm:gap-6">
          <Image
            src={post.cover.url}
            width={800}
            height={450}
            alt={post.title}
            className="object-cover rounded-xl"
          />
          {post.canonicalUrl && isValidUrl(post.canonicalUrl) && (
            <p className="text-xs font-normal font-secondary text-secondary">
              Originally published at{" "}
              <a
                href={post.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#07658C] hover:underline"
              >
                {new URL(post.canonicalUrl).hostname}
              </a>
            </p>
          )}
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
              buildRenderOptions(post.embeddedAssets)
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
