import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gdi", // MUST match your GitHub repo name exactly
  assetPrefix: "/gdi/",
  trailingSlash: true,
};

export default nextConfig;
