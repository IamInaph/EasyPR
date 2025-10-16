'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getStrapiMedia } from '@/utils/media'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileChartColumn, FileText, ScanEye, Truck } from 'lucide-react'
import { createImageUrl } from '@/utils/media'
import { useRouter } from 'next/navigation'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { getHomepageData } from '@/services/homepage'

const OrderWizardPage = ({ orderDetail }) => {
	const router = useRouter()

	const [selectedTab, setSelectedTab] = useState('order_details')
	const [tempOrderStatus, setTempOrderStatus] = useState('placed')
	const [pr_address, set_pr_address] = useState('')
	const [outletList, setOutletList] = useState([])

	const orderId = orderDetail?.data?.attributes?.orderId
	let orderStatus = orderDetail?.data?.attributes?.orderStatus
	const paymentStatus = orderDetail?.data?.attributes?.paymentStatus
	const publishingDate = orderDetail?.data?.attributes?.publishingDate

	const totalInvoice = orderDetail?.data?.attributes?.totalAmount

	const paymentMethod =
		orderDetail?.data?.attributes?.paymentMethod?.data?.attributes?.image

	const writingPackageName =
		orderDetail?.data?.attributes?.writingPackage?.data?.attributes?.name
	const writingPackageDescription =
		orderDetail?.data?.attributes?.writingPackage?.data?.attributes?.description
	const writingPackagePrice =
		orderDetail?.data?.attributes?.writingPackage?.data?.attributes?.offerPrice

	const writingUpgradesName = orderDetail?.data?.attributes?.writingUpgrades

	const extraNewsOutlets = orderDetail?.data?.attributes?.extraNewsOutlets

	// const writingUpgradesDescription =
	//   orderDetail?.data?.attributes?.writingUpgrades?.data?.attributes?.description;
	// const writingUpgradesPrice =
	//   orderDetail?.data?.attributes?.writingUpgrades?.data?.attributes?.price;
	const publishingNetworkData =
		orderDetail?.data?.attributes?.publishingNetwork?.data?.attributes
	const publishingNetworkName =
		orderDetail?.data?.attributes?.publishingNetwork?.data?.attributes?.name
	// const publishingNetworksDescription =
	// 	orderDetail?.data?.attributes?.publishingNetwork?.data?.attributes
	// 		?.description
	const publishingNetworksPrice =
		orderDetail?.data?.attributes?.publishingNetwork?.data?.attributes?.offerPrice
	const newsStoryDoc = orderDetail?.data?.attributes?.newsStoryDoc
	const newsStoryImages = orderDetail?.data?.attributes?.newsStoryImages
	const publishedReportURL =
		orderDetail?.data?.attributes?.publishedDocuments?.data?.attributes?.url
	const domainAuthorityVal = publishingNetworkData?.overviewTopics?.filter(
		(item) => item.name === 'Highest Domain Authority'
	)[0]?.value

	useEffect(() => {
		setTempOrderStatus(orderStatus)

		if (orderStatus === 'placed') setSelectedTab('order_details')
		else if (orderStatus === 'in_review') setSelectedTab('review')
		else setSelectedTab('order_complete')

		setLoading(false)
	}, [orderStatus])

	useEffect(() => {
		const getHomeData = async () => {
			const homeData = await getHomepageData()

			const plan = homeData.data.data.attributes.content.filter((content) => {
				return content?.section?.uid === 'pricing'
			})[0]

			setOutletList(plan?.includedOutlets?.data)
		}

		getHomeData()
	}, [])

	const orderCompleteStates = ['published', 'cancelled', 'scheduled']

	const [uploadedDoc, setUploadedDoc] = useState({})
	const [uploadedImages, setUploadedImages] = useState([])
	const [uploading, setUploading] = useState(false)
	const [loading, setLoading] = useState(true)

	const handleDocChange = (event) => {
		const file = event.target.files[0]

		setUploadedDoc(file)
	}

	const handleImagesChange = (event) => {
		const files = event.target.files

		if (files[0]?.name) {
			const uploadedFiles = [...files]

			if (uploadedFiles.length > 10) {
				alert('You can only upload 10 files')
			} else {
				setUploadedImages(uploadedFiles)
			}
		}
	}

	const handleDocRemove = () => {
		setUploadedDoc({})
		// cb()
	}

	const handleImageRemove = (image) => {
		const filteredImages = uploadedImages.filter(
			(img) => img.name !== image.name
		)

		setUploadedImages(filteredImages)

		// cb(filteredImages)
	}

	const uploadPRContent = async () => {
		try {
			setUploading(true)

			const formData = new FormData()
			formData.append('orderStatus', 'in_review')
			formData.append('newsStoryDoc', uploadedDoc)

			uploadedImages.forEach((file, index) => {
				formData.append(`newsStoryImages`, file)
			})

			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/orders/update/${orderId}`,
				{
					method: 'PUT',
					body: formData,
				}
			)
			const data = await res.json()

			if (res.ok) {
				setTempOrderStatus('in_review')
				setSelectedTab('review')
				return data
			}
		} catch (error) {
			console.log('[PR_Content]', error)
		} finally {
			setUploading(false)
		}
	}

	const handleReportDownload = () => {
		if (publishedReportURL) {
			const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${publishedReportURL}`
			window.open(fullUrl, '_blank')
		}
	}

	// const handleImageRemoval = (image) => {
	// 	handleImageRemove(image, (updatedImages) => {
	// 		// setValue('newsStoryImages', updatedImages)
	// 		setUploadedImages(updatedImages)
	// 	})
	// }

	// const handleDocRemoval = (doc) => {
	// 	handleDocRemove(() => {
	// 		// setValue('newsStoryDoc', {})
	// 		setUploadedDoc({})
	// 	})
	// }

	if (loading)
		return (
			<div className='flex items-center justify-center min-h-screen bg-white'>
				Loading...
			</div>
		)

	return (
		<div className=' text-black bg-slate-50 flex flex-col  pt-4 overflow-x-hidden min-h-screen'>
			<div className='max-w-5xl mx-auto px-3 w-full'>
				<Link
					href='/'
					className='flex gap-1 items-center text-lg absolute left-2'
				>
					<Icon icon='ph:arrow-left-bold' className='text-2xl' />
					{/* <span className='hidden lg:block'>Go back</span> */}
				</Link>
				<Tabs
					className='bg-white rounded-[2rem] w-full lg:p-12 p-6 mt-6 min-h-[500px] shadow-primary-200 shadow-lg mb-10'
					defaultValue='order_details'
					value={selectedTab}
					onValueChange={setSelectedTab}
				>
					<TabsList className='flex my-4'>
						<TabsTrigger
							value='order_details'
							className='flex flex-col gap-2 relative px-0'
						>
							<div className='bg-primary-500 w-6 h-6 rounded-full ring-1 ring-offset-2 ring-primary-500' />
							{/* <Truck /> */}
							<span className='sm:inline text-xs absolute -bottom-4'>
								Order Details
							</span>
						</TabsTrigger>
						<div className='w-full border-[#2AAE97] h-1 border-y' />
						<TabsTrigger
							value='pr_content'
							className='flex flex-col gap-2 relative px-0'
							disabled={
								(publishingNetworkName === 'Premium' ||
									publishingNetworkName === 'Ultimate') &&
								pr_address === ''
							}
						>
							<div className='bg-primary-500 w-6 h-6 rounded-full ring-1 ring-offset-2 ring-primary-500' />
							{/* <FileText /> */}
							<span className='sm:inline text-xs absolute -bottom-4'>
								PR Content
							</span>
						</TabsTrigger>
						<div
							className={`w-full h-1 border-y ${
								tempOrderStatus === 'in_review' ||
								orderCompleteStates.includes(tempOrderStatus)
									? 'border-[#2AAE97]'
									: 'border-slate-200'
							}`}
						/>
						{!orderCompleteStates.includes(tempOrderStatus) ? (
							<TabsTrigger
								value='review'
								className={`flex flex-col relative px-0 ${
									tempOrderStatus === 'in_review' && 'border-[#2AAE97]'
								}`}
								disabled={tempOrderStatus === 'placed'}
							>
								<div
									className={`${
										tempOrderStatus === 'in_review' &&
										'bg-primary-500 ring-primary-500'
									} w-6 h-6 rounded-full ring-1 ring-offset-2`}
								/>
								{/* <ScanEye /> */}
								<span className='sm:inline text-xs absolute -bottom-4'>
									Review
								</span>
							</TabsTrigger>
						) : (
							<TabsTrigger
								value='order_complete'
								className={`flex flex-col relative px-0 ${
									orderCompleteStates.includes(orderStatus) &&
									'border-[#2AAE97]'
								}`}
								disabled={!orderCompleteStates.includes(orderStatus)}
							>
								<div
									className={`${
										orderCompleteStates.includes(orderStatus) &&
										'bg-primary-500 ring-primary-500'
									} w-6 h-6 rounded-full ring-1 ring-offset-2`}
								/>
								{/* <FileChartColumn /> */}
								<span className='sm:inline text-xs absolute -bottom-4'>
									Order Report
								</span>
							</TabsTrigger>
						)}
					</TabsList>
					<TabsContent
						value='order_details'
						className='pt-10 h-full min-h-[300px]'
					>
						<div className='flex lg:flex-row flex-col justify-between items-baseline gap-3'>
							<div className='w-full'>
								<h1 className='lg:text-4xl text-2xl'>
									Order Status{' '}
									<span
										className={`badge badge-primary capitalize ${
											orderStatus === 'cancelled' && 'badge-danger'
										} ${orderStatus === 'scheduled' && 'badge-warning'} ${
											(orderStatus === 'in_review' ||
												orderStatus === 'placed') &&
											'badge-info'
										}`}
									>
										{orderStatus}
									</span>
								</h1>

								<div className='flex flex-col lg:flex-row lg:justify-between gap-2 pt-3 w-full'>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2'>
											<span className='text-gray-500 min-w-[8rem]'>
												Order ID:
											</span>
											<strong className='text-slate-900'>{orderId}</strong>
										</div>
										{orderDetail.data.attributes.brandName && (
											<div className='flex gap-2'>
												<span className='text-gray-500 min-w-[8rem]'>
													Business Name:
												</span>
												<strong className='text-slate-900'>
													{orderDetail.data.attributes.brandName}
												</strong>
											</div>
										)}
										<div className='flex gap-2'>
											<span className='text-gray-500 min-w-[8rem]'>
												Business Email:
											</span>
											<strong className='text-slate-900'>
												{orderDetail.data.attributes.emailAddress}
											</strong>
										</div>
									</div>
									<div></div>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2'>
											<span className='text-gray-500 min-w-[8rem]'>
												Payment Date:
											</span>
											<strong className='text-slate-900'>
												{
													new Date(orderDetail?.data?.attributes?.createdAt)
														?.toISOString()
														.split('T')[0]
												}
											</strong>
										</div>
										{/* <div className=' grid-cols-2 grid gap-2'>
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
								</div> */}
										<div className='flex gap-2 items-center'>
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
							</div>
						</div>

						<div className='pt-10 lg:pt-20 pb-4'>
							<h2 className='text-xl'>Package Detail</h2>
							<div className='flex flex-col bg-slate-50 p-6 rounded-2xl gap-3'>
								<div className='grid grid-cols-12'>
									<div className='col-span-10'>
										<Dialog>
											<DialogTrigger>
												<strong className='inline text-lg border-b-4 cursor-pointer border-primary-500 hover:border-transparent duration-200'>
													{publishingNetworkName}
												</strong>
											</DialogTrigger>
											<DialogContent className='!rounded-[10px] w-[90%] max-w-4xl '>
												<div className='flex items-center gap-3'>
													<h2 className='text-xl leading-[1] mb-0 border-r-4 border-primary-500 pr-3'>
														{publishingNetworkName}
													</h2>
													<span className='text-xl text-primary-500'>
														${publishingNetworksPrice}
													</span>
												</div>
												<div className='flex flex-col gap-2'>
													<div className='flex gap-2 flex-wrap justify-between'>
														{publishingNetworkData?.monthlyReaders && (
															<div className='flex gap-2'>
																<span className='text-gray-500 min-w-[8rem]'>
																	Monthly Readers:
																</span>
																<strong className='text-slate-900'>
																	{publishingNetworkData?.monthlyReaders}
																</strong>
															</div>
														)}
														{publishingNetworkData?.monthlyReaders && (
															<div className='flex gap-2'>
																<span className='text-gray-500 min-w-[8rem]'>
																	News Sites:
																</span>
																<strong className='text-slate-900'>
																	{publishingNetworkData?.newsSites}
																</strong>
															</div>
														)}
														{domainAuthorityVal && (
															<div className='flex gap-2'>
																<span className='text-gray-500 min-w-[8rem]'>
																	Domain Authority:
																</span>
																<strong className='text-slate-900'>
																	{domainAuthorityVal}+
																</strong>
															</div>
														)}
													</div>
												</div>
												<Accordion
													type='single'
													collapsible
													defaultValue='item-1'
												>
													<AccordionItem value='item-1' className='border-b-0'>
														<AccordionTrigger>
															{outletList && (
																<h2 className='text-lg mb-0'>
																	Included Outlets
																</h2>
															)}
														</AccordionTrigger>
														<AccordionContent>
															{outletList && (
																<div className='bg-gray-200 p-4 rounded-[8px] grid md:grid-cols-3 gap-10 justify-between max-h-[400px] overflow-y-auto'>
																	{outletList
																		?.filter((outlet) =>
																			publishingNetworkData.majorOutlets.some(
																				(major) =>
																					major.newsOutlet?.data?.id ===
																					outlet.id
																			)
																		)
																		?.map((item) => (
																			<div className='flex gap-2 items-center flex-wrap'>
																				<span>✅ {item.attributes.name} </span>
																			</div>
																		))}
																</div>
															)}
														</AccordionContent>
													</AccordionItem>
												</Accordion>
											</DialogContent>
										</Dialog>
									</div>
									<div className='col-span-2 text-right text-lg text-slate-900'>
										${publishingNetworksPrice}
									</div>
								</div>
								{(publishingNetworkName === 'Premium' ||
									publishingNetworkName === 'Ultimate') && (
									<label className='form-control w-full '>
										<label>
											Your address{' '}
											<span className='text-red-500 text-sm italic'>
												(Required)
											</span>
										</label>
										<input
											type='text'
											placeholder='e.g. XYZ Street-10, City, State, Country'
											className='input input-bordered w-full input-lg'
											value={pr_address}
											onChange={(e) => set_pr_address(e.target.value)}
											required
										/>
									</label>
								)}

								{(writingPackageName ||
									writingPackageDescription ||
									writingPackagePrice) && (
									<div className='grid grid-cols-12'>
										<div className='col-span-10'>
											<strong className='block text-lg'>
												{writingPackageName}
											</strong>
											<span>{writingPackageDescription}</span>
										</div>
										<div className='col-span-2 text-right text-lg text-slate-900'>
											{writingPackagePrice && `$${writingPackagePrice}`}
										</div>
									</div>
								)}

								{/* {writingUpgradesName.data.map((item, index) => (
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
								{extraNewsOutlets?.data?.length > 0 && (
									<>
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
									</>
								)} */}

								{/* <div className='grid grid-cols-12 border-t-2 border-gray-400 mt-2 pt-6'>
									<div className='col-span-10 text-xl font-medium text-slate-900'>
										Total Amount
									</div>
									<div className='col-span-2 text-right text-xl font-medium text-slate-900'>
										${totalInvoice}
									</div>
								</div> */}
							</div>
						</div>

						<div className='flex justify-end my-5'>
							<div />
							<button
								className='w-[150px] py-3 bg-[#2AAE97] text-white duration-200 hover:scale-95 disabled:bg-gray-400 disabled:pointer-events-none'
								onClick={() => setSelectedTab('pr_content')}
								disabled={
									(publishingNetworkName === 'Premium' ||
										publishingNetworkName === 'Ultimate') &&
									pr_address === ''
								}
							>
								Submit PR
							</button>
						</div>
					</TabsContent>
					<TabsContent
						value='pr_content'
						className='pt-10 h-full min-h-[300px]'
					>
						{newsStoryDoc?.data || newsStoryImages?.data ? (
							<div className='min-h-[250px] w-full flex justify-center items-center'>
								<p className='text-center'>
									PR Content <span className='text-success'>Uploaded</span>!
								</p>
							</div>
						) : (
							<>
								<div className='flex flex-col lg:flex-row gap-3'>
									<div className='form-control flex-1'>
										<label>
											Upload your Doc <span className='text-red-500'>*</span>
										</label>
										<div className='file-upload lg:h-[196px]' type='button'>
											{uploadedDoc && uploadedDoc.name ? (
												<div className='relative z-50 h-[80%] w-64 shadow-lg flex items-center justify-center rounded-lg p-4'>
													{uploadedDoc.name}
													<Icon
														icon='heroicons:x-mark'
														height={24}
														className='absolute top-0 right-0 text-white bg-red-500 rounded-full cursor-pointer'
														onClick={handleDocRemove}
													/>
												</div>
											) : (
												<>
													<Icon
														icon='ion:image-outline'
														height={44}
														className='text-gray-300'
													/>

													<strong className='text-xl text-gray-900 '>
														Drop your news story here or click to upload
													</strong>
													<span className='text-sm text-gray-400'>
														(Use Microsoft Word DOCX for best compatibility)
													</span>
												</>
											)}
											<input
												type='file'
												accept='.doc, .pdf, .docx'
												className='doc'
												onChange={handleDocChange}
											/>
										</div>

										<small className='mt-2 text-base text-right text-gray-400 '>
											Allowed file type: .doc, .pdf and .docx
										</small>
									</div>
									<div className='form-control flex-1'>
										<label>Upload your Images(Optional - Max 10)</label>
										<div className='file-upload' type='button'>
											{uploadedImages.length ? (
												<div className='z-50 flex flex-wrap items-center gap-3'>
													{uploadedImages.map((image) => (
														<div
															key={`${image.name}- ${new Date().toString()}`}
															className='relative w-40 h-40'
														>
															<Image
																src={createImageUrl(image)}
																alt={image.name}
																fill
															/>
															<Icon
																icon='heroicons:x-mark'
																height={24}
																className='absolute top-0 right-0 text-white bg-red-500 rounded-full cursor-pointer'
																onClick={() => handleImageRemove(image)}
															/>
														</div>
													))}
												</div>
											) : (
												<>
													<Icon
														icon='ion:image-outline'
														height={44}
														className='text-gray-300'
													/>

													<strong className='text-xl text-gray-900 '>
														Drop images here or click to upload
													</strong>
													<span className='text-gray-400'>
														Otherwise our writers will use images from your
														website or stock sources. Minimum width of 600
														pixels is recommended.
													</span>
												</>
											)}
											<input
												multiple
												type='file'
												accept='.png, .jpeg'
												className='doc'
												onChange={handleImagesChange}
											/>
										</div>

										<small className='mt-2 text-base text-right text-gray-400 '>
											Allowed file type: .png, .jpeg
										</small>
									</div>
								</div>
								<div className='flex justify-end mb-5'>
									<div />
									<button
										className='w-[150px] py-3 bg-[#2AAE97] text-white duration-200 hover:scale-95 disabled:bg-gray-400 disabled:pointer-events-none'
										onClick={uploadPRContent}
										disabled={
											uploading ||
											!uploadedDoc.name ||
											((publishingNetworkName === 'Premium' ||
												publishingNetworkName === 'Ultimate') &&
												!pr_address)
										}
									>
										{uploading ? 'Sending...' : 'Submit'}
									</button>
								</div>
							</>
						)}
					</TabsContent>
					<TabsContent
						value='review'
						className='text-center pt-20 h-full min-h-[300px]'
					>
						<p className='text-3xl'>
							Your press release is currently under{' '}
							<span className='text-success capitalize'>review</span>!
						</p>
						<p className='text-balance text-gray-500'>
							If any urgency occurs, please reach out to{' '}
							<a
								className='text-blue-400 underline hover:no-underline'
								href='mailto:support@easyprwire.co'
							>
								support@easyprwire.co
							</a>
							<br /> Order ID:{' '}
							<span className='text-primary-500'>{orderId}</span>
						</p>
					</TabsContent>
					<TabsContent
						value='order_complete'
						className='text-center pt-20 h-full min-h-[300px]'
					>
						{orderCompleteStates.includes(tempOrderStatus) && (
							<div className='flex flex-col justify-center items-center w-full h-full'>
								<p className='text-center text-3xl'>
									Your order is{' '}
									<span
										className={`capitalize ${
											orderStatus === 'scheduled'
												? 'text-warning'
												: orderStatus === 'cancelled'
												? 'text-red-500'
												: orderStatus === 'published'
												? 'text-success'
												: 'text-info'
										}`}
									>
										{orderStatus}
									</span>
									!
								</p>
								{orderStatus === 'published' && (
									<button
										className='w-[150px] py-3 bg-[#2AAE97] text-white duration-200 hover:scale-95 disabled:bg-gray-400 disabled:pointer-events-none'
										onClick={handleReportDownload}
									>
										Download Report
									</button>
								)}
							</div>
						)}
					</TabsContent>
					<div className='text-center'>
						Any Issue regarding the order?{' '}
						<Link href='/contact' className='text-blue-400 hover:text-blue-500'>
							Contact support
						</Link>
					</div>
				</Tabs>
			</div>
		</div>
	)
}

export default OrderWizardPage
