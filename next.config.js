/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio-page" : "",
  trailingSlash: true,
}

module.exports = nextConfig
