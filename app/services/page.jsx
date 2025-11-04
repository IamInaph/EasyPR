import ServicePage from "@/templates/ServicePage";
import { getServicePageData } from "@/services/servicepage";
import { getHomepageData } from "@/services/homepage";
import { log } from "console";

export async function generateMetadata() {
  const serviceData = await getServicePageData();
  const serviceMeta = serviceData?.data?.data?.attributes?.seo;

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: serviceMeta?.metaTitle,
    description: serviceMeta?.metaDescription,
    alternates: {
      canonical: "/service",
    },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://easyprwire.com/service",
      siteName: "Easy PR",
    },
  };
}

export default async function Service() {
  const serviceData = await getServicePageData();
  const homeData = await getHomepageData();

  const partner = homeData.data.data.attributes.content.filter((content) => {
    return content?.section?.uid === "brands";
  });

  const faqs = homeData?.data?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "faqs";
  })?.[0];

  return (
    <ServicePage
      serviceData={serviceData?.data}
      partner={partner[0]}
      faqs={faqs}
      homeData={homeData?.data}
    />
  );
}
