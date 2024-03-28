import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";


import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
      <section className="container mx-auto py-12">
        <div
          className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
          style={{
            backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute w-full h-full z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          ></div>
          <div className="z-20 text-center">
            <h1 className="text-2xl md:text-4xl mb-4">{post.title}</h1>
            <p className="italic">By Jeffrey</p>
          </div>
        </div>
        <div
          className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
  };
};




// import Image from 'next/image'


// export default function Post( data ) {

//     console.log({data})

//     const post = data.post;

//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <Image width="140" height="126" src={post.featuredImage.node.sourceUrl} alt=""/>
//             <article dangerouslySetInnerHTML={{__html: post.content}}></article>
//         </div>        
//     )

// }

// export async function getStaticProps(context) {

//     const res = await fetch('http://next1.local/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: `
//                 query SinglePost($id: ID!, $idType: PostIdType!) {
//                 post(id: $id, idType: $idType) {
//                         title
//                         slug
//                         content
//                         featuredImage {
//                             node {
//                                 sourceUrl
//                             }
//                         }
//                     }
//                 }
//             `,
//             variables: {
//                 id: context.params.slug,
//                 idType: 'SLUG'
//             }
//         }) 
//     })

//     const json = await res.json()

//     return {
//         props: {
//             post: json.data.post,
//         }
//     }

// }

// export async function getStaticPaths() {

//     const res = await fetch('http://next1.local/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: `
//                 query AllPostsQuery {
//                     posts {
//                         nodes {
//                             slug
//                             content
//                             title
//                             featuredImage {
//                                 node {
//                                     sourceUrl
//                                 }
//                             }
//                         }
//                     }
//                 }
//             `
//         })
//     })

//     const json = await res.json()
//     const posts = json.data.posts.nodes;

//     const paths = posts.map((post) => ({
//         params: { slug: post.slug },
//     }))

//     return { paths, fallback: false }
// }