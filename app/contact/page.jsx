import { API_BASE_URL } from '@/constants'
import { getContactCMSData } from '@/services/contactpage'
import { getHomepageData } from '@/services/homepage'
import ContactPage from '@/templates/ContactPage'

const fetchContactMetadata = async () => {
	try {
		const res = await fetch(
			`${process.env.API_URL}/api/contact-page?populate=*`,
			{
				cache: 'no-store',
			}
		)
		const data = await res.json()

		return data
	} catch (error) {
		console.log('[CONTACT_META]', error)
	}
}
export async function generateMetadata() {
	const contactData = await fetchContactMetadata()
	const contactMeta = contactData?.data?.attributes?.seo
	const imageList = contactMeta?.metaImage?.media?.data

	const ogImages = imageList?.map((img) => ({
		url: process?.env?.API_URL + img?.attributes?.url,
		width: img?.attributes?.width,
		height: img?.attributes?.height,
		alt: img?.attributes?.alternativeText || img?.attributes?.name,
	}))
	return {
		metadataBase: new URL('https://www.easyprwire.com'),
		title:
			contactMeta?.metaTitle ||
			'Contact Us | Publish your News, Stories & More | EasyPRwire',
		description:
			contactMeta?.metaDescription ||
			'Have questions or need assistance? Contact EasyPRWire for seamless press release distribution in USA and more. Publish your news, stories and more today!',
		alternates: {
			canonical: '/contact',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://www.easyprwire.com/contact',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

export default async function Contact() {
	const contactData = await getContactCMSData()

	return <ContactPage content={contactData?.data?.data?.attributes} />
}
