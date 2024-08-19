import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { ImageGallery } from "@/components/ImageGallery";
// import Image from "next/image";
import { useState } from "react";


import { Particle } from "@/components/Particle";


import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {

  //console.log(post);
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  // Getting the image from the post, or using the default image
  const image = post?.featuredImage?.node?.sourceUrl ?? defaultImage;

  // Function to show a specific image in the lightbox and make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  // Hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  // Creating the image card with the click handler
  const imageCard = (
      <img className="image-card" onClick={() => showImage(image)} src={image} />
  );



  return (
    <>
      <Particle />
      <Header />
      <section className="container mx-auto py-12">
        <div
          className="post-header relative flex flex-col items-center justify-center w-full min-h-[100px]"
          // style={{
          //   backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
      
          {/* <div
            className="absolute w-full h-full z-10 backdrop-blur-md"
            style={{ backgroundColor: "rgba(0, 0, 0, .1)" }}
          ></div> */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl mb-4 text-white drop-shadow-xl">{post.title}</h1>
          </div>
          
          {post.tags.nodes && (
            <ul className="tags flex flex-row flex-wrap justify-center gap-x-[5px] gap-y-[3px] m-[0px_2px_3px_2px]">
              {post.tags.nodes.map((tag, index) => (
                  <li key={index} className="p-[2px_5px] border border-[#444] rounded-[7px] text-[14px] text-[#999]">{tag.name}</li>
              ))}
            </ul>
          )}
          
        </div>
      </section>

      <section className="container post-inner m-auto max-w-2xl p-2">
        <div>            
            <h2 className="post-acf border-x-2 border-t-2 text-2xl">Overview</h2>
            
            {/* <div
            className="relative flex flex-col items-center justify-center w-full min-h-[100px]"
            style={{
              backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div> */}
            
            <div className="flex flex-row">
              
              {post.postAcf.aadress && (
              <div className={`post-acf post-project-address border-l-2 border-t-2
                ${post.postAcf.aeg ? 'basis-2/3' : 'basis-full border-r-2'} 
                ${post.postAcf.luhikirjeldus || post.postAcf.tehnilineInfo || post.postAcf.midaOppisin || post.postAcf.vabadMotted || image ? '' : 'border-b-2'}
                `}>
                <div className="label">address</div>
                <a
                href={post.postAcf.aadress} target='_blank' dangerouslySetInnerHTML={{ __html: post.postAcf.aadress }}>
                </a>
              </div>
              )}

              {post.postAcf.aeg && (
              <div className="basis-1/3 post-acf post-project-address border-x-2 border-t-2">
                <div className="label">time</div>
                <div
                dangerouslySetInnerHTML={{ __html: post.postAcf.aeg }}>
                </div>
              </div> 
              )}
            
            </div>

            {image && (
            <div className={`post-acf featured-image border-t-2 border-l-2 border-r-2 ${!post.postAcf.tehnilineInfo && !post.postAcf.luhikirjeldus && !post.postAcf.luhikirjeldus && !post.postAcf.jagunebPeamiselt && !post.postAcf.midaOppisin && !post.postAcf.vabadMotted ? 'border-b-2' : ''}`}>
              <div>{imageCard}</div>
              {lightboxDisplay && (
                <div id="lightbox" onClick={hideLightBox}>
                  <img id="lightbox-img" src={imageToShow}></img>
                </div>
              )}
            </div>  
            )}
            
            {post.postAcf.luhikirjeldus && (
            <div className={`post-acf post-project-address border-x-2 border-t-2 ${!post.postAcf.tehnilineInfo ? 'border-b-2' : ''}`}>
              {/* <div className="label">lühikirjeldus</div> */}
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.luhikirjeldus }}>
              </div>
            </div>        
            )}

            {post.postAcf.tehnilineInfo && (
            <div className="post-acf post-project-address border-x-2 border-y-2 mb-4">
              <div className="label">technical info</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.tehnilineInfo }}>
              </div>
            </div>              
            )}

            {post.postAcf.jagunebPeamiselt || post.postAcf.midaOppisin || post.postAcf.vabadMotted ? (
              <h2 className="post-acf border-x-2 border-t-2 text-2xl">Protsess</h2>
            ) : null}

            {post.postAcf.jagunebPeamiselt && (
            <div className="post-acf post-project-address border-x-2 border-t-2">
              <div className="label">divided into</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.jagunebPeamiselt }}>
              </div>
            </div>
            )}

            {post.postAcf.midaOppisin && (
            <div className="post-acf post-project-address border-x-2 border-t-2">
              <div className="label">learned</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.midaOppisin }}>
              </div>
            </div>
            )}

            {post.postAcf.vabadMotted && (
            <div className="post-acf post-project-address border-x-2 border-y-2">
              <div className="label">free</div>
              <div
              dangerouslySetInnerHTML={{ __html: post.postAcf.vabadMotted }}>
              </div>
            </div>
            )}

          </div>
        </section>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/projekt/${post.slug}`),
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