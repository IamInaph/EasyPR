import Layout from '@/components/Layout'
import { FileText, Link, Search } from 'lucide-react'
import React from 'react'
import ArchiveCard from '../ArchiveCard'

const ArchiveClient = ({ archiveData }) => {

	return (
		<Layout>
			<div className='my-10'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='flex items-center justify-between'>
						<div>
							<h1 className='text-4xl font-bold text-gray-900 flex items-center gap-4'>
								<div className='p-3 bg-teal-500 rounded-xl shadow-lg'>
									<FileText className='h-8 w-8 text-white' />
								</div>
								{archiveData?.Heading}
							</h1>
							<p className='text-xl text-gray-600 mt-3 max-w-2xl'>
								{archiveData?.Subheading}
							</p>
						</div>
					</div>
				</div>
			</div>

			{archiveData?.Archives?.length > 0 && (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32 container'>
					{archiveData?.Archives?.map((release) => (
						<ArchiveCard release={release} key={release.id} />
					))}
				</div>
			)}

			{archiveData?.Archives?.length === 0 && (
				<div className='text-center pb-16'>
					<div className='p-2 bg-gray-100 rounded-full aspect-square max-w-20 mx-auto mb-6 flex justify-center items-center'>
						<Link className='h-8 w-8 text-gray-400 mx-auto' />
					</div>
					<h3 className='text-2xl font-bold text-gray-900 mb-3'>
						No archives found
					</h3>
					<p className='text-gray-600 mb-8 max-w-md mx-auto'>
						Try revisiting us at a later date to surf through our archives.
					</p>
				</div>
			)}
		</Layout>
	)
}

export default ArchiveClient
