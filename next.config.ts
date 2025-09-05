import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
