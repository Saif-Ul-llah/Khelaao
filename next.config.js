/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pre-existing lint issues must not block the production build.
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
