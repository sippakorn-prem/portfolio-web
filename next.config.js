/** @type {import('next').NextConfig} */

const path = require('path');

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV !== 'production',
});

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		prependData: `@use 'globals' as *;`,
	},
};

module.exports = withPWA(nextConfig);
