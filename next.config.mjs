/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
