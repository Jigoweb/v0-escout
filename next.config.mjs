/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Rewrite unexpected Vite client requests to a harmless JS placeholder
      { source: "/@vite/client", destination: "/_static/vite-client-placeholder.js" },
    ]
  },
}

export default nextConfig