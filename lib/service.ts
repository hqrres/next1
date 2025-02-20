import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title      
            tags {
              nodes {
                name
              }
            }
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
    const data = await fetchAPI(
      `query GetPost($id: ID = "") {
      post(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
        postAcf {
          aadress
          aeg
          __typename
          jagunebPeamiselt
          luhikirjeldus
          midaOppisin
          tehnilineInfo
          vabadMotted
        }
        tags {
          nodes {
            name
          }
        }
      }
    }`,
      {
        variables: {
          id: slug,
        },
      }
    );
  
    return data?.post;
  }