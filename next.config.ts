// node
import path from "path";
// next
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "styles"),
    };

    return config;
  }
};

export default nextConfig;
