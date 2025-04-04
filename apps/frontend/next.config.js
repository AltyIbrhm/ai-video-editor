/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.com'], // Add any domains you'll load images from
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features we might need for video processing
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  // Optimize build output
  compress: true,
  poweredByHeader: false,
  // Configure environment variables to be available at build time
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  }
};

module.exports = nextConfig; 