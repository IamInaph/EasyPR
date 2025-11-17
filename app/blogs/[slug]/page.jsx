import React from "react";
import BlogSingle from "@/templates/BlogSingle";
import { getBlogBySlug, getBlogData } from "@/services/blogpage";
import { getMediaUrl } from "@/utils/media";

export async function generateMetadata({ params }) {
  const blogData = await getBlogBySlug(params.slug);
  const currentBlog = blogData;
  const seo = blogData.seo;

  if (!currentBlog) {
    return {
      title: "Blog",
      description: "The requested blog could not be found.",
    };
  }

  const imageUrl = currentBlog.meta_image
    ? getMediaUrl(currentBlog.meta_image)
    : "https://res.cloudinary.com/dbhgrickp/image/upload/v1720070017/website-opener_na7bu9.jpg";

  return {
    metadataBase: new URL("https://easyprwire.com"),
    title: seo.meta_title || currentBlog.title,
    description: seo.meta_description || "Read the full article on EasyPRWire.",
    alternates: {
      canonical: `/blogs/${params.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_IE",
      url: `https://easyprwire.com/blogs/${params.slug}`,
      siteName: "Easy PR",
      title: seo.meta_title || currentBlog.title,
      description:
        seo.meta_description || "Read the full article on EasyPRWire.",
      images: [imageUrl],
    },
    twitter: {
      site: "@easyprco",
      cardType: "summary_large_image",
      title: seo.meta_title || currentBlog.title,
      description:
        seo.meta_description || "Read the full article on EasyPRWire.",
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
        blogData={blogData}
        params={params}
        allBlogs={allBlogsData.blogs}
      />
    </>
  );
}
