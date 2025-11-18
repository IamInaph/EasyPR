import BlogPage from "@/templates/BlogPage";
import { getBlogData } from "@/services/blogpage";

export async function generateMetadata() {
  const blogData = await getBlogData();
  const seo = blogData.seo;

  const ogImage = seo?.meta_image
    ? process?.env?.NEXT_PUBLIC_API_URL + seo.meta_image
    : null;

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: seo.meta_title,
    description: seo.meta_description,
    alternates: {
      canonical: "/blogs",
    },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://easyprwire.com/blog",
      siteName: "Easy PR",
      images: ogImage ? [{ url: ogImage }] : [],
      twitter: {
        site: "@easyprco",
        cardType: "summary_large_image",
      },
    },
  };
}

export default async function Blog() {
  const blogData = await getBlogData();
  return <BlogPage blogData={blogData} />;
}
