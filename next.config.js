/** @type {import('next').NextConfig} */

const path = require('path');

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV !== 'production',
});

const nextConfig = {
	transpilePackages: ['geist'],
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},
};

module.exports = withPWA(nextConfig);
