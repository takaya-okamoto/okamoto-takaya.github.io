/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/portfolio-page",
  trailingSlash: true,
};

module.exports = nextConfig
