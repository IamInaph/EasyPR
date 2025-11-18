import { DownloadCloud } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ServicePlanType({ plan }) {
	const handleReportDownload = (e, name, url) => {
		e.preventDefault()
		const reportUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`

		const link = document.createElement('a')
		link.href = reportUrl
		link.target = '_blank'
		link.download = `${name}-sample-report.pdf`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}
	return (
		<div className='container'>
			<div className='grid lg:grid-cols-4 gap-3 '>
				{plan?.pricingPlan.plans.data.map((item, index) => {
					return (
						<div
							key={`pricing-plan-` + index + new Date().toString()}
							className='card-plan'
						>
							<div>
								<div className='flex justify-between items-baseline'>
									<strong className='stick-title'>
										{item.attributes.name}
									</strong>
									<strong className='stick-amount'>
										${item.attributes.offerPrice}{' '}
									</strong>
								</div>

								<span className='stick-text'>
									For {item.attributes.businessType} business
								</span>
							</div>
							<div
								className={`flex flex-row justify-between gap-2 items-center group cursor-pointer`}
								onClick={(e) =>
									handleReportDownload(
										e,
										item.attributes.name,
										item?.attributes?.pdf_report?.data?.attributes?.url
									)
								}
							>
								<div className='flex flex-col justify-between items-baseline'>
									<div className='stick-title text-xs group-hover:underline'>
										{item.attributes.name} Sample Report
									</div>
								</div>
								<DownloadCloud className='duration-200 group-hover:scale-110 w-4 h-4' />
							</div>
							<div>
								<strong className='stick-amount-primary'>
									${item.attributes.offerPrice}{' '}
									<span className='line-through text-xl text-gray-500'>
										{' '}
										${item.attributes.price}
									</span>
								</strong>
								<span className='stick-text'>One time payment</span>
							</div>
																					<div className='flex justify-center'>
																						<Link
																							href={`https://orders.easyprwire.com/${item.attributes.name.toLowerCase()}`}
																							className='btn btn-outline btn-lg w-full text-center'
																							target='_blank'
																						>
																							Order Now
																						</Link>
																					</div>						</div>
					)
				})}
			</div>
		</div>
	)
}
