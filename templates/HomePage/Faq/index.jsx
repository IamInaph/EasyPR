"use client";

import React, { useEffect, useState } from "react";
import Sticky from "@/components/Sticky";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Icon } from "@iconify/react";
import Script from "next/script";

export default function Faq({ faqs }) {
  const [openTab, setopenTab] = useState(null);

  const faqData = faqs.faqs.data;
  const groupedData = faqData.reduce((groups, item) => {
    const { category } = item.attributes;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
  // console.log("faq", groupedData);

  return (
		<>
			<section className='bg-slate-50 faq-section' id='faq'>
				<div className='container mx-auto'>
					<div className='text-center'>
						<span className='text-key'>{faqs.section.name}</span>
						<h2>{faqs.section.title}</h2>
						<p>{faqs.section.subTitle}</p>
					</div>
					<Tabs className='flex lg:flex-row flex-col tabs-box gap-12 items-start mt-20'>
						<Sticky offsetTop={80} offsetBottom={20} className='min-w-[20rem]'>
							<TabList className='flex flex-col gap-4'>
								{Object.entries(groupedData).map(([category]) => (
									<Tab key={category}>
										<Icon icon='iconamoon:news' height={20} />
										{category}
									</Tab>
								))}
							</TabList>
						</Sticky>

						{Object.entries(groupedData).map(([category, items]) => (
							<TabPanel key={category}>
								<div>
									{items.map((item, index) => {
										const isTabOpen = openTab === index
										return (
											<div key={item.id}>
												<div
													className={`${isTabOpen ? 'active' : ' '} accordion`}
													onClick={() => {
														setopenTab(index)
													}}
												>
													<div className='accordion-title '>
														{item.attributes.question}
														<div>
															{isTabOpen ? (
																<Icon
																	icon='ph:minus-circle'
																	className='text-primary-400'
																	height={26}
																/>
															) : (
																<Icon icon='ph:plus-circle' height={26} />
															)}
														</div>
													</div>
													<div className='accordion-content'>
														<p>{item.attributes.answer}</p>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</TabPanel>
						))}
					</Tabs>
				</div>
			</section>

			<Script
				id='faq-schema'
				type='application/ld+json'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: [
							{
								'@type': 'Question',
								name: 'What makes EasyPRwire the best press release service for businesses?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.',
								},
							},
							{
								'@type': 'Question',
								name: 'How long does a press release take from writing to publishing?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.',
								},
							},
							{
								'@type': 'Question',
								name: 'Can I edit my press release after it’s published?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'No, published content from our press release wire distribution can’t be edited. We offer removal and republishing for a fee, so review your draft carefully before submission.',
								},
							},
							{
								'@type': 'Question',
								name: 'Do you use AI like ChatGPT to write press releases?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'No. Our press releases are human-written, crafted by professionals with journalism and marketing backgrounds to ensure original, high-quality content.',
								},
							},
							{
								'@type': 'Question',
								name: 'What are the image requirements for press releases?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Submit high-resolution images (JPG/PNG) without logos or overlays. Clear, professional visuals support online press release services and improve syndication.',
								},
							},
							{
								'@type': 'Question',
								name: 'What do you need to start writing my press release?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'We need your website or social link and contact info. Optionally, you can provide keywords, quotes, or a YouTube video to guide your business press release.',
								},
							},
							{
								'@type': 'Question',
								name: 'What topics work best for a press release?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Strong press release topics include product launches, events, partnerships, and milestones. Avoid promotional or vague language.',
								},
							},
							{
								'@type': 'Question',
								name: 'Writing Service Publishing What are the news sites I will be published in?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'We offer four press release publishing packages designed to meet different needs. The Limited Package is ideal for sensitive topics like crypto, dating, or supplements, and distributes your release to over 250 news sites, excluding most major outlets. The Popular Package, our most selected option, covers 200+ distribution sites including trusted FOX affiliate sites. The Authority Package targets SEO by placing your release on six high-authority platforms. For maximum visibility, the Ultimate Package distributes to more than 1,000 news sites across our entire network. Every package includes a full site list and sample report so you can see exactly where your press release will appear.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will all the backlinks be do-follow?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Some sites provide do-follow links, others use no-follow. Both types improve SEO and traffic from your press release service.',
								},
							},
							{
								'@type': 'Question',
								name: 'Can I promote affiliate products or links in my press release?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Yes, but use a landing page instead of direct affiliate links to stay compliant with editorial standards in press release distribution.',
								},
							},
							{
								'@type': 'Question',
								name: 'Do you have white label reports?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Yes. We provide white label reports in multiple formats, making our press release service ideal for agencies and resellers.',
								},
							},
							{
								'@type': 'Question',
								name: 'How can press releases help me get verified on social media?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'We help boost your social media verification chances by publishing on trusted news outlets that support notability requirements.',
								},
							},
							{
								'@type': 'Question',
								name: 'How long will the news story stay live?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Most releases stay live 3–24 months, depending on the outlet. Monthly press release distribution helps maintain SEO visibility.',
								},
							},
							{
								'@type': 'Question',
								name: 'What are your article guidelines if I write my own article?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'If you prefer to write your own press release, we’re happy to publish it—provided it meets our editorial standards. Your article must be professionally written, newsworthy, and free from overly promotional language. It should read like a real news story, not an ad. To qualify for our press release wire distribution, we recommend following our official writing guidelines to avoid delays or rejections. This ensures your release is accepted across our online press release services and network of trusted media sites.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will I get on the first page of Google?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'If you choose to write your own press release, we’re happy to publish it as long as it meets our editorial standards. Your article must be professionally written, clearly newsworthy, and free from overly promotional language. It should read like a credible news story, not an advertisement. To ensure it qualifies for press release wire distribution, follow our official writing guidelines. Meeting these standards helps avoid delays or rejections across our online press release services and media network.',
								},
							},
							{
								'@type': 'Question',
								name: 'What topics or businesses are not accepted?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'We don’t accept adult, political, or speculative crypto content. Sensitive topics may be limited to our Limited Package.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will each news site receive a different article?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'No. We send the same press release to all outlets. This duplicate content model is standard and does not harm SEO.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will I get more website visitors?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Yes. Our releases drive targeted traffic, boost brand visibility, and rank on Google for high-intent keywords, helping you grow consistently.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will my article be published on the main sites of FOX?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'No. It appears on FOX affiliate sites like FOX 40 and FOX 43, which still offer strong SEO value and audience reach.',
								},
							},
							{
								'@type': 'Question',
								name: 'Can I review the article before its published?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'Yes. All press release writing packages include at least two rounds of revision to ensure you’re satisfied.',
								},
							},
							{
								'@type': 'Question',
								name: 'Will publications be labeled as sponsored content?',
								acceptedAnswer: {
									'@type': 'Answer',
									text: 'No. Many trusted outlets like Benzinga and The Globe and Mail do not label press releases as sponsored, improving credibility and trust.',
								},
							},
						],
					}),
				}}
			/>
		</>
	)
}
