'use client'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { getStrapiMedia } from '@/utils/media'
import Markdown from 'react-markdown'
import Started from '../HomePage/Started'
import TeamGrid from './TeamGrid'

export default function AboutPage({ aboutData }) {
	const about = aboutData?.data?.attributes

	return (
		<Layout>
			<section className='bg-slate-50'>
				<div className='container'>
					<div className='max-w-3xl'>
						<h1>{about?.title}</h1>
					</div>
				</div>
			</section>

			<section className='py-12 pb-0'>
				<div className='container'>
					<div className='max-w-4xl mx-auto'>
						<article className='content-template prose prose-lg max-w-none'>
							<Markdown
								components={{
									img: ({ src, alt, title }) => (
										<div className='relative aspect-video w-full my-8'>
											<Image
												src={src}
												alt={alt || ''}
												title={title}
												fill
												className='object-cover rounded-xl'
												sizes='(max-width: 768px) 100vw, 1200px'
											/>
										</div>
									),
									h1: ({ children }) => (
										<h1 className='text-4xl font-bold mb-6'>{children}</h1>
									),
									h2: ({ children }) => (
										<h2 className='text-3xl font-bold mb-4 mt-8'>{children}</h2>
									),
									h3: ({ children }) => (
										<h3 className='text-2xl font-bold mb-3 mt-6'>{children}</h3>
									),
									p: ({ children }) => (
										<p className='text-lg mb-4 leading-relaxed'>{children}</p>
									),
									ul: ({ children }) => (
										<ul className='list-disc pl-6 mb-4 space-y-2'>
											{children}
										</ul>
									),
									li: ({ children }) => <li className='text-lg'>{children}</li>,
								}}
							>
								{about?.content}
							</Markdown>
						</article>
					</div>
				</div>

				<div className='text-center max-w-lg mx-auto mt-32 mb-8'>
					<span className='text-key'>Team</span>
					<h2>Meet the Team Behind EasyPR</h2>
					<span>
						Improve SEO, build credibility, and attract real traffic from
						trusted media sites like Google News, Yahoo, and MSN with our expert
						team.
					</span>
				</div>

				<TeamGrid teams={about?.Members} />
			</section>

			<Started />
		</Layout>
	)
}
