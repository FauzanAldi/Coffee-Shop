/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ]
  },
  images: {
    domains: [
      'i1.wp.com',
      'th.bing.com',
      'www.suarasurabaya.net',
      'www.pranataprinting.com'
    ],
  },
}

module.exports = nextConfig
