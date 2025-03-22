import type { NextConfig } from "next";
import withTM from "next-transpile-modules";

const nextConfig: NextConfig = withTM(["@packages/ui"])({
  reactStrictMode: true
});

export default nextConfig;
