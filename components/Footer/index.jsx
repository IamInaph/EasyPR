import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../Svg/LogoWhite";

export default function Footer() {
  let mail = "hello@easyprwire.com"
  return (
		<>
			<footer>
				<div className='container flex flex-col gap-20'>
					<div className='grid-cols-5 grid gap-20'>
						<div className='lg:col-span-2 col-span-5 flex flex-col gap-3'>
							<LogoWhite />
							<span className='text-gray-400 mt-4'>
								Easy PR is here to get you High-Quality press release
								distribution services and boost your brand by Immediate
								submission to Major News Sites.
							</span>
						</div>
						<div className='lg:col-span-3 col-span-5 '>
							<div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-y-4'>
								<div>
									<h4>Main Page</h4>
									<ul>
										<li className='nav-link '>
											<Link href='/'>Home</Link>
										</li>
										<li className='nav-link '>
											<Link href='/about'>About</Link>
										</li>
										<li className='nav-link '>
											<Link href='/contact'>Contact</Link>
										</li>
										<li className='nav-link '>
											<Link href='/blog'>Blogs</Link>
										</li>
										<li className='nav-link '>
											<Link href='/newsroom'>Newsroom</Link>
										</li>
										<li className='nav-link '>
											<Link href='/#pricing-plan'>Order Now</Link>
										</li>
									</ul>
								</div>
								<div>
									<h4>Publishing Networks</h4>
									<ul>
										<li className='nav-link '>
											<Link href='/#plan'>Popular</Link>
										</li>
										<li className='nav-link '>
											<Link href='/#plan'>Alternative</Link>
										</li>
										<li className='nav-link '>
											<Link href='/#plan'>Authority</Link>
										</li>
										<li className='nav-link '>
											<Link href='/#plan'>Ultimate</Link>
										</li>
										<li className='nav-link '>
											<Link href='/press-release-archives'>
												Press Release Archives
											</Link>
										</li>
									</ul>
								</div>
								<div>
									<h4>Follow us</h4>
									<ul>
										<li className='nav-link '>
											<Link
												href='https://www.facebook.com/easyprwire/'
												target='_blank'
											>
												Facebook
											</Link>
										</li>
										<li className='nav-link '>
											<Link
												href='https://www.linkedin.com/company/easyprwire/'
												target='_blank'
											>
												Linkedin
											</Link>
										</li>
										<li className='nav-link '>
											<Link
												href='https://twitter.com/easyprwire'
												target='_blank'
											>
												Twitter
											</Link>
										</li>
									</ul>
								</div>
								<div>
									<h4>Get In Touch</h4>
									<ul>
										<li className='nav-link'>
											<strong className='text-gray-300 block'>Mail:</strong>
											<a
												href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`}
												target='_blank'
												rel='noopener noreferrer'
											>
												hello@easyprwire.com
											</a>
										</li>
										<li className='nav-link'>
											<strong className='text-gray-300 block'>Call:</strong>
											<a
												href='tel:+19174750021'
												target='_blank'
												className='hover:text-primary-300'
											>
												+1 9174750021
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-between lg:items-end lg:flex-row flex-col'>
						<div className='flex flex-col lg:flexraw justify-between'>
							<span className='order-2 lg:order-1 text-gray-400 mt-2 lg:mt-0'>
								&copy; 2024 Easy PR All rights reserved.
							</span>
						</div>
						<div className='flex flex-wrap gap-2 order-1 lg:order-2'>
							<Link
								className='nav-link border-r pr-2 border-gray-600'
								href='/terms'
							>
								Terms & Conditions
							</Link>
							<Link
								className='nav-link border-r pr-2 border-gray-600'
								href='/policy'
							>
								Privacy Policy
							</Link>
							<Link className='nav-link' href='/refund-policy'>
								Refund Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
