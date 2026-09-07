/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Build only the runtime files that production needs.
  output: "standalone",
  turbopack: {
    // Keep file watching and cache invalidation inside this project.
    root: process.cwd(),
  },
  experimental: {
    // Lucide exports a large icon catalogue; compile only icons used by a route.
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // WebP avoids AVIF's expensive first-request encoding on the server.
    formats: ["image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
  async redirects() {
    return [
      { source: "/services/ai-automation-ai-integration", destination: "/ai-automation", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blogs", destination: "/insights", permanent: true },
      { source: "/projects", destination: "/case-studies", permanent: true },
      { source: "/pricing", destination: "/engagement-models", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
    ];
  },
};
export default nextConfig;
