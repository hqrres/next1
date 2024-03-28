//import Link from 'next/link'

import { GetStaticProps } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PostBlock } from "@/components/PostBlock";
import { getPosts } from "@/lib/service";

export default function HomePage({ posts }: { posts: any }) {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my posts ({posts.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post: any) => {
            return <PostBlock key={post.slug} post={post} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};



// export default function Home({posts}) {
  
//   //console.log(posts);

//   return (
    
//     <div>
//       <h1>Hello From The Home Page!</h1>
//       {
//         posts.nodes.map(post => {
//           return(
//             <ul key={post.slug}>
//               <li>
//                 <Link href={`/posts/${post.slug}`}>{post.title}</Link>
//               </li>
//             </ul>
//           )
//         })
//       }
//     </div>
//   )

// }


// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts(100); // retrieve first 100 posts

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 3600,
//   };
// };


// export async function getStaticProps(){

//  const wp_graphql = process.env.WP_GRAPHQL

//  const res = await fetch( wp_graphql, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     query: `
//     query HomePageQuery {
//       posts {
//         nodes {
//           slug
//           title
//         }
//       }
//     }
//     `,  
//   })

//  }) 

//  const json = await res.json();

//  return {
//   props: {
//     posts: json.data.posts,
//   }
//  };
// }