"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
}

const POSTS_PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#F5C400] bg-yellow-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#F5C400] transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-[#F5C400] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Blog pagination">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-[#F5C400] hover:text-[#1A1A1A] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-lg transition-colors ${
                  page === currentPage
                    ? "bg-[#F5C400] text-[#1A1A1A]"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#F5C400] hover:text-[#1A1A1A]"
                }`}
              >
                {page}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-[#F5C400] hover:text-[#1A1A1A] transition-colors"
              >
                Next
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
