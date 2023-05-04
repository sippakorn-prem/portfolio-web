/** @type {import('next').NextConfig} */

const path = require('path')
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production'
})

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src', path.join(__dirname, 'styles')],
    prependData: `@use 'variables' as *;`,
  },
}

module.exports = withPWA(nextConfig)
