import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";


export const PostBlock = ({ post }: { post: any }) => {

  return (
    <div className="post-block p-2">
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-60 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={post.featuredImage.node.sourceUrl ?? defaultImage}
            fill
            alt={post.title}
            className="absolute rounded-md h-full w-full object-cover border-2 border-gray-800"
          />
        </div>
      </Link>
      <Link href={`/posts/${post.slug}`} className="post-content my-4">
        <h3 className="text-lg text-center py-4">{post.title}</h3>
        {/* // throws hydration error. maybe needs sanitizion <div
          className="italic"
        >{post.excerpt}</div> */}
      </Link>
    </div>
  );
};

