import { convertDate, getYear } from "@/utils/ConvertDate";

interface ICourses {
  courseDetailsCollection: {
    items: {
      title: string;
      content: string;
      contentList: string;
    }[];
  };
  classesCollection: {
    items: {
      identifier: string;
      sys: {
        id: string;
      };
      filled: boolean;
      startDate: string;
      endDate: string;
      classType: string;
      time: string;
      ukPrice: number;
      primary: string;
      secondary: string;
      tertiary: string;
    }[];
  };
  id: number;
  title: string;
  description: string;
  level: string;
  acronym: string;
  logo: {
    url: string;
  };
  slug: string;
  duration: number;
  dates: string;
  imageUrl: {
    url: string;
  };
}

export const getAllCourses = async () => {
  const query = `
{
  courseCollection {
    items {
      title
      description
      acronym
      duration
      logo{
        url
      }
      level
      slug
			classesCollection {
        items {
          sys { 
            id
          }
          identifier
          filled
          startDate
          endDate
          classType
          time
          ukPrice
          primary
          secondary
          tertiary
        }
      }
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

  const posts = data.data?.courseCollection.items;

  const courses = posts.map((course: ICourses) => ({
    title: course.title,
    description: course.description,
    level: course.level,
    logo: course.logo.url,
    slug: course.slug,
    duration: course.duration,
    dates: convertDate(course.classesCollection.items[0]?.startDate),
    classes: course.classesCollection.items.map((item) => ({
      filled: item.filled,
      startDate: item.startDate,
      year: getYear(item.startDate),
    })),
  }));
  return courses;
};

export const getCourse = async (slug: string) => {
  if (!slug) {
    return null;
  }
  const query = `
    query GetCourse($slug: String!) {
      courseCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          description
          level
          duration
          acronym
          logo {
            url
          }
          imageUrl {
            url
          }
          slug
          courseDetailsCollection {
            items  {
              title
              content
              contentList
            }
          }
          classesCollection {
            items {
              sys { 
                id
              }
              identifier
              filled
              startDate
              endDate
              classType
              time
              ukPrice
              primary
              secondary
              tertiary
            }
          }
        }
      }
    }
  `;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    }
  );

  const data = await response.json()

  const posts = data.data?.courseCollection?.items;

  const course = posts.map((course: ICourses) => ({
    title: course.title,
    description: course.description,
    level: course.level,
    logo: course.logo.url,
    slug: course.slug,
    acronym: course.acronym,
    duration: course.duration,
    dates: convertDate(course.classesCollection.items[0]?.startDate),
    image: course.imageUrl.url,
    classes: course.classesCollection.items.map((item) => ({
      classSysId: item.sys.id,
      identifier: item.identifier,
      filled: item.filled,
      startDate: item.startDate,
      endDate: item.endDate,
      year: getYear(item.startDate),
      classType: item.classType,
      time: item.time,
      ukPrice: item.ukPrice,
      primary: item.primary,
      secondary: item.secondary,
      tertiary: item.tertiary,
    })),
    courseDetails: course.courseDetailsCollection.items.map((item) => ({
      title: item.title,
      content: item.content,
      contentList: item.contentList,
    })),
  }));
  return course;
};
