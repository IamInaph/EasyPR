'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getStrapiMedia } from '@/utils/media'
import Image from 'next/image'

const index = ({ orderDetail }) => {
	const orderId = orderDetail.data.attributes.orderId
	const orderStatus = orderDetail.data.attributes.orderStatus
	const paymentStatus = orderDetail.data.attributes.paymentStatus
	const publishingDate = orderDetail.data.attributes.publishingDate

	const totalInvoice = orderDetail.data.attributes.totalAmount

	const paymentMethod =
		orderDetail.data.attributes.paymentMethod.data.attributes.image

	const writingPackageName =
		orderDetail.data.attributes.writingPackage.data.attributes.name
	const writingPackageDescription =
		orderDetail.data.attributes.writingPackage.data.attributes.description
	const writingPackagePrice =
		orderDetail.data.attributes.writingPackage.data.attributes.price

	const writingUpgradesName = orderDetail.data.attributes.writingUpgrades

	const extraNewsOutlets = orderDetail.data.attributes.extraNewsOutlets

	// const writingUpgradesDescription =
	//   orderDetail.data.attributes.writingUpgrades.data.attributes.description;
	// const writingUpgradesPrice =
	//   orderDetail.data.attributes.writingUpgrades.data.attributes.price;

	const publishingNetworkName =
		orderDetail.data.attributes.publishingNetwork.data.attributes.name
	const publishingNetworksDescription =
		orderDetail.data.attributes.publishingNetwork.data.attributes.description
	const publishingNetworksPrice =
		orderDetail.data.attributes.publishingNetwork.data.attributes.price

	// console.log("orderDetail", orderDetail);
	return (
		<div className=' text-black bg-slate-50 flex flex-col justify-center pt-12 overflow-x-hidden'>
			<div className='max-w-5xl mx-auto px-3'>
				<Link href='/' className='flex gap-1 items-center text-lg'>
					<Icon icon='ph:arrow-left-bold' />
					Go back
				</Link>
				<div className='bg-white rounded-[2rem] w-full lg:p-12 p-6 mt-4'>
					<div className='flex lg:flex-row flex-col justify-between items-baseline gap-3'>
						<div>
							<h1 className='lg:text-4xl text-2xl'>
								Order Status{' '}
								<span className='badge badge-primary capitalize '>
									{/* {orderStatus === "In_review" ? "" : "In Review"} */}
									{orderStatus}
								</span>
							</h1>

							<div className='flex flex-col max-w-[32rem] gap-2'>
								<div className='flex gap-2'>
									<span className='text-gray-500 min-w-[8rem]'>
										Business Name:
									</span>
									<strong className='text-slate-900'>
										{orderDetail.data.attributes.brandName}
									</strong>
								</div>
								<div className='flex gap-2'>
									<span className='text-gray-500 min-w-[8rem]'>
										Business Email:
									</span>
									<strong className='text-slate-900'>
										{orderDetail.data.attributes.emailAddress}
									</strong>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<div className=' grid-cols-2 grid gap-2'>
								<span className='text-gray-500'> Order ID:</span>{' '}
								<strong className='text-slate-900'>{orderId}</strong>
							</div>
							<div className=' grid-cols-2 grid gap-2'>
								<span className='text-gray-500'>Publishing Date:</span>{' '}
								<strong className='text-slate-900'> {publishingDate}</strong>
							</div>
							<div className=' grid-cols-2 grid gap-2'>
								<span className='text-gray-500'>Payment Status:</span>{' '}
								<span
									className={`${
										paymentStatus === 'paid'
											? 'text-primary-500'
											: 'text-red-500'
									} capitalize`}
								>
									{paymentStatus}
								</span>
							</div>
							<div className='items-center justify-end grid-cols-2 grid gap-2'>
								<span className='text-gray-500'>Payment method:</span>{' '}
								{paymentMethod && (
									<figure className='relative max-w-14 w-full min-h-[2rem] block '>
										<Image
											src={getStrapiMedia(paymentMethod?.media)}
											fill
											sizes='100vh'
											priority
											className='object-cover'
											alt={
												orderDetail.data.attributes.paymentMethod.data
													.attributes.image.alt
											}
										/>
									</figure>
								)}
							</div>
						</div>
					</div>

					<div className='pt-16 pb-8'>
						<h2 className='text-xl'>Package Detail</h2>
						<div className='flex flex-col bg-slate-50 p-6 rounded-2xl gap-3'>
							<div className='grid grid-cols-12 border-b pb-3'>
								<div className='col-span-10'>
									<strong className='block text-lg'>
										{publishingNetworkName}
									</strong>
									<span>{publishingNetworksDescription}</span>
								</div>
								<div className='col-span-2 text-right text-lg text-slate-900'>
									${publishingNetworksPrice}
								</div>
							</div>

							<div className='grid grid-cols-12 border-b pb-3'>
								<div className='col-span-10'>
									<strong className='block text-lg'>
										{writingPackageName}
									</strong>
									<span>{writingPackageDescription}</span>
								</div>
								<div className='col-span-2 text-right text-lg text-slate-900'>
									${writingPackagePrice}
								</div>
							</div>

							{writingUpgradesName.data.map((item, index) => (
								<div className='grid grid-cols-12 ' key={index}>
									<div className='col-span-10'>
										<strong className='block text-lg'>
											{item.attributes.name}
										</strong>
									</div>
									<div className='col-span-2 text-right text-lg text-slate-900'>
										${item.attributes.price}
									</div>
								</div>
							))}
							<div className='mt-6'>
								<strong className='uppercase text-gray-400'>
									Extra Coverage
								</strong>
							</div>
							{extraNewsOutlets?.data?.map((item, index) => (
								<div className='grid grid-cols-12  ' key={index}>
									<div className='col-span-10'>
										<strong className='block text-lg'>
											{item.attributes.name}
										</strong>
									</div>
									<div className='col-span-2 text-right text-lg text-slate-900'>
										${item.attributes.price}
									</div>
								</div>
							))}

							<div className='grid grid-cols-12 border-t-2 border-gray-400 mt-6 pt-6'>
								<div className='col-span-10 text-xl font-medium text-slate-900'>
									Total Amount
								</div>
								<div className='col-span-2 text-right text-xl font-medium text-slate-900'>
									${totalInvoice}
								</div>
							</div>
						</div>
					</div>

					<div className='text-center'>
						Any Issue regarding the order?{' '}
						<Link href='/contact' className='text-blue-400 hover:text-blue-500'>
							Contact support
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
