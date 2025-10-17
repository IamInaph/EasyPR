import AboutPage from '@/templates/AboutPage'
import { getAboutPageData } from '@/services/aboutpage'

export async function generateMetadata() {
	const aboutData = await getAboutPageData()
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
		metadataBase: new URL('https://easyprwire.com'),
		title: AboutMeta.metaTitle,
		description: AboutMeta.metaDescription,
		alternates: {
			canonical: '/about',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/about',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function About() {
	const aboutData = await getAboutPageData()

	return <AboutPage aboutData={aboutData?.data} />
}
