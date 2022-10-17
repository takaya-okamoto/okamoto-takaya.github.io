/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/okamoto-takaya.github.io",
  trailingSlash: true,
};

module.exports = nextConfig;
