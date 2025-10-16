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
export const metadata = {
  // title: { homeData },
  decription: "Test Data",
};
export default function PressReleasePage({ homeData }) {
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
  const faqs = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "faqs";
  });
  const process = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "process";
  });
  const network = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "network";
  });
  const outlet = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "outlet";
  });
  const plan = homeData.data.attributes.content.filter((content) => {
    return content?.section?.uid === "pricing";
  });
  return (
    <>
      <Layout>
        <Hero hero={hero[0]} />
        <Partner partner={partner[0]} />
        <Process process={process[0]} />
        {/* <Plan plan={plan[0]} /> */}
        {/* <Offer /> */}
        {/* <Review feedback={feedback[0]} /> */}
        <Review feedback={feedback[0]} />
        <Faq faqs={faqs[0]} />
        <Started />
      </Layout>
    </>
  );
}
