import PressReleasePage from '@/templates/PressReleasePage'
import { getHomepageData } from '@/services/homepage'

export async function generateMetadata() {
	const homeData = await getHomepageData()
	const HomeMeta = homeData.data.data.attributes.seo

	const imageList =
		homeData?.data?.data?.attributes?.seo?.metaImage?.media?.data

	const ogImages = imageList?.map((img) => ({
		url: process?.env?.NEXT_PUBLIC_API_URL + img?.attributes?.url,
		width: img?.attributes?.width,
		height: img?.attributes?.height,
		alt: img?.attributes?.alternativeText || img?.attributes?.name,
	}))
	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: HomeMeta.metaTitle,
		description: HomeMeta.metaDescription,
		alternates: {
			canonical: '/press-release',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/press-release',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function PressRelease() {
	const homeData = await getHomepageData()

	return <PressReleasePage homeData={homeData.data} />
}
