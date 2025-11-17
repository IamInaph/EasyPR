import NewsSingle from "@/templates/NewsSingle";
import { getNewsRoomBySlug } from "@/services/newsroom";

export async function generateMetadata({ params }) {
  const newsData = await getNewsRoomBySlug(params.slug);
  const seo = newsData?.seo;

  const ogImage = seo?.meta_image
    ? process?.env?.NEXT_PUBLIC_API_URL + seo.meta_image
    : null;

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: seo?.meta_title || newsData?.title,
    description: seo?.meta_description || newsData?.description,
    alternates: {
      canonical: `/newsroom/${params.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: `https://easyprwire.com/newsroom/${params.slug}`,
      siteName: "Easy PR",
      images: ogImage ? [{ url: ogImage }] : [],
      twitter: {
        site: "@easyprco",
        cardType: "summary_large_image",
      },
    },
  };
}

export default async function NewsRoomSingle({ params }) {
  const newsData = await getNewsRoomBySlug(params.slug);
  return <NewsSingle newsData={newsData} params={params} />;
}
