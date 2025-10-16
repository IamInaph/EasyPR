'use client'

import { Card, CardContent } from '@/components/ui/card'
import { getStrapiMedia } from '@/utils/media'
import { Calendar, ExternalLink, Globe } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ArchiveCard = ({ release }) => {
	const [metaData, setMetaData] = useState(null)

	useEffect(() => {
		const scrapeUrl = async () => {
			try {
				const response = await fetch(`/api/fetch-meta?url=${release?.URL}`)
				const metadata = await response.json()

				setMetaData(metadata)
			} catch (error) {
				console.log('[SCRAPE]', error)
			}
		}

		if (release) {
			scrapeUrl()
		}
	}, [release])

	return (
		<Card className='bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl shadow-md'>
			<CardContent className='p-0 h-full'>
				{/* Image */}
				<div className='relative overflow-hidden'>
					<img
						src={
							release?.custom_image?.data
								? getStrapiMedia(release?.custom_image)
								: metaData?.image
						}
						alt={release?.custom_title || metaData?.title}
						className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />

					{/* Source & Date */}
					<div className='absolute bottom-4 left-4 right-4'>
						<div className='flex items-center justify-between text-white text-sm'>
							<div className='flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-[8px] px-3 py-1'>
								<Globe className='h-3 w-3' />
								<span className='font-medium'>
									{release?.source || metaData?.source}
								</span>
							</div>
							<div className='flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-[8px] px-3 py-1'>
								<Calendar className='h-3 w-3' />
								<span>
									{release?.custom_date
										? new Date(release?.custom_date).toLocaleDateString()
										: new Date(metaData?.date).toLocaleDateString()}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className='p-6 flex flex-col justify-between gap-2 h-full max-h-[250px]'>
					<div>
						<h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors leading-tight'>
							{release?.custom_title || metaData?.title}
						</h3>

						<p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
							{release?.custom_summary || metaData?.summary}
						</p>
					</div>

					{/* Action */}
					<div>
						<button
							size='sm'
							variant='outline'
							className='flex-1 border py-2 px-1 border-primary-400 text-primary-500 hover:bg-gray-50 rounded-[8px] bg-transparent w-full'
							onClick={() => window.open(release?.URL, '_blank')}
						>
							<ExternalLink className='h-4 w-4 mr-2' />
							View Original
						</button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default ArchiveCard
