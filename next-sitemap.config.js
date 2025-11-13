/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://easyprwire.com',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	generateIndexSitemap: true,
	changefreq: 'monthly',
	priority: 0.7,
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: 'weekly',
			priority: path === '/' ? 1.0 : 0.7,
			lastmod: new Date().toISOString(),
		}
	},
	exclude: ['/order/*', '/message-confirmation', '/api/*'],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/message-confirmation', '/order/', '/?_rsc='],
			},
		],
		additionalSitemaps: ['https://easyprwire.com/sitemap.xml'],
	},
	additionalPaths: async (config) => {
		const blogs = await fetch(
			'https://admin.easyprwire.xyz/api/blog-page/?populate=deep'
		).then((res) => res.json())

		const blogPages = blogs?.data?.attributes?.blogs?.data?.map((blog) => ({
			loc: `/blog/${blog?.attributes?.slug}`,
			lastmod: new Date(blog.attributes.updatedAt).toISOString() || Date.now(),
			changefreq: 'weekly',
			priority: 0.8,
		}))

		const newsrooms = await fetch(
			'https://admin.easyprwire.xyz/api/newsroom-page/?populate=deep'
		).then((res) => res.json())
		const newsPages = newsrooms?.data?.attributes?.newsrooms?.data.map(
			(news) => ({
				loc: `/newsroom/${news?.attributes?.slug}`,
				lastmod:
					new Date(news.attributes.updatedAt).toISOString() || Date.now(),
				changefreq: 'weekly',
				priority: 0.8,
			})
		)

		return [...blogPages, ...newsPages]
	},
}
