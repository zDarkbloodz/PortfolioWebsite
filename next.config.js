/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
}

module.exports = nextConfig
