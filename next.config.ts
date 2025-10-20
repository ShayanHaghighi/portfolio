import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // disables server-side image optimization
    },
  /* config options here */
};

export default nextConfig;
