export const getAllCourses = async () => {
  const query = `
        {
            courseCollection {
                items{   
                title 
                description
                level
                acronym
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

  const courses = data.data?.courseCollection?.items;

  return courses;
};
