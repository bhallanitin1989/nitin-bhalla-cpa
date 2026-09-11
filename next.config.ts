import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages / any static host.
 * Prefer root deploy (username.github.io or a custom domain / Vercel).
 * For a project site at username.github.io/nitin-bhalla-cpa, set:
 *   basePath: '/nitin-bhalla-cpa',
 *   assetPrefix: '/nitin-bhalla-cpa',
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
