import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio", // MUST match your GitHub repo name exactly
  assetPrefix: "/portfolio/",
  trailingSlash: true,
};

export default nextConfig;
