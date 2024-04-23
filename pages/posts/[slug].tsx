import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {

  //console.log(post);

  return (
    <>
      <Header />
      <section className="container mx-auto py-12">
        <div
          className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px]"
          style={{
            backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute w-full h-full z-10 backdrop-blur-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, .1)" }}
          ></div>
          <div className="z-20 text-center">
            <h1 className="text-2xl md:text-4xl mb-4 text-white drop-shadow-xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="container post-inner m-auto max-w-2xl">
        <div>
            {/* <div
            className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
            ></div> */}
            <h2 className="post-acf border-x-2 border-t-2 text-2xl">Ülevaade</h2>

            <div className="flex flex-row">
              
              <div className="basis-2/3 post-acf post-project-address border-l-2 border-t-2">
                <div className="label">aadress</div>
                <div
                dangerouslySetInnerHTML={{ __html: post.postAcf.aadress }}>
                </div>
              </div>

              <div className="basis-1/3 post-acf post-project-address border-x-2 border-t-2">
                <div className="label">aeg</div>
                <div
                dangerouslySetInnerHTML={{ __html: post.postAcf.aeg }}>
                </div>
              </div>
              
            </div>

            <div className="post-acf post-project-address border-x-2 border-t-2">
              <div className="label">kliendi soov</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.kliendiSoov }}>
              </div>
            </div>

            <div className="post-acf post-project-address border-x-2 border-y-2 mb-4">
              <div className="label">tehniline info</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.tehnilineInfo }}>
              </div>
            </div>

            <h2 className="post-acf border-x-2 border-t-2 text-2xl">Protsess</h2>
            <div className="post-acf post-project-address border-x-2 border-t-2">
              <div className="label">jaguneb peamiselt</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.jagunebPeamiselt }}>
              </div>
            </div>

            <div className="post-acf post-project-address border-x-2 border-t-2">
              <div className="label">mida õppisin</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.midaOppisin }}>
              </div>
            </div>

            <div className="post-acf post-project-address border-x-2 border-y-2">
              <div className="label">vabad mõtted</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.vabadMotted }}>
              </div>
            </div>

          </div>
        </section>
      <Footer />
    </>
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