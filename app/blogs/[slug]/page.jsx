import React from "react";
import BlogSingle from "@/templates/BlogSingle";
import { getBlogBySlug, getBlogData } from "@/services/blogpage";

export async function generateMetadata({ params }) {
  const blogData = await getBlogBySlug(params.slug);
  const currentBlog = blogData.data.data[0];

  if (!currentBlog) {
    return {
      title: "Blog",
      description: "The requested blog could not be found.",
    };
  }

  // const seo = currentBlog.attributes.seo

  const imageUrl =
    // currentBlog.attributes.image?.url ||
    "https://res.cloudinary.com/dbhgrickp/image/upload/v1720070017/website-opener_na7bu9.jpg";

  // const imageList = currentBlog?.attributes?.seo?.metaImage?.media?.data

  // const ogImages = imageList?.map((img) => ({
  // 	url: process?.env?.NEXT_PUBLIC_API_URL + img?.attributes?.url,
  // 	width: img?.attributes?.width,
  // 	height: img?.attributes?.height,
  // 	alt: img?.attributes?.alternativeText || img?.attributes?.name,
  // }))

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: currentBlog.attributes.title,
    description: "Read the full article on EasyPRWire.",
    alternates: {
      canonical: `/blogs/${params.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_IE",
      url: `https://easyprwire.com/blogs/${params.slug}`,
      siteName: "Easy PR",
      title: currentBlog.attributes.title,
      description: "Read the full article on EasyPRWire.",
      // images: ogImages,
    },
    twitter: {
      site: "@easyprco",
      cardType: "summary_large_image",
      title: currentBlog.attributes.title,
      description: "Read the full article on EasyPRWire.",
      images: [imageUrl],
    },
  };
}

export default async function Post({ params }) {
  const blogData = await getBlogBySlug(params.slug);
  const allBlogsData = await getBlogData();

  return (
    <>
      <BlogSingle
        blogData={blogData.data.data[0]}
        params={params}
        allBlogs={allBlogsData.data.data}
      />
    </>
  );
}
