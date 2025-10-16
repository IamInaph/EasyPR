import { RiVipCrownLine } from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect } from 'react'

export default function Offer({ content, marketingContent }) {
	return (
		<>
			<section>
				<div className='container'>
					<div className='grid grid-cols-2 gap-x-6 lg:gap-y-36 gap-y-8'>
						<div className='bg-[#F4F3FF] p-8 rounded-xl gap-10 flex flex-col justify-between col-span-2 lg:col-span-1'>
							<div>
								<svg
									width='54'
									height='54'
									viewBox='0 0 54 54'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='54' height='54' rx='27' fill='#D9D6FE' />
									<path
										d='M24.3926 12.4133C24.7208 12.0467 25.1227 11.7534 25.572 11.5526C26.0213 11.3518 26.5079 11.248 27.0001 11.248C27.4922 11.248 27.9788 11.3518 28.4281 11.5526C28.8774 11.7534 29.2793 12.0467 29.6076 12.4133L30.8326 13.7818C31.1827 14.1729 31.6163 14.4803 32.1013 14.6811C32.5862 14.882 33.1102 14.9712 33.6343 14.9421L35.4718 14.8406C35.9633 14.8135 36.455 14.8904 36.9147 15.0662C37.3745 15.242 37.7919 15.5128 38.1399 15.861C38.4879 16.2091 38.7585 16.6267 38.9341 17.0866C39.1097 17.5464 39.1864 18.0381 39.1591 18.5296L39.0576 20.3653C39.0287 20.8892 39.1181 21.4128 39.3189 21.8974C39.5197 22.3821 39.8269 22.8154 40.2178 23.1653L41.5863 24.3903C41.9532 24.7186 42.2468 25.1206 42.4477 25.5701C42.6487 26.0195 42.7526 26.5064 42.7526 26.9987C42.7526 27.491 42.6487 27.9778 42.4477 28.4273C42.2468 28.8768 41.9532 29.2788 41.5863 29.6071L40.2178 30.8321C39.8267 31.1822 39.5193 31.6158 39.3185 32.1008C39.1177 32.5857 39.0285 33.1097 39.0576 33.6338L39.1591 35.4713C39.1862 35.9628 39.1093 36.4545 38.9334 36.9142C38.7576 37.374 38.4868 37.7915 38.1387 38.1394C37.7905 38.4874 37.3729 38.758 36.9131 38.9336C36.4532 39.1093 35.9615 39.1859 35.4701 39.1586L33.6343 39.0571C33.1105 39.0283 32.5869 39.1176 32.1022 39.3184C31.6175 39.5192 31.1842 39.8264 30.8343 40.2173L29.6093 41.5858C29.281 41.9527 28.879 42.2463 28.4296 42.4472C27.9801 42.6482 27.4933 42.7521 27.0009 42.7521C26.5086 42.7521 26.0218 42.6482 25.5723 42.4472C25.1229 42.2463 24.7208 41.9527 24.3926 41.5858L23.1676 40.2173C22.8175 39.8262 22.3839 39.5188 21.8989 39.318C21.4139 39.1172 20.8899 39.028 20.3658 39.0571L18.5283 39.1586C18.0368 39.1857 17.5452 39.1088 17.0854 38.933C16.6257 38.7571 16.2082 38.4863 15.8602 38.1382C15.5122 37.79 15.2416 37.3724 15.066 36.9126C14.8904 36.4527 14.8137 35.961 14.8411 35.4696L14.9426 33.6338C14.9714 33.11 14.8821 32.5864 14.6812 32.1017C14.4804 31.6171 14.1732 31.1837 13.7823 30.8338L12.4138 29.6088C12.0469 29.2805 11.7534 28.8785 11.5524 28.4291C11.3514 27.9796 11.2476 27.4928 11.2476 27.0004C11.2476 26.5081 11.3514 26.0213 11.5524 25.5718C11.7534 25.1224 12.0469 24.7204 12.4138 24.3921L13.7823 23.1671C14.1734 22.817 14.4808 22.3834 14.6816 21.8984C14.8825 21.4134 14.9716 20.8894 14.9426 20.3653L14.8411 18.5278C14.8142 18.0365 14.8913 17.545 15.0672 17.0855C15.2432 16.6259 15.514 16.2087 15.8622 15.8609C16.2103 15.5131 16.6278 15.2426 17.0875 15.0671C17.5472 14.8916 18.0387 14.815 18.5301 14.8423L20.3658 14.9438C20.8896 14.9726 21.4133 14.8833 21.8979 14.6825C22.3826 14.4817 22.8159 14.1745 23.1658 13.7836L24.3926 12.4133Z'
										stroke='#7A5AF8'
										strokeWidth='1.5'
									/>
									<path
										d='M22.625 22.625H22.6425V22.6425H22.625V22.625ZM31.375 31.375H31.3925V31.3925H31.375V31.375Z'
										stroke='#7A5AF8'
										strokeWidth='2.25'
										strokeLinejoin='round'
									/>
									<path
										d='M32.25 21.75L21.75 32.25'
										stroke='#7A5AF8'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>

								<h3 className='text-2xl mt-4'>
									Marketing Agencies & Resellers
								</h3>
								<p className='text-lg'>
									{marketingContent?.marketingAgenciesResellers}
								</p>
							</div>

							<div>
								<Link href='/contact' className='btn btn-white btn-lg'>
									Contact US
								</Link>
							</div>
						</div>
						<div className='bg-[#FFF6ED] p-8 rounded-xl gap-10 flex flex-col justify-between col-span-2 lg:col-span-1'>
							<div>
								<svg
									width='54'
									height='54'
									viewBox='0 0 54 54'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect width='54' height='54' rx='27' fill='#FDDCAB' />
									<path
										d='M24.3926 12.4133C24.7208 12.0467 25.1227 11.7534 25.572 11.5526C26.0213 11.3518 26.5079 11.248 27.0001 11.248C27.4922 11.248 27.9788 11.3518 28.4281 11.5526C28.8774 11.7534 29.2793 12.0467 29.6076 12.4133L30.8326 13.7818C31.1827 14.1729 31.6163 14.4803 32.1013 14.6811C32.5862 14.882 33.1102 14.9712 33.6343 14.9421L35.4718 14.8406C35.9633 14.8135 36.455 14.8904 36.9147 15.0662C37.3745 15.242 37.7919 15.5128 38.1399 15.861C38.4879 16.2091 38.7585 16.6267 38.9341 17.0866C39.1097 17.5464 39.1864 18.0381 39.1591 18.5296L39.0576 20.3653C39.0287 20.8892 39.1181 21.4128 39.3189 21.8974C39.5197 22.3821 39.8269 22.8154 40.2178 23.1653L41.5863 24.3903C41.9532 24.7186 42.2468 25.1206 42.4477 25.5701C42.6487 26.0195 42.7526 26.5064 42.7526 26.9987C42.7526 27.491 42.6487 27.9778 42.4477 28.4273C42.2468 28.8768 41.9532 29.2788 41.5863 29.6071L40.2178 30.8321C39.8267 31.1822 39.5193 31.6158 39.3185 32.1008C39.1177 32.5857 39.0285 33.1097 39.0576 33.6338L39.1591 35.4713C39.1862 35.9628 39.1093 36.4545 38.9334 36.9142C38.7576 37.374 38.4868 37.7915 38.1387 38.1394C37.7905 38.4874 37.3729 38.758 36.9131 38.9336C36.4532 39.1093 35.9615 39.1859 35.4701 39.1586L33.6343 39.0571C33.1105 39.0283 32.5869 39.1176 32.1022 39.3184C31.6175 39.5192 31.1842 39.8264 30.8343 40.2173L29.6093 41.5858C29.281 41.9527 28.879 42.2463 28.4296 42.4472C27.9801 42.6482 27.4933 42.7521 27.0009 42.7521C26.5086 42.7521 26.0218 42.6482 25.5723 42.4472C25.1229 42.2463 24.7208 41.9527 24.3926 41.5858L23.1676 40.2173C22.8175 39.8262 22.3839 39.5188 21.8989 39.318C21.4139 39.1172 20.8899 39.028 20.3658 39.0571L18.5283 39.1586C18.0368 39.1857 17.5452 39.1088 17.0854 38.933C16.6257 38.7571 16.2082 38.4863 15.8602 38.1382C15.5122 37.79 15.2416 37.3724 15.066 36.9126C14.8904 36.4527 14.8137 35.961 14.8411 35.4696L14.9426 33.6338C14.9714 33.11 14.8821 32.5864 14.6812 32.1017C14.4804 31.6171 14.1732 31.1837 13.7823 30.8338L12.4138 29.6088C12.0469 29.2805 11.7534 28.8785 11.5524 28.4291C11.3514 27.9796 11.2476 27.4928 11.2476 27.0004C11.2476 26.5081 11.3514 26.0213 11.5524 25.5718C11.7534 25.1224 12.0469 24.7204 12.4138 24.3921L13.7823 23.1671C14.1734 22.817 14.4808 22.3834 14.6816 21.8984C14.8825 21.4134 14.9716 20.8894 14.9426 20.3653L14.8411 18.5278C14.8142 18.0365 14.8913 17.545 15.0672 17.0855C15.2432 16.6259 15.514 16.2087 15.8622 15.8609C16.2103 15.5131 16.6278 15.2426 17.0875 15.0671C17.5472 14.8916 18.0387 14.815 18.5301 14.8423L20.3658 14.9438C20.8896 14.9726 21.4133 14.8833 21.8979 14.6825C22.3826 14.4817 22.8159 14.1745 23.1658 13.7836L24.3926 12.4133Z'
										stroke='#FB6514'
										strokeWidth='1.5'
									/>
									<path
										d='M22.625 22.625H22.6425V22.6425H22.625V22.625ZM31.375 31.375H31.3925V31.3925H31.375V31.375Z'
										stroke='#FB6514'
										strokeWidth='2.25'
										strokeLinejoin='round'
									/>
									<path
										d='M32.25 21.75L21.75 32.25'
										stroke='#FB6514'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>

								<h3 className='text-2xl mt-4'>Bulk Discounts</h3>
								<p className='text-lg'>{marketingContent?.bulkDiscounts}</p>
							</div>
							<div>
								<button
									className='btn btn-white btn-lg'
									onClick={() =>
										document.getElementById('discount').showModal()
									}
								>
									See our Bulk Discount Rate
								</button>
								<dialog id='discount' className='modal'>
									<div className='bg-white modal-box'>
										<form method='dialog' className='modal-backdrop'>
											<button className='absolute w-10 h-10 p-2 bg-white border-0 rounded-full btn btn-icon btn-sm  right-2 top-2 '>
												<Icon icon='radix-icons:cross-2' height={24} />
											</button>
										</form>
										<h3 className='text-2xl'>Bulk Order & Save</h3>
										<div className=' mb-3 mt-8'>
											<p>
												Buy multiple orders at once and enjoy the flexibility to
												kickstart them anytime you want. Our special offers are
												designed to help you save more when you buy more.
											</p>
											<div className='flex flex-col gap-2'>
												<div className='text-xl font-medium text-slate-900'>
													10% discount for 5 orders
												</div>
												<div className='text-xl font-medium text-slate-900'>
													20% discount for 10 orders
												</div>
												<div className='text-xl font-medium text-slate-900'>
													25% discount for 20 orders
												</div>
												<div className='text-xl font-medium text-slate-900'>
													30% discount for 30 orders
												</div>
											</div>
											<p className='mt-6'>
												Getting started is easy. Reach out to us for a bulk
												order and we'll provide a secure payment link. Once
												you've made the payment, our dedicated team will take
												care of setting up all your orders. The best part? You
												decide when to have your orders written and published
												according to your needs. It's saving, convenience, and
												control all in one!
											</p>
											<Link
												href='/contact'
												className='btn btn-secondary btn-lg w-full'
											>
												Contact us for Bulk Order
											</Link>
										</div>
									</div>
								</dialog>
							</div>
						</div>
						<div className='bg-[#ECFDF3] lg:py-20 py-8 lg:px-12 px-3 rounded-xl gap-10 flex lg:flex-row flex-col justify-between col-span-2'>
							{content?.image?.data?.attributes?.url && (
								<div className='flex-1 w-full'>
									{/* lg:max-h-60 flex-col justify-end hidden lg:flex */}
									<figure className='lg:max-h-60 flex-col justify-end hidden lg:flex'>
										<Image
											src={`${process.env.NEXT_PUBLIC_API_URL}${content?.image?.data?.attributes?.url}`}
											height={content?.image?.data?.attributes?.height || 1000}
											width={content?.image?.data?.attributes?.width || 1000}
											alt='discount image'
											className='relative w-full pointer-events-none max-h-[420px] object-contain'
										/>
									</figure>
								</div>
							)}
							<div className='flex flex-col justify-between lg:w-1/2'>
								<div>
									<h3 className='text-4xl'>Money Back Guarantee</h3>
									<p className='text-xl'>{content?.description}</p>
								</div>
								<div>
									<Link href='/refund-policy' className='btn btn-white btn-lg'>
										Read our full Refund Policy
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
