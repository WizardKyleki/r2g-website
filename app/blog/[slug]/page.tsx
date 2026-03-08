import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import {
  getBlogPost,
  getAllBlogSlugs,
  getAllBlogPosts,
  getPostUrl,
  type ContentBlock,
} from "@/data/blog-posts";

const CTABanner = dynamic(() => import("@/components/CTABanner"));

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS
// ─────────────────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.r2g.com.au/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.r2g.com.au/blog/${post.slug}`,
      siteName: "R2G Transport & Storage",
      type: "article",
      locale: "en_AU",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: `https://www.r2g.com.au${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://www.r2g.com.au${post.image}`],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT BLOCK RENDERER
// ─────────────────────────────────────────────────────────────────────────────

/** Convert markdown-style [text](url) links to styled HTML <a> tags,
 *  and add styling to any existing <a> tags that lack a class. */
function renderLinks(text: string): string {
  const linkClass = "text-[#F5C400] hover:underline font-medium";
  // Convert markdown links
  let result = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    `<a href="$2" class="${linkClass}">$1</a>`
  );
  // Add class to existing <a> tags without one
  result = result.replace(
    /<a href="([^"]+)"(?!\s+class)>/g,
    `<a href="$1" class="${linkClass}">`
  );
  return result;
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mt-10 mb-4"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="text-xl font-bold text-[#1A1A1A] mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={index}
          className="text-gray-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: renderLinks(block.text) }}
        />
      );
    case "list":
      return (
        <ul key={index} className="space-y-2 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
              <svg
                className="w-5 h-5 text-[#F5C400] shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: renderLinks(item) }} />
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div
          key={index}
          className="bg-[#F5C400]/10 border-l-4 border-[#F5C400] rounded-r-2xl p-5 mb-6"
        >
          <p className="font-bold text-[#1A1A1A] text-sm mb-1">
            {block.title}
          </p>
          <p
            className="text-gray-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderLinks(block.text) }}
          />
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-gray-200 pl-5 py-2 mb-6 italic"
        >
          <p className="text-gray-500 leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.author && (
            <cite className="text-sm text-gray-400 not-italic mt-2 block">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const relatedPosts = post.relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean);

  // ── JSON-LD ──
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `https://www.r2g.com.au${post.image}`,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://www.r2g.com.au",
        },
        publisher: {
          "@type": "Organization",
          name: "R2G Transport & Storage",
          logo: {
            "@type": "ImageObject",
            url: "https://www.r2g.com.au/images/r2g-logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.r2g.com.au/blog/${post.slug}`,
        },
      },
      {
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.r2g.com.au/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-gray-500 mb-6"
          >
            <Link
              href="/"
              className="hover:text-[#F5C400] transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-3.5 h-3.5"
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
            <Link
              href="/blog"
              className="hover:text-[#F5C400] transition-colors"
            >
              Blog
            </Link>
            <svg
              className="w-3.5 h-3.5"
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
            <span className="text-[#F5C400] truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[#1A1A1A] bg-[#F5C400] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="text-sm text-gray-500">&middot;</span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── FEATURED IMAGE ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </article>

      {/* ── RELATED POSTS ─────────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related!.slug}
                  href={getPostUrl(related!)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#F5C400]/20 transition-all group"
                >
                  <div className="relative h-40">
                    <Image
                      src={related!.image}
                      alt={related!.imageAlt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-[#F5C400] bg-yellow-50 px-3 py-1 rounded-full">
                      {related!.category}
                    </span>
                    <h3 className="font-bold text-[#1A1A1A] mt-3 group-hover:text-[#F5C400] transition-colors">
                      {related!.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {related!.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICE LINKS ─────────────────────────────────────────────────── */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Services</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Removalists Cairns", href: "/removalists-cairns" },
              { label: "Removalists Brisbane", href: "/removalists-brisbane" },
              { label: "Removalists Gold Coast", href: "/removalists-gold-coast" },
              { label: "Removalists Sunshine Coast", href: "/removalists-sunshine-coast" },
              { label: "Interstate Removals", href: "/interstate-removalists" },
              { label: "Packing Services", href: "/packing-services-cairns" },
              { label: "Storage", href: "/storage-cairns" },
              { label: "Moving Boxes", href: "/boxes" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-200 hover:border-[#F5C400] hover:text-[#F5C400] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Book Your Move?"
        subtext="Get a free, no-obligation quote today and let our team handle the heavy lifting."
      />
    </>
  );
}
