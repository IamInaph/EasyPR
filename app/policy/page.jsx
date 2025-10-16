import PolicyPage from '@/templates/PolicyPage'
import { getPolicyPageData } from '@/services/policypage'

export async function generateMetadata() {
	const homeData = await getPolicyPageData()
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
		metadataBase: new URL('https://www.easyprwire.com'),
		title: HomeMeta.metaTitle,
		description: HomeMeta.metaDescription,
		alternates: {
			canonical: '/policy',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://www.easyprwire.com/policy',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function Policy() {
	const policyData = await getPolicyPageData()

	return <PolicyPage policyData={policyData.data} />
}
