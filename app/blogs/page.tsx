import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Moving Tips & Advice | R2G Transport & Storage Blog",
  description:
    "Moving tips, packing advice, and relocation guides from the team at R2G Transport & Storage. Everything you need to know to make your move easier.",
  openGraph: {
    title: "Blog | R2G Transport & Storage",
    description: "Moving tips, packing guides, and relocation advice from Australia's trusted removalists.",
    url: "https://r2g.com.au/blogs",
  },
};

const posts = [
  {
    title: "10 Tips for Packing Your Kitchen Like a Pro",
    excerpt:
      "The kitchen is often the most challenging room to pack. Learn how to safely wrap fragile items, pack appliances, and keep your move organised with these expert tips from our team.",
    category: "Packing Tips",
    date: "February 2025",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Moving Interstate? Here's Everything You Need to Know",
    excerpt:
      "Planning an interstate move from Cairns or Brisbane? This complete guide covers everything — timelines, what to expect, how to prepare, and how to choose the right removalist.",
    category: "Interstate Moving",
    date: "January 2025",
    readTime: "8 min read",
    slug: "#",
  },
  {
    title: "How to Choose the Right Moving Company in Australia",
    excerpt:
      "Not all removalists are created equal. Here's what to look for when comparing quotes, what questions to ask, and the red flags to avoid when hiring a moving company.",
    category: "Moving Advice",
    date: "December 2024",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Office Relocation Checklist: A Step-by-Step Guide",
    excerpt:
      "Moving your business is a big deal. Use our comprehensive office relocation checklist to plan every step of the process and ensure your move goes smoothly.",
    category: "Office Moves",
    date: "November 2024",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "When to Use Storage During a Move",
    excerpt:
      "Sometimes the timing between moving out and moving in doesn't line up perfectly. Learn when short-term storage makes sense and how to make the most of it.",
    category: "Storage",
    date: "October 2024",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "The Ultimate Moving Day Checklist",
    excerpt:
      "Moving day is here! Make sure you're fully prepared with our ultimate moving day checklist — from what to pack last to how to manage the removalists on the day.",
    category: "Moving Tips",
    date: "September 2024",
    readTime: "5 min read",
    slug: "#",
  },
];

const categories = ["All", "Moving Tips", "Packing Tips", "Interstate Moving", "Office Moves", "Storage", "Moving Advice"];

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Moving Tips & Advice"
        subtitle="Expert guides, packing tips, and relocation advice from the team at R2G Transport & Storage."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-[#F5C400] text-[#1A1A1A]"
                    : "bg-white text-gray-600 hover:bg-yellow-50 hover:text-[#F5C400] border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all group flex flex-col"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-[#1A1A1A] to-gray-800 flex items-center justify-center">
                  <div className="text-[#F5C400] opacity-30">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#F5C400] bg-yellow-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#F5C400] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={post.slug}
                      className="text-[#F5C400] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Book Your Move?"
        subtext="Get a free, no-obligation quote from R2G Transport & Storage today."
      />
    </>
  );
}
