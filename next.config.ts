import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow higher-quality optimized images for banners/photography.
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
