import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ─── Existing redirects ──────────────────────────────────────
      // Note: /interstate-removals-cairns has its own page file - redirect removed
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
        destination: "/blog/hiring-professional-removalists-brisbane",
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
        destination: "/removalists-brisbane/northside",
        permanent: true,
      },
      {
        source: "/removalists/brisbane-southside",
        destination: "/removalists-brisbane/southside",
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

      // ─── Old WordPress blog posts → new blog posts ────────────
      {
        source: "/weekend-vs-weekday-moving-when-is-the-best-time-to-hire-brisbane-removalists",
        destination: "/blog/best-time-to-move-brisbane",
        permanent: true,
      },
      {
        source: "/how-to-get-the-right-removalists-brisbane",
        destination: "/blog/how-to-choose-removalists-brisbane",
        permanent: true,
      },
      {
        source: "/finding-the-reliable-brisbane-removalists-for-your-next-move-to-a-new-home",
        destination: "/blog/finding-reliable-removalists-brisbane",
        permanent: true,
      },
      {
        source: "/how-hiring-professional-removalists-in-brisbane-saves-you-time-and-money",
        destination: "/blog/hiring-professional-removalists-brisbane",
        permanent: true,
      },
      {
        source: "/moving-company-in-brisbane-what-are-the-different-types-of-services-available",
        destination: "/blog/types-of-moving-services-brisbane",
        permanent: true,
      },
      {
        source: "/8-tips-to-move-your-office-smoothly-with-removalists-brisbane",
        destination: "/blog/office-moving-tips-brisbane",
        permanent: true,
      },

      // ─── Old WordPress pages & misc legacy URLs ────────────────
      {
        source: "/removalists-innisfail",
        destination: "/removalists-cairns/innisfail",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/cairns-promo",
        destination: "/removalists-cairns",
        permanent: true,
      },
      {
        source: "/afra-australian-furniture-removers-association",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us/:path*",
        destination: "/contact",
        permanent: true,
      },

      // ─── More dead interstate routes from GSC ──────────────────
      {
        source: "/interstate-removalists/brisbane-to-bundaberg",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-hervey-bay",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-gladstone",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-byron-bay",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-mackay",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-sunshine-coast",
        destination: "/interstate-removalists",
        permanent: true,
      },

      // ─── Dead interstate routes from GSC (Mar 2026) ────────────
      {
        source: "/interstate-removalists/cairns-to-mount-isa",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-mackay",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-atherton",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-innisfail",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-tully",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-cardwell",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-mission-beach",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-port-douglas",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/cairns-to-kuranda",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/brisbane-to-ipswich",
        destination: "/interstate-removalists",
        permanent: true,
      },
      {
        source: "/interstate-removalists/gold-coast-to-brisbane",
        destination: "/interstate-removalists",
        permanent: true,
      },

      // ─── Old root-level Cairns suburb pages (WordPress legacy) ──
      // Original suburbs (suburbs.ts)
      {
        source: "/innisfail",
        destination: "/removalists-cairns/innisfail",
        permanent: true,
      },
      {
        source: "/edmonton",
        destination: "/removalists-cairns/edmonton",
        permanent: true,
      },
      {
        source: "/mossman",
        destination: "/removalists-cairns/mossman",
        permanent: true,
      },
      {
        source: "/mareeba",
        destination: "/removalists-cairns/mareeba",
        permanent: true,
      },
      {
        source: "/gordonvale",
        destination: "/removalists-cairns/gordonvale",
        permanent: true,
      },
      {
        source: "/babinda",
        destination: "/removalists-cairns/babinda",
        permanent: true,
      },
      {
        source: "/atherton",
        destination: "/removalists-cairns/atherton",
        permanent: true,
      },
      {
        source: "/port-douglas",
        destination: "/removalists-cairns/port-douglas",
        permanent: true,
      },
      {
        source: "/palm-cove",
        destination: "/removalists-cairns/palm-cove",
        permanent: true,
      },
      {
        source: "/trinity-beach",
        destination: "/removalists-cairns/trinity-beach",
        permanent: true,
      },
      {
        source: "/clifton-beach",
        destination: "/removalists-cairns/clifton-beach",
        permanent: true,
      },
      {
        source: "/yorkeys-knob",
        destination: "/removalists-cairns/yorkeys-knob",
        permanent: true,
      },
      {
        source: "/machans-beach",
        destination: "/removalists-cairns/machans-beach",
        permanent: true,
      },
      {
        source: "/holloways-beach",
        destination: "/removalists-cairns/holloways-beach",
        permanent: true,
      },
      {
        source: "/smithfield",
        destination: "/removalists-cairns/smithfield",
        permanent: true,
      },
      {
        source: "/redlynch",
        destination: "/removalists-cairns/redlynch",
        permanent: true,
      },
      {
        source: "/freshwater",
        destination: "/removalists-cairns/freshwater",
        permanent: true,
      },
      {
        source: "/whitfield",
        destination: "/removalists-cairns/whitfield",
        permanent: true,
      },
      {
        source: "/edge-hill",
        destination: "/removalists-cairns/edge-hill",
        permanent: true,
      },
      {
        source: "/kuranda",
        destination: "/removalists-cairns/kuranda",
        permanent: true,
      },
      // Inner/south Cairns suburbs
      {
        source: "/earlville",
        destination: "/removalists-cairns/earlville",
        permanent: true,
      },
      {
        source: "/westcourt",
        destination: "/removalists-cairns/westcourt",
        permanent: true,
      },
      {
        source: "/woree",
        destination: "/removalists-cairns/woree",
        permanent: true,
      },
      {
        source: "/manunda",
        destination: "/removalists-cairns/manunda",
        permanent: true,
      },
      {
        source: "/manoora",
        destination: "/removalists-cairns/manoora",
        permanent: true,
      },
      {
        source: "/mooroobool",
        destination: "/removalists-cairns/mooroobool",
        permanent: true,
      },
      {
        source: "/kanimbla",
        destination: "/removalists-cairns/kanimbla",
        permanent: true,
      },
      {
        source: "/parramatta-park",
        destination: "/removalists-cairns/parramatta-park",
        permanent: true,
      },
      {
        source: "/bungalow",
        destination: "/removalists-cairns/bungalow",
        permanent: true,
      },
      {
        source: "/stratford",
        destination: "/removalists-cairns/stratford",
        permanent: true,
      },
      {
        source: "/bentley-park",
        destination: "/removalists-cairns/bentley-park",
        permanent: true,
      },
      {
        source: "/brinsmead",
        destination: "/removalists-cairns/brinsmead",
        permanent: true,
      },
      {
        source: "/caravonica",
        destination: "/removalists-cairns/caravonica",
        permanent: true,
      },
      {
        source: "/bayview-heights",
        destination: "/removalists-cairns/bayview-heights",
        permanent: true,
      },
      {
        source: "/mount-sheridan",
        destination: "/removalists-cairns/mount-sheridan",
        permanent: true,
      },
      {
        source: "/white-rock",
        destination: "/removalists-cairns/white-rock",
        permanent: true,
      },
      {
        source: "/aeroglen",
        destination: "/removalists-cairns/aeroglen",
        permanent: true,
      },
      {
        source: "/portsmith",
        destination: "/removalists-cairns/portsmith",
        permanent: true,
      },
      // Regional towns
      {
        source: "/tully",
        destination: "/removalists-cairns/tully",
        permanent: true,
      },
      {
        source: "/cardwell",
        destination: "/removalists-cairns/cardwell",
        permanent: true,
      },
      {
        source: "/mission-beach",
        destination: "/removalists-cairns/mission-beach",
        permanent: true,
      },
      {
        source: "/mourilyan",
        destination: "/removalists-cairns/mourilyan",
        permanent: true,
      },
      {
        source: "/malanda",
        destination: "/removalists-cairns/malanda",
        permanent: true,
      },
      {
        source: "/cooktown",
        destination: "/removalists-cairns/cooktown",
        permanent: true,
      },
      {
        source: "/daintree",
        destination: "/removalists-cairns/daintree",
        permanent: true,
      },
      {
        source: "/ingham",
        destination: "/removalists-cairns/ingham",
        permanent: true,
      },
      {
        source: "/silkwood",
        destination: "/removalists-cairns/silkwood",
        permanent: true,
      },
      {
        source: "/ravenshoe",
        destination: "/removalists-cairns/ravenshoe",
        permanent: true,
      },
      {
        source: "/herberton",
        destination: "/removalists-cairns/herberton",
        permanent: true,
      },
      {
        source: "/tolga",
        destination: "/removalists-cairns/tolga",
        permanent: true,
      },
      {
        source: "/lake-placid",
        destination: "/removalists-cairns/lake-placid",
        permanent: true,
      },
      {
        source: "/ellis-beach",
        destination: "/removalists-cairns/ellis-beach",
        permanent: true,
      },
      {
        source: "/barron",
        destination: "/removalists-cairns/barron",
        permanent: true,
      },
      {
        source: "/mount-peter",
        destination: "/removalists-cairns/mount-peter",
        permanent: true,
      },

      // ─── WordPress RSS feed URLs ───────────────────────────────
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:slug/feed",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
