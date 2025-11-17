import NewsRoomPage from '@/templates/NewsRoomPage'
import { getNewsRoomData } from '@/services/newsroom'

export async function generateMetadata() {
	const newsRoomData = await getNewsRoomData()
	const seo = newsRoomData.seo

	const ogImage = seo?.meta_image
		? process?.env?.NEXT_PUBLIC_API_URL + seo.meta_image
		: null

	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: seo.meta_title,
		description: seo.meta_description,
		alternates: {
			canonical: '/newsroom',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/newsroom',
			siteName: 'Easy PR',
			images: ogImage ? [{ url: ogImage }] : [],
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function NewsRoom() {
	const newsData = await getNewsRoomData()

	return <NewsRoomPage newsData={newsData} />
}
