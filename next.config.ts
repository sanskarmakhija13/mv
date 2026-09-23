import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiml-manfestvarchasva.com",
      },
      {
        protocol: "https",
        hostname: "www.iiml-manfestvarchasva.com",
      },
    ],
  },
};

export default nextConfig;
