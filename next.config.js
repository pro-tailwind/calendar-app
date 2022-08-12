/** @type {import('next').NextConfig} */
const nextConfig = {
  // There is currently a bug with `react-aria` which is fixed by removing strict mode :/
  // reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
