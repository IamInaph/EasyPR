import { getArchiveData } from '@/services/prarchive'
import ArchiveClient from '@/templates/PressReleasePage/Archive/ArchiveClient'
import React from 'react'

export async function generateMetadata() {
	const archiveData = await getArchiveData()
	const prMeta = archiveData.data.data.attributes.seo
	const imageList = archiveData.data.data.attributes.seo.metaImage.media.data

	const ogImages = imageList.map((img) => ({
		url: process.env.NEXT_PUBLIC_API_URL + img.attributes.url,
		width: img.attributes.width,
		height: img.attributes.height,
		alt: img.attributes.alternativeText || img.attributes.name,
	}))

	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: prMeta.metaTitle,
		description: prMeta.metaDescription,
		alternates: {
			canonical: '/press-release-archives',
		},
		openGraph: {
			type: 'website',
			locale: 'en_IE',
			url: 'https://easyprwire.com/press-release-archives',
			siteName: 'Easy PR',
			images: ogImages,
			twitter: {
				site: '@easyprco',
				cardType: 'summary_large_image',
			},
		},
	}
}

const PressReleaseArchivesPage = async () => {
	const archiveData = await getArchiveData()

	return <ArchiveClient archiveData={archiveData.data.data.attributes} />
}

export default PressReleaseArchivesPage
