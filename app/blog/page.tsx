import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getAllBlogPosts, getPostUrl } from "@/data/blog-posts";
import BlogGrid from "./BlogGrid";

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

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const posts = allPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    imageAlt: post.imageAlt,
    category: post.category,
    readTime: post.readTime,
    date: post.date,
    href: getPostUrl(post),
  }));

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

      <BlogGrid posts={posts} />

      <CTABanner
        heading="Ready to Book Your Move?"
        subtext="Get a free, no-obligation quote today and let our team handle the heavy lifting."
      />
    </>
  );
}
