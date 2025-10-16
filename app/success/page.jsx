import { getOrderByOrderId } from '@/services/order'
import SuccessPage from '@/templates/SuccessPage'
import Link from 'next/link'

export async function generateMetadata() {
	return {
		metadataBase: new URL('https://www.easyprwire.com'),
		title: 'Press Release Submitted Successfully | EasyPRWire',
		description:
			'Your press release has been submitted successfully. Our team will review it shortly. Expect publication within 24 hours.',
		alternates: {
			canonical: '/success',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://www.easyprwire.com/success',
			siteName: 'Easy PR',
			images: [
				{
					url: 'https://res.cloudinary.com/dbhgrickp/image/upload/v1720070017/website-opener_na7bu9.jpg',
					width: 850,
					height: 650,
					alt: 'Easy PR Banner',
				},
			],
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function Success(props) {
	const { searchParams } = props
	const orderId = searchParams.id // Capture the order ID from the URL query parameters

	const orderDetail = await getOrderByOrderId(orderId)

	if (!orderDetail) {
		return (
			<div className='flex items-center justify-center min-h-screen bg-white'>
				No order details available
			</div>
		)
	}

	return <SuccessPage orderDetail={orderDetail.data} />
}
