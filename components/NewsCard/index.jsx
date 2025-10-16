'use client'
import React from 'react'
import { format } from 'date-fns'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '@/utils/media'

const NewsCard = (news) => {
	const newsItem = news?.news?.attributes
   // console.log("news items", news);
	return (
		<>
			<Link href={'/newsroom/' + newsItem?.slug}>
				<div className='card hover:shadow-lg duration-300 ease-in-out'>
					{newsItem?.image?.media && (
						<figure className='relative min-w-28 min-h-[16rem] block'>
							<Image
								src={getStrapiMedia(newsItem?.image?.media)}
								fill
								sizes='100vh'
								priority
								className='object-cover'
								alt={newsItem?.image.alt}
							/>
						</figure>
					)}
					<div className='border border-slate-200 py-8 px-6 rounded-br-2xl rounded-bl-2xl flex flex-col gap-5'>
						<div className='flex-col gap-3 flex'>
							<h3 className='text-2xl '>{newsItem?.title}</h3>
						</div>
						<div className='flex items-center justify-between'>
							<span className='pr-3 uppercase text-primary-400'>
								PR Services
							</span>
							<span className='text-gray-400 pl-3'>
								{format(new Date(newsItem?.createdAt), 'd MMM yyy')}
							</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default NewsCard
