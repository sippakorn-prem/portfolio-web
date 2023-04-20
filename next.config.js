/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/globals.module.scss";`,
  },
}

module.exports = nextConfig
