import ServicePage from "@/templates/ServicePage";
import { getEcommerceBrandsServicePageData } from "@/services/ecommerceBrandsService";
import { getHomepageData } from "@/services/homepage";

export async function generateMetadata() {
  const serviceData = await getEcommerceBrandsServicePageData();
  const serviceMeta = serviceData?.data?.data?.attributes?.seo;

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: serviceMeta?.metaTitle,
    description: serviceMeta?.metaDescription,
    alternates: {
      canonical: "/services/press-release-services-for-ecommerce-brands",
    },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://easyprwire.com/services/press-release-services-for-ecommerce-brands",
      siteName: "Easy PR",
    },
  };
}

export default async function Service() {
  const serviceData = await getEcommerceBrandsServicePageData();
  const homeData = await getHomepageData();

  const partner = homeData.data.data.attributes.content.filter((content) => {
    return content?.section?.uid === "brands";
  });

  const faqs = homeData?.data?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "faqs";
  })?.[0];

  const plan = homeData?.data?.data?.attributes?.content?.filter((content) => {
    return content?.section?.uid === "pricing";
  })?.[0];

  return (
    <ServicePage
      serviceData={serviceData}
      partner={partner[0]}
      faqs={faqs}
      homeData={homeData?.data}
      plan={plan}
    />
  );
}
