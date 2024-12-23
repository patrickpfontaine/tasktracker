import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: "/tasktracker",
  reactStrictMode: true,
  trailingSlash: true, // Adds trailing slashes for all paths
  assetPrefix: "/tasktracker/",
};

module.exports = nextConfig;
//export default nextConfig;
