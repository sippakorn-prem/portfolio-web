/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@use 'globals' as *;`,
  },
}

module.exports = nextConfig
