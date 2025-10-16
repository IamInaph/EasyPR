import { RiVipCrownLine } from '@remixicon/react'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '@/utils/media'
export default function Hero({ hero }) {
	// console.log("hero section", hero);
	return (
		<>
			<section className='pb-[1.25rem]'>
				<div className='container'>
					<div className='grid lg:grid-cols-2 gap-6'>
						<div className='flex flex-col gap-12 '>
							<div>
								<div className='flex flex-col lg:flex-row gap-2 items-center'>
									<figure className='relative min-w-52 min-h-12 block'>
										<Image
											src='/images/avatars.png'
											fill
											sizes='100vh'
											priority
											className='object-contain'
											alt="User's combine image"
										/>
									</figure>
									<div>
										<div className='text-primary-300 border border-primary-300 bg-primary-50 rounded-full py-1.5 px-5 inline-flex gap-1 items-center'>
											<RiVipCrownLine height={18} /> {hero?.section.name}
										</div>
									</div>
								</div>
								<h1 className='lg:text-[3.75rem] text-[2.5rem] mx-auto lg:mx-0 leading-[3rem] lg:leading-tight lg:text-left text-center font-bold max-w-lg mb-0'>
									{hero?.section.title} <mark>{hero?.section.subTitle}</mark>
								</h1>
							</div>
							<div>
								<div className='text-gray-500 text-[1.25rem] lg:text-left text-center'>
									{hero?.section.description}
								</div>
								<div className='flex flex-wrap gap-8 mt-2 justify-center lg:justify-start'>
									{hero?.topBrands.data.map((item, index) => {
										const imageData = item.attributes.brandImage
										return (
											<figure
												className='relative min-w-28 lg:min-h-20 min-h-14 block'
												key={index}
											>
												<Image
													src={getStrapiMedia(imageData?.media)}
													fill
													sizes='100vh'
													priority
													className='object-contain'
													alt={imageData?.alt}
												/>
											</figure>
										)
									})}
								</div>
							</div>
							<div className='flex lg:flex-row flex-col gap-4 items-center'>
								<Link
									href='/#pricing-plan'
									className='btn btn-primary btn-lg lg:w-64 w-full'
								>
									Order Now
								</Link>
								<Link
									href='/#plan'
									className='btn btn-outline btn-lg lg:w-64 w-full'
								>
									Our Plan &amp; Pricing
								</Link>
								{/* <div className="hidden lg:block">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.28007 9.65003C7.42052 9.82581 7.49941 10.0641 7.49941 10.3125C7.49941 10.561 7.42052 10.7992 7.28007 10.975L4.81007 14.0625H21.0001C21.199 14.0625 21.3898 14.1613 21.5304 14.3371C21.6711 14.5129 21.7501 14.7514 21.7501 15C21.7501 15.2487 21.6711 15.4871 21.5304 15.6629C21.3898 15.8388 21.199 15.9375 21.0001 15.9375H4.81007L7.28007 19.025C7.35376 19.1109 7.41286 19.2144 7.45385 19.3294C7.49485 19.4444 7.51689 19.5685 7.51866 19.6944C7.52044 19.8203 7.50192 19.9453 7.4642 20.062C7.42647 20.1788 7.37033 20.2848 7.29911 20.3738C7.22789 20.4629 7.14306 20.533 7.04967 20.5802C6.95628 20.6273 6.85625 20.6505 6.75555 20.6483C6.65485 20.646 6.55553 20.6185 6.46353 20.5673C6.37153 20.516 6.28873 20.4421 6.22007 20.35L2.47007 15.6625C2.32962 15.4867 2.25073 15.2485 2.25073 15C2.25073 14.7516 2.32962 14.5133 2.47007 14.3375L6.22007 9.65003C6.3607 9.47447 6.55132 9.37585 6.75007 9.37585C6.94882 9.37585 7.13945 9.47447 7.28007 9.65003Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-lg text-center lg:text-left">
                  {hero.availableNetworks}
                </div> */}
							</div>
						</div>
						<div>
							<figure className='relative h-full'>
								<Image
									src={getStrapiMedia(hero?.section?.image?.media)}
									fill
									sizes='100vw'
									priority
									className='object-contain'
									alt={hero?.section.image.alt}
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
