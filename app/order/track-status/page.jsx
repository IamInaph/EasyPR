import React from 'react'
import TrackOrderPage from '@/templates/TrackOrderPage'
import { getOrderByOrderId } from '@/services/order'
import { getOrderPageData } from '@/services/orderpage'
import OrderWizardPage from '@/templates/OrderWizardPage'
import QueryString from 'qs'
import { getHomepageData } from '@/services/homepage'

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
		metadataBase: new URL('https://easyprwire.com'),
		title: HomeMeta.metaTitle,
		description: HomeMeta.metaDescription,
		alternates: {
			canonical: '/order/track-status',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/order/track-status',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

const page = async (props) => {
	const searchParams = props.searchParams
	// const homeData = await getHomepageData()

	const orderId = searchParams.orderId
	const toid = searchParams['thrivecart[order_id]']

	const orderDetail = !toid
		? await getOrderByOrderId(orderId)
		: await getOrderByOrderId(toid)

	if (!orderDetail)
		return (
			<div className='flex items-center justify-center min-h-screen bg-white'>
				No order details available
			</div>
		)

	return <OrderWizardPage orderDetail={orderDetail.data} />
}

export default page
