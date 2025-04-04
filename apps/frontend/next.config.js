/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'  // Needed for video upload
    }
  },
  distDir: '.next',
  output: 'standalone',
  // Disable static optimization for all routes
  staticPageGenerationTimeout: 300,
  // Configure output for Server-Side Rendering instead of Static Generation
  output: 'server',
};

module.exports = nextConfig; 