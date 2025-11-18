import Layout from "@/components/Layout";
import { getHomepageData } from "@/services/homepage";
import Faq from "@/templates/HomePage/Faq";
import Started from "@/templates/HomePage/Started";
import React from "react";

export async function generateMetadata() {
  const homeData = await getHomepageData();
  const HomeMeta = homeData.data.data.attributes.seo;
  const imageList = homeData.data.data.attributes.seo.metaImage.media.data;

  const ogImages = imageList.map((img) => ({
    url: process.env.NEXT_PUBLIC_API_URL + img.attributes.url,
    width: img.attributes.width,
    height: img.attributes.height,
    alt: img.attributes.alternativeText || img.attributes.name,
  }));

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: HomeMeta.metaTitle,
    description: HomeMeta.metaDescription,
    alternates: {
      canonical: "/faqs",
    },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://easyprwire.com/",
      siteName: "Easy PR",
      images: ogImages,
      twitter: {
        site: "@easyprco",
        cardType: "summary_large_image",
      },
    },
  };
}

const FAQsPage = async () => {
  const homeData = await getHomepageData();

  const plan = homeData?.data?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "pricing";
  });
  const faqs = homeData?.data?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "faqs";
  });
  const getStarted = homeData?.data?.data?.attributes?.content?.filter(
    (content) => {
      return content?.__component === "sections.ready-to-grow";
    }
  );

  return (
    <Layout plan={plan[0]}>
      <Faq faqs={faqs[0]} />
      <Started getStarted={getStarted[0]} />
    </Layout>
  );
};

export default FAQsPage;
