import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
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
    ];
  },
  async rewrites() {
    return [
      {
        source: "/removalists-:suburb",
        destination: "/removalists/:suburb",
      },
    ];
  },
};

export default nextConfig;
