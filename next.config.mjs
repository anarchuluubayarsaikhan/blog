/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
};

export default nextConfig;
