/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Added for portfolio images
      },
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com', // R2 storage
      },
      {
        protocol: 'https',
        hostname: '**.r2.dev', // R2 public URLs
      },
    ],
    unoptimized: false, // Allow Next.js to optimize images
  },
  // Increase request body size limit for App Router
  experimental: {
    serverActions: {
      bodySizeLimit: '500mb',
    },
  },
};

export default nextConfig;





