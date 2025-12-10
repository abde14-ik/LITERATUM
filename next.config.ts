import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/LITERATUM", // MUST match your GitHub repo name exactly
  assetPrefix: "/LITERATUM/",
  trailingSlash: true,
};

export default nextConfig;
