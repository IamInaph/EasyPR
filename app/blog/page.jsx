import BlogPage from '@/templates/BlogPage'
import { getBlogData } from '@/services/blogpage'

export async function generateMetadata() {
	const aboutData = await getBlogData()
	const AboutMeta = aboutData.data.data.attributes.seo

	const imageList =
		aboutData?.data?.data?.attributes?.seo?.metaImage?.media?.data

	const ogImages = imageList?.map((img) => ({
		url: process?.env?.NEXT_PUBLIC_API_URL + img?.attributes?.url,
		width: img?.attributes?.width,
		height: img?.attributes?.height,
		alt: img?.attributes?.alternativeText || img?.attributes?.name,
	}))
	return {
		metadataBase: new URL('https://www.easyprwire.com'),
		title: AboutMeta.metaTitle,
		description: AboutMeta.metaDescription,
		alternates: {
			canonical: '/blog',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://www.easyprwire.com/blog',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function Blog() {
	const blogData = await getBlogData()
	return <BlogPage blogData={blogData.data} />
}
