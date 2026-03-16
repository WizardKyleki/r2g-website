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

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
        </div>
      </section>

      <CTABanner
        heading="Ready to Book Your Move?"
        subtext="Get a free, no-obligation quote today and let our team handle the heavy lifting."
      />
    </>
  );
}
