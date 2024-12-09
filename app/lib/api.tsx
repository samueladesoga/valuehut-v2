import { convertDate } from "@/utils/ConvertDate";

export interface IPostType {
  title: string;
  slug: string;
  cover: {
    url: string;
    title: string;
  };
  sys: {
    publishedAt: Date;
  };
  description: string;
  content?: {
    json: Document;
  };
  author: {
    sys: {
      id: string;
    };
  };
  showInHomePage?: boolean;
}

export interface IAuthor {
  fullName: string;
  profilePicture: {
    url: string;
    title: string;
  };
}

export const getAllArticles = async () => {
  const query = `
    {
        blogCollection {
            items{
                title
                slug
                cover{
                    url
                    title
                }
                sys{
                    publishedAt
                }
                description
            }
        } 
    }
    `;

  const data = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`,
      },

      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json());

  const posts: IPostType[] = data.data?.blogCollection?.items;

  const articles = posts.map((post) => ({
    title: post.title,
    date: convertDate(post.sys.publishedAt.toString()),
    description: post.description,
    category: "",
    image: post.cover.url,
    slug: post.slug,
    cover: {
      url: post.cover.url,
    },
  }));

  return {
    props: {
      posts: articles,
    },
    revalidate: 10,
  };
};
