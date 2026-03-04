import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
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
