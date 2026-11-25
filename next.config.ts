import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v3.flowbite.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
