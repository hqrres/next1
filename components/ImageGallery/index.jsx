import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPosts, getPostBySlug } from "@/lib/service";
import defaultImage from "@/assets/images/logo_valge.svg";

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live

export default function ImageGallery({ post }) {
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
        <div>{imageCard}</div>
        
        {lightboxDisplay && (
          <div id="lightbox" onClick={hideLightBox}>
            <img id="lightbox-img" src={imageToShow}></img>
          </div>
        )}
      </>
    );
}

export const getStaticPaths = async () => {
    const posts = await getPosts(100); // retrieve first 100 posts
  
    return {
      paths: posts.map((post) => `/projekt/${post.slug}`),
      fallback: false,
    };
};
  
export const getStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params?.slug);
  
    return {
      props: { post },
    };
};
