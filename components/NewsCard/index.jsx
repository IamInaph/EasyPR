'use client'
import React from 'react'
import { format } from 'date-fns'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import { getMediaUrl } from '@/utils/media'

const NewsCard = ({ news }) => {
	// Updated to work with new API format
   // console.log("news items", news);
	return (
		<>
			<Link href={'/newsroom/' + news?.slug}>
				<div className='card hover:shadow-lg duration-300 ease-in-out'>
					{news?.banner_image && (
						<figure className='relative min-w-28 min-h-[16rem] block'>
							<Image
								src={getMediaUrl(news?.banner_image)}
								fill
								sizes='100vh'
								priority
								className='object-cover'
								alt={news?.banner_image_alt || "News image"}
							/>
						</figure>
					)}
					<div className='border border-slate-200 py-8 px-6 rounded-br-2xl rounded-bl-2xl flex flex-col gap-5'>
						<div className='flex-col gap-3 flex'>
							<h3 className='text-2xl '>{news?.title}</h3>
						</div>
						<div className='flex items-center justify-between'>
							<span className='pr-3 uppercase text-primary-400'>
								PR Services
							</span>
							<span className='text-gray-400 pl-3'>
								{format(new Date(news?.created_at), 'd MMM yyy')}
							</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default NewsCard
