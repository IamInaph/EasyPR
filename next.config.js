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
}

module.exports = nextConfig
