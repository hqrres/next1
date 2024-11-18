import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect, useState, useMemo } from 'react';

import { GetStaticProps } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PostBlock } from "@/components/PostBlock";
import { getPosts } from "@/lib/service";
import { Particle } from "@/components/Particle";

export default function HomePage({ posts }: { posts: any }) {
  const router = useRouter();
  
  const [activeTag, setActiveTag] = useState<string | null>(() => 
    router.query.tag as string || null
  );
  const [showFilters, setShowFilters] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleTagSelect = (tag: string | null) => {
    if (tag === null) {
      router.push({
        pathname: '/',
        hash: 'projektid'
      }, undefined, { shallow: true });
    } else {
      router.push({
        pathname: '/',
        query: { tag },
        hash: 'projektid'
      }, undefined, { shallow: true });
    }
  };

  const allTags = Array.from(new Set(
    posts.flatMap((post: any) => 
      post.tags.nodes.map((tag: any) => tag.name)
    )
  )).sort();

  useEffect(() => {
    if (!mounted) return;
    setActiveTag(router.query.tag as string || null);
  }, [router.query.tag, mounted]);

  useEffect(() => {
    if (mounted && router.asPath.includes('#projektid')) {
      setTimeout(() => {
        const element = document.getElementById('projektid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [mounted, router.asPath]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post: any) =>
      post.tags.nodes.some((tag: any) => tag.name === activeTag)
    );
  }, [posts, activeTag]);

  return (
    <>
      <Particle />
      <Header />
      <Hero />
      <div id="projektid" className="container mx-auto py-10">
        <Link href="../#projektid" className="px-4">
          <h3 className="text-3xl text-center">Projects</h3> 
        </Link>
        
        <div className="flex flex-col items-center my-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 mb-4 rounded-md border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => handleTagSelect(null)}
                    className={`px-4 py-2 rounded-md border border-slate-800 
                      ${!activeTag ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      className={`px-4 py-2 rounded-md border border-slate-800 
                        ${activeTag === tag ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="my-12 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post: any) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <PostBlock post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
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