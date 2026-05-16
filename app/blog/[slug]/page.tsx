import { getSlugArticle } from "@/lib/api";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildRenderOptions } from "@/components/Blog/RichTextRenderer/rich-text-renderer";
import { getAuthor } from "@/lib/api";

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
  const author = post.author?.sys?.id ? await getAuthor(post.author.sys.id) : null;

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
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-secondary text-xs font-normal font-secondary">
            <div className="flex items-center gap-2">
              {author?.profilePicture && (
                <Image
                  src={author.profilePicture.url}
                  width={36}
                  height={36}
                  alt={author.fullName}
                  className="rounded-full object-cover shrink-0"
                  style={{ width: 36, height: 36 }}
                />
              )}
              <p className="leading-relaxed">
                {author && (
                  <>
                    <span>by </span>
                    <span className="font-semibold text-main">{author.fullName}</span>
                    <span className="mx-2">·</span>
                  </>
                )}
                <span>On {post.date}</span>
                {post.updatedDate !== post.date && (
                  <>
                    <span className="mx-2">•</span>
                    <span>Updated on {post.updatedDate}</span>
                  </>
                )}
              </p>
            </div>
            <div className="flex gap-3 items-center">
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
                  className="shrink-0"
                  style={{ width: 16, height: 16 }}
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
                  className="shrink-0"
                  style={{ width: 16, height: 16 }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          {content &&
            documentToReactComponents(
              content,
              buildRenderOptions(post.embeddedAssets, content)
            )}
        </div>
        <div className="flex justify-end items-center text-secondary text-xs font-normal font-secondary border-t py-4 border-[#555555]/30">
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
