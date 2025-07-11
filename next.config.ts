import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['api.hbjaws.com'],
    // 또는 remotePatterns 로 더 세밀하게:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hbjaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
