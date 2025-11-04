import ServicePage from '@/templates/ServicePage'
import { getServicePageData } from '@/services/servicepage'
import { getHomepageData } from '@/services/homepage'

export async function generateMetadata() {
	const serviceData = await getServicePageData()
	const serviceMeta = serviceData?.data?.data?.attributes?.seo

	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: serviceMeta?.metaTitle,
		description: serviceMeta?.metaDescription,
		alternates: {
			canonical: '/service',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/service',
			siteName: 'Easy PR',
		},
	}
}

export default async function Service() {
	const serviceData = await getServicePageData()
	const homeData = await getHomepageData();

	const partner = homeData.data.data.attributes.content.filter((content) => {
		return content?.section?.uid === "brands";
	});

	return <ServicePage serviceData={serviceData?.data} partner={partner[0]} />
}