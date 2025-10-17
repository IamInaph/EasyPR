import RefundPolicyPage from '@/templates/RefundPolicyPage'
import { getRefundPolicyPageData } from '@/services/refundpage'

export async function generateMetadata() {
	const homeData = await getRefundPolicyPageData()
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
			canonical: '/refund-policy',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/refund-policy',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function RefundPolicy() {
	const refundData = await getRefundPolicyPageData()

	return <RefundPolicyPage refundData={refundData.data} />
}
