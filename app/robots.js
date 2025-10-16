export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: 'https://www.easyprwire.com/sitemap.xml',
		website: 'https://www.easyprwire.com/',
	}
}
