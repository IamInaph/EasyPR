import React from 'react'
import BlogSingle from '@/templates/BlogSingle'
import { getBlogData, getBlogSEOData } from '@/services/blogpage'

export async function generateMetadata({ params }) {
	const fetchBlogs = async () => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/blog-page/?populate=deep`
			)
			const data = await res.json()

			return data
		} catch (error) {
			console.log('[BLOG_DETAILS]', error)
		}
	}

	const blogPageData = await fetchBlogs()

	const blogs = blogPageData?.data?.attributes?.blogs?.data // <-- this is the array
	if (!Array.isArray(blogs)) {
		return {
			title: 'Invalid Data',
			description: 'Could not fetch blog metadata.',
		}
	}

	const currentBlog = blogs?.find(
		(item) => item.attributes.slug === params.slug
	)

	if (!currentBlog) {
		return {
			title: 'Blog',
			description: 'The requested blog could not be found.',
		}
	}

	const seo = currentBlog.attributes.seo
	
	const imageUrl =
		currentBlog.attributes.image?.url ||
		'https://res.cloudinary.com/dbhgrickp/image/upload/v1720070017/website-opener_na7bu9.jpg'

	const imageList = currentBlog?.attributes?.seo?.metaImage?.media?.data

	const ogImages = imageList?.map((img) => ({
		url: process?.env?.NEXT_PUBLIC_API_URL + img?.attributes?.url,
		width: img?.attributes?.width,
		height: img?.attributes?.height,
		alt: img?.attributes?.alternativeText || img?.attributes?.name,
	}))

	return {
		metadataBase: new URL('https://easyprwire.com'),
		title: seo?.metaTitle || currentBlog.attributes.title,
		description: seo?.metaDescription || 'Read the full article on EasyPRWire.',
		alternates: {
			canonical: `/blog/${params.slug}`,
		},
		openGraph: {
			type: 'article',
			locale: 'en_IE',
			url: `https://easyprwire.com/blog/${params.slug}`,
			siteName: 'Easy PR',
			title: seo?.metaTitle || currentBlog.attributes.title,
			description: seo?.metaDescription,
			images: ogImages,
		},
		twitter: {
			site: '@easyprco',
			cardType: 'summary_large_image',
			title: seo?.metaTitle || currentBlog.attributes.title,
			description: seo?.metaDescription,
			images: [imageUrl],
		},
	}
}

export default async function Post({ params }) {
	const blogData = await getBlogData()

	return (
		<>
			<BlogSingle blogData={blogData.data} params={params} />
		</>
	)
}
