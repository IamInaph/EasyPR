import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function PlanType({ plan }) {
	const [istop, setistop] = useState(true)

	const listenScrollEvent = () => {
		if (window.scrollY > 5800) {
			setistop(false)
		} else {
			setistop(true)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)
	})
	return (
		<>
			<div
				className={`${
					istop ? '' : 'stick-price pt-4 pb-2 border-y'
				} sticky z-[100] top-[4rem] min-w-full lg:min-w-fit `}
			>
				<div className='container'>
					<div className='grid grid-cols-10 gap-2 w-full '>
						<div className='lg:col-span-3 col-span-10'>
							<h3>{plan?.pricingPlan.title}</h3>
						</div>
						<div className='lg:col-span-7 col-span-10'>
							<div className='grid lg:grid-cols-4 gap-3 '>
								{plan?.pricingPlan.plans.data.map((item, index) => {
									return (
										<div
											key={`pricing-plan-` + index + new Date().toString()}
											className='card-plan '
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
											<div>
												<strong className='stick-amount-primary'>
													${item.attributes.offerPrice}{' '}
												</strong>
												<span className='stick-text'>One time payment</span>
											</div>
											<div>
												<Link
													href={`https://orders.easyprwire.com/${item.attributes.name.toLowerCase()}`}
													className='btn btn-outline btn-lg w-full bg-transparent hover:bg-transparent'
													target='_blank'
												>
													Order Now
												</Link>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
