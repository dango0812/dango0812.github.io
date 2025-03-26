import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // dev.to media url
      {
        protocol: "https",
        hostname: "media2.dev.to"
      }
    ]
  }
};

export default nextConfig;
