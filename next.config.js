/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@use 'variables' as *;`,
  },
}

module.exports = nextConfig
