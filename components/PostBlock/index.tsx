import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { getPosts, getPostBySlug } from "@/lib/service";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  const router = useRouter();

  const handleTagClick = (tagName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push({
      pathname: '/',
      query: { tag: tagName },
      hash: 'projektid'
    }, undefined, { shallow: true });
  };

  return (
    <div className="post-block p-2 mb-4">
      <Link href={`/projekt/${post.slug}`}>
        <div className="relative h-60 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={post?.featuredImage?.node?.sourceUrl ?? defaultImage}
            fill
            alt={post.title}
            className="absolute rounded-md h-full w-full object-cover border-2 border-slate-800"
          />
        </div>
      </Link>
      <Link href={`/posts/${post.slug}`} className="post-content my-4">
        <h3 className="text-lg text-center pt-4 pb-2">{post.title}</h3>
        {/* // throws hydration error. maybe needs sanitizion <div
          className="italic"
        >{post.excerpt}</div> */}
      </Link>

      {post.tags.nodes && (
        <ul className="tags flex flex-row flex-wrap justify-center gap-x-[5px] gap-y-[3px] m-[0px_2px_3px_2px]">
          {post.tags.nodes.map((tag, index) => (
            <li 
              key={index} 
              onClick={(e) => handleTagClick(tag.name, e)}
              className="p-[2px_5px] border border-slate-800 rounded-[3px] text-[14px] text-slate-500 cursor-pointer hover:bg-slate-800 hover:text-white transition-colors"
            >
              {tag.name}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};



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