import Layout from '@/components/Layout'
import { getHomepageData } from '@/services/homepage'
import Plan from '@/templates/HomePage/Plan'
import React from 'react'

export async function generateMetadata() {
	const homeData = await getHomepageData()
	const HomeMeta = homeData.data.data.attributes.seo
	const imageList = homeData.data.data.attributes.seo.metaImage.media.data

	const ogImages = imageList.map((img) => ({
		url: process.env.NEXT_PUBLIC_API_URL + img.attributes.url,
		width: img.attributes.width,
		height: img.attributes.height,
		alt: img.attributes.alternativeText || img.attributes.name,
	}))

	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: HomeMeta.metaTitle,
		description: HomeMeta.metaDescription,
		alternates: {
			canonical: '/pricings',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

const PricingsPage = async () => {
	const homeData = await getHomepageData()

	const plan = homeData?.data?.data?.attributes?.content?.filter((content) => {
		return content?.section?.uid === 'pricing'
	})

	return (
		<Layout>
			<Plan plan={plan[0]} indiePage={true} />
		</Layout>
	)
}

export default PricingsPage
