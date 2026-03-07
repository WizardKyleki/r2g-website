"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, getPostUrl, type BlogPost } from "@/data/blog-posts";

const HIDDEN_ROUTES = ["/blog", "/contact"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BlogPostsWidget() {
  const pathname = usePathname();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(shuffle(getAllBlogPosts()).slice(0, 4));
  }, []);

  const hidden =
    HIDDEN_ROUTES.includes(pathname) || pathname.startsWith("/blog/");

  if (hidden || posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-3">
            Moving Tips & Advice
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Practical guides and expert tips to make your next move stress-free.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={getPostUrl(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all group flex flex-col"
            >
              <div className="relative h-40">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-semibold text-[#F5C400] bg-yellow-50 px-2 py-0.5 rounded-full self-start mb-2">
                  {post.category}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-sm leading-snug mb-2 group-hover:text-[#F5C400] transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-[#F5C400] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Read More
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1A1A1A] font-semibold hover:text-[#F5C400] transition-colors"
          >
            View All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
