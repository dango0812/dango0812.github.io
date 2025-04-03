import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
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
