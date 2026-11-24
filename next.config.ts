/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  reactStrictMode: true,
  // The invoice PDF is built on the server and reads the logo from disk.
  outputFileTracingIncludes: {
    "/api/send-invoice": ["./public/logo192.png"],
  },
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
