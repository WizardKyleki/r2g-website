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

      // ─── Old WordPress /brisbane/removalists-in-{suburb} pattern ──
      {
        source: "/brisbane/removalists-in-corparoo",
        destination: "/removalists-brisbane/coorparoo",
        permanent: true,
      },
      {
        source: "/brisbane/removalists-in-:suburb",
        destination: "/removalists-brisbane/:suburb",
        permanent: true,
      },

      // ─── Old WordPress /brisbane-removalists URL (high impressions) ─
      {
        source: "/brisbane-removalists",
        destination: "/removalists-brisbane",
        permanent: true,
      },

      // ─── Old WordPress misc URLs ───────────────────────────────
      {
        source: "/altherton-removalists",
        destination: "/removalists-cairns",
        permanent: true,
      },
      {
        source: "/local-removalists-brisbane-promo",
        destination: "/removalists-brisbane",
        permanent: true,
      },
      {
        source: "/brisbane-to-cairns-removalists",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:slug",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/how-can-i-hire-professional-removalists-in-brisbane/feed",
        destination: "/removalists-brisbane",
        permanent: true,
      },
      {
        source: "/weekend-vs-weekday-moving-when-is-the-best-time-to-hire-brisbane-removalists/feed",
        destination: "/blog",
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
      {
        source: "/removalists/gold-coast",
        destination: "/removalists-gold-coast",
        permanent: true,
      },
      {
        source: "/removalists/sunshine-coast",
        destination: "/removalists-sunshine-coast",
        permanent: true,
      },
      {
        source: "/removalists/brisbane-northside",
        destination: "/removalists-brisbane",
        permanent: true,
      },
      {
        source: "/removalists/brisbane-southside",
        destination: "/removalists-brisbane",
        permanent: true,
      },
      {
        source: "/removalists/gold-coast-to-ballina",
        destination: "/interstate-removalists",
        permanent: true,
      },
      // Wildcard: all remaining /removalists/{slug} → /removalists-cairns/{slug}
      {
        source: "/removalists/:slug",
        destination: "/removalists-cairns/:slug",
        permanent: true,
      },

      // ─── Old interstate route URLs (dead pages not in ROUTES) ───
      {
        source: "/interstate-removalists/brisbane-to-newcastle",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-townsville",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-coffs-harbour",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-port-macquarie",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-ballina",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-rockhampton",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/ipswich-to-rockhampton",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/new-south-wales",
        destination: "/interstate-removalists",
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
