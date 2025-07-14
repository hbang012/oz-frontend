// next.config.ts
import type { NextConfig } from 'next';

// 외부 url을 사용한 데이터 이미지일 경우 악의적인 사용자로 부터 보호하기위해
// 특정 도메인의 이미지만 사용가능하도록 설정
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hbjaws.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.hbjaws.com',
        port: '',
        pathname: '/images-more/**',
      },
    ],
  },
};

export default nextConfig;
