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
  output: 'standalone'
};

module.exports = nextConfig; 