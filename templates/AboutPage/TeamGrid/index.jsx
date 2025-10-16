import { Card, CardContent } from '@/components/ui/card'
import { getStrapiMedia } from '@/utils/media'
import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TeamGrid = ({ teams }) => {
	const teamMembers = [
		{
			id: 1,
			name: 'Sarah Mitchell',
			role: 'CEO & Founder',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'sarah@easypr.com',
			},
		},
		{
			id: 2,
			name: 'Marcus Rodriguez',
			role: 'Head of Editorial',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'marcus@easypr.com',
			},
		},
		{
			id: 3,
			name: 'Jennifer Chen',
			role: 'Distribution Manager',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'jennifer@easypr.com',
			},
		},
		{
			id: 4,
			name: 'David Thompson',
			role: 'Senior PR Strategist',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'david@easypr.com',
			},
		},
		{
			id: 5,
			name: 'Lisa Park',
			role: 'Content Writer',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'lisa@easypr.com',
			},
		},
		{
			id: 6,
			name: 'Robert Kim',
			role: 'Media Relations Specialist',
			image: '/assets/team.jpg',
			social: {
				linkedin: '#',
				email: 'robert@easypr.com',
			},
		},
	]

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{teams?.map((member) => (
					<Card
						key={member?.id}
						className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-[10px]'
					>
						<CardContent className='p-0'>
							{/* Image Container */}
							<div className='relative overflow-hidden'>
								<img
									src={getStrapiMedia(member?.Image) || '/placeholder.svg'}
									alt={member.Name}
									className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								{/* Gradient Overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

								{/* Social Icons - Appear on Hover */}
								<div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
									{member?.linked_in_url && (
										<Link
											href={member?.linked_in_url}
											size='sm'
											target='_blank'
											className='p-2 h-auto bg-white/90 hover:bg-white text-primary-500 shadow-lg'
										>
											<Linkedin className='h-4 w-4' />
										</Link>
									)}
									{member?.Email && (
										<Link
											href={`mailto:${member?.Email}`}
											size='sm'
											target='_blank'
											className='p-2 h-auto bg-white/90 hover:bg-white text-primary-500 shadow-lg'
										>
											<Mail className='h-4 w-4' />
										</Link>
									)}
								</div>
							</div>

							{/* Content */}
							<div className='p-6'>
								<div className='text-center'>
									<h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors'>
										{member?.Name}
									</h3>
									<p className='text-primary-500 font-medium'>
										{member?.Designation}
									</p>
								</div>
							</div>

							{/* Bottom Border Accent */}
							<div className='h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

export default TeamGrid
