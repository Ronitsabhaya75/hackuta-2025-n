import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Disable build retries to fail fast
    buildActivityTimeout: 30000,
  }
};

export default nextConfig;
