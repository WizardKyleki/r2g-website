import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getAllBlogPosts, getPostUrl } from "@/data/blog-posts";

const PageHero = dynamic(() => import("@/components/PageHero"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));

export const metadata: Metadata = {
  title: { absolute: "Moving Tips & Packing Guides | R2G Blog" },
  description:
    "Expert moving tips, packing guides & relocation advice to make your next move stress-free. Practical checklists from professional removalists.",
  alternates: {
    canonical: "https://www.r2g.com.au/blog",
  },
  openGraph: {
    title: "Moving Tips & Packing Guides | R2G Blog",
    description:
      "Expert moving tips, packing guides & relocation advice to make your next move stress-free. Practical checklists from professional removalists.",
    url: "https://www.r2g.com.au/blog",
    siteName: "R2G Transport & Storage",
    type: "website",
    locale: "en_AU",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "R2G Moving Tips & Advice Blog",
  description:
    "Expert moving tips, packing guides & relocation advice from professional removalists in Cairns and Brisbane.",
  url: "https://www.r2g.com.au/blog",
  publisher: {
    "@type": "Organization",
    name: "R2G Transport & Storage",
    url: "https://www.r2g.com.au",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.r2g.com.au",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.r2g.com.au/blog",
    },
  ],
};

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const allPosts = getAllBlogPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(totalPages, Number(params.page) || 1));
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        title="Moving Tips & Advice"
        subtitle="Expert guides, packing tips, and relocation advice from professional removalists."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={getPostUrl(post)}
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
                <Link
                  href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-[#F5C400] hover:text-[#1A1A1A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={page === 1 ? "/blog" : `/blog?page=${page}`}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-lg transition-colors ${
                    page === currentPage
                      ? "bg-[#F5C400] text-[#1A1A1A]"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#F5C400] hover:text-[#1A1A1A]"
                  }`}
                >
                  {page}
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-[#F5C400] hover:text-[#1A1A1A] transition-colors"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

      <CTABanner
        heading="Ready to Book Your Move?"
        subtext="Get a free, no-obligation quote today and let our team handle the heavy lifting."
      />
    </>
  );
}
