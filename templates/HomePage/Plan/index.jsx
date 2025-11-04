'use client'

import dynamic from 'next/dynamic'
import PlanReport from './PlanReport'

const PlanType = dynamic(() => import('./PlanType'))
const WritingPlan = dynamic(() => import('./WritingPlan'))
const Overview = dynamic(() => import('./Overview'))
const Outlets = dynamic(() => import('./Outlets'))
const Topics = dynamic(() => import('./Topics'))

export default function Plan({ plan, indiePage = false }) {
	return (
		<>
			<section id='plan'>
				<div className='container'>
					<div className='text-center max-w-md mx-auto mb-10'>
						<span className='text-key'>{plan?.section.name}</span>
						<h2>{plan?.section.title}</h2>
						<span>{plan?.section.subTitle}</span>
					</div>
				</div>

				{/* <PlanReport	className={'lg:hidden'} plan={plan} /> */}

				<div
					className='mt-20 flex flex-row lg:flex-col gap-4'
					id='pricing-plan'
				>
					<PlanType plan={plan} indiePage={indiePage} />
					<div className='container'>
						<WritingPlan plan={plan} />
						<Overview plan={plan} />
						<Outlets plan={plan} />
						<Topics plan={plan} />
					</div>
				</div>
			</section>
		</>
	)
}
