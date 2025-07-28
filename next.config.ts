import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://10.214.112.143:3000'],
  webpack(config) {
    // Alias para `@/src`
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;