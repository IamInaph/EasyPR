'use client'

import Link from 'next/link'
import ServicePlanType from './ServicePlanType'

export default function Plan({ plan }) {
	return (
		<>
			<section id='plan'>
				<div className='container'>
					<div className='text-center max-w-md mx-auto mb-10'>
						<h2>Pricings Section</h2>
					</div>
				</div>
				<div
					className='mt-20 flex flex-row lg:flex-col gap-4'
					id='pricing-plan'
				>
					<ServicePlanType plan={plan} />
				</div>
				<div className='flex justify-center mt-8'>
					<Link href='/pricings' className='btn btn-outline btn-lg w-full md:w-1/4 text-center'>
						Compare Pricings
					</Link>
				</div>
			</section>
		</>
	)
}
