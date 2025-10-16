import { DownloadCloud } from 'lucide-react'
import React from 'react'

const PlanReport = ({ plan, className }) => {
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
		<div className={`container ${className}`}>
			<div className='grid grid-cols-10 gap-2 w-full '>
				<div className='lg:col-span-3 col-span-10 hidden lg:block' />
				<div className='lg:col-span-7 col-span-10'>
					<div className='grid lg:grid-cols-4 gap-3'>
						{plan?.pricingPlan.plans.data.map((item, index) => (
							<div
								className='card-plan mb-4 flex flex-row justify-between gap-2 items-center group cursor-pointer'
								onClick={(e) =>
									handleReportDownload(
										e,
										item.attributes.name,
										item?.attributes?.pdf_report?.data?.attributes?.url
									)
								}
							>
								<div className='flex flex-col justify-between items-baseline'>
									<div className='stick-title text-base'>
										{item.attributes.name}
									</div>
									<span className='stick-text'>Sample Report</span>
								</div>
								<DownloadCloud className='duration-200 group-hover:scale-110' />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlanReport
