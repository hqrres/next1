import Link from 'next/link'

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
      <div id="projektid" className="container mx-auto py-10">
        <h3 className="text-2xl text-center">Projektid ({posts.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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