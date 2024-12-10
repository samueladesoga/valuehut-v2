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
export interface IArticle {
  title: string;
  date: string;
  description: string;
  content?: {
    json: Document;
  };
  image: string;
  slug: string;
  cover: {
    url: string;
    title: string;
  };
  author?: {
    sys: {
      id: string;
    };
  };
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



export const getSlugArticle = async (slug: string): Promise<IArticle | null> => {
  if (!slug) {
    return null;
  }
  const query = `
    query GetArticleBySlug($slug: String!) {
      blogCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          slug
          cover {
            url
            title
          }
          sys {
            publishedAt
          }
          description
          content {
            json
          }
          author {
            sys {
              id
            }
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { 
        revalidate: 10
      }
    }
  ).then(res => res.json());
 

  const data = await response
  const post = data.data?.blogCollection?.items[0];

  if (!post) {
    return null;
  }

  return {
    title: post.title,
    date: convertDate(post.sys.publishedAt.toString()),
    description: post.description,
    content: post.content,
    image: post.cover.url,
    slug: post.slug,
    cover: {
      url: post.cover.url,
      title: post.cover.title,
    },
    author: post.author,
  };
};