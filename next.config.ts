import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [],
  },
  experimental: {
    // optimizePackageImports keeps bundles lean for lucide/date-fns if used
    optimizePackageImports: ["lucide-react", "date-fns"],
  },
};

export default nextConfig;
