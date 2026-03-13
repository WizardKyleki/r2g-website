import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ─── Existing redirects ──────────────────────────────────────
      {
        source: "/interstate-removals-cairns",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/office-removals",
        destination: "/office-removalists",
        permanent: true,
      },

      // ─── Old site pages (pre-rebuild URLs) ───────────────────────
      {
        source: "/get-a-quote",
        destination: "/quote",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/terms_and_conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/storage-in-brisbane",
        destination: "/storage-brisbane",
        permanent: true,
      },
      {
        source: "/interstate-removalists-brisbane",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/how-can-i-hire-professional-removalists-in-brisbane",
        destination: "/removalists-brisbane",
        permanent: true,
      },
      {
        source: "/brisbane/removalists-in-mount-gravatt",
        destination: "/removalists-brisbane/mt-gravatt",
        permanent: true,
      },
      {
        source: "/interstate-removalists/removalists-brisbane-to-cairns",
        destination: "/interstate-removalists",
        permanent: true,
      },

      // ─── Brisbane suburb slug fixes ──────────────────────────────
      {
        source: "/removalists-brisbane/mount-gravatt",
        destination: "/removalists-brisbane/mt-gravatt",
        permanent: true,
      },
      {
        source: "/removalists-brisbane/port-of-brisbane",
        destination: "/removalists-brisbane",
        permanent: true,
      },

      // ─── Old Cairns suburb pattern: /removalists/{slug} ──────────
      // Specific exceptions first (non-Cairns destinations)
      {
        source: "/removalists-kewarra-beach",
        destination: "/removalists-cairns",
        permanent: true,
      },
      {
        source: "/removalists",
        destination: "/removalists-cairns",
        permanent: true,
      },
      {
        source: "/removalists/sydney",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/removalists/toowoomba",
        destination: "/interstate-removalists",
        permanent: true,
      },
      // Wildcard: all remaining /removalists/{slug} → /removalists-cairns/{slug}
      {
        source: "/removalists/:slug",
        destination: "/removalists-cairns/:slug",
        permanent: true,
      },

      // ─── Old office-removalists suburb URLs ──────────────────────
      {
        source: "/office-removalists/cairns/:suburb",
        destination: "/office-removalists/cairns",
        permanent: true,
      },
      {
        source: "/office-removalists/brisbane/:suburb",
        destination: "/office-removalists/brisbane",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
