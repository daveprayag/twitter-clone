/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["about.twitter.com", "upload.wikimedia.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
