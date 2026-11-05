import type { NextConfig } from "next";

// Static export for FTP hosting: security/cache headers live in public/.htaccess,
// and the locale redirect for "/" lives in public/index.html.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
