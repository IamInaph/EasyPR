import { getOrderPageData } from '@/services/orderpage'

import OrderPage from '@/templates/OrderPage'

export async function generateMetadata() {
	const orderPageData = await getOrderPageData()
	const HomeMeta = orderPageData.data.data.attributes.seo

	const imageList =
		orderPageData?.data?.data?.attributes?.seo?.metaImage?.media?.data

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
			canonical: '/order',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://www.easyprwire.com/order',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

const page = async () => {
	const orderPage = await getOrderPageData()

	const { writings, upgrades, networks, outlets, ...other } =
		orderPage.data.data.attributes

	const orderData = {
		writingPackages: writings,
		writingUpgrades: upgrades,
		publishingNetworks: networks,
		newsOutlets: outlets,
		pageData: other,
	}

	return <OrderPage {...orderData} />
}

export default page
