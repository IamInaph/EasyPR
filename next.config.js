/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'default',
		domains: [
			'res.cloudinary.com',
			'127.0.0.1',
			'localhost',
			'admin.easyprwire.xyz',
			'admin.easyprwire.com',
			'admin.easyprwire.xyzundefined',
		],
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'www.easyprwire.com',
					},
				],
				destination: 'https://easyprwire.com/:path*',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
