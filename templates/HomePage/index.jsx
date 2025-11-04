// import Layout from "@/components/Layout";
"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Feature = dynamic(() => import("./Feature"));
const Started = dynamic(() => import("./Started"));
const Faq = dynamic(() => import("./Faq"));
const Process = dynamic(() => import("./Process"));
const Network = dynamic(() => import("./Network"));
const Plan = dynamic(() => import("./Plan"));
const Partner = dynamic(() => import("./Partner"));
const Review = dynamic(() => import("./Review"));
const Offer = dynamic(() => import("./Offer"));

const Layout = dynamic(() => import("@/components/Layout"));

export default function HomePage({ homeData }) {

  const hero = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "hero";
  });
  const partner = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "brands";
  });
  const feature = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "features";
  });
  const feedback = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "feedback";
  });
  const faqs = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "faqs";
  });
  const process = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "process";
  });
  const network = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "network";
  });
  const outlet = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "outlet";
  });
  const plan = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "pricing";
  });
  const moneyBack = homeData?.data?.attributes?.content?.filter((content) => {
    return content?.__component === 'sections.money-back-guarantee'
  });
  const growBrand = homeData?.data?.attributes?.content?.filter((content) => {
		return content?.__component === 'sections.grow-your-brand-today'
  })
  const getStarted = homeData?.data?.attributes?.content?.filter((content) => {
		return content?.__component === 'sections.ready-to-grow'
  })
  const marketDisc = homeData?.data?.attributes?.content?.filter((content) => {
		return content?.__component === 'sections.marketing-and-discount-section'
  })

  return (
		<>
			<Layout plan={plan[0]}>
				<Hero hero={hero[0]} />
				<Partner partner={partner[0]} />
				<Feature feature={feature[0]} />
				<Plan plan={plan[0]} />
				<Process process={process[0]} growBrand={growBrand[0]} />
				<Network network={network[0]} outlet={outlet[0]} />
				<Offer content={moneyBack[0]} marketingContent={marketDisc[0]} />
				{/* <Review feedback={feedback[0]} /> */}
				<Faq faqs={faqs[0]} />
				<Started getStarted={getStarted[0]} />
			</Layout>
		</>
	)
}
