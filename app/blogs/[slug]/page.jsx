import React from "react";
import BlogSingle from "@/templates/BlogSingle";
import { getBlogBySlug, getBlogData } from "@/services/blogpage";

export async function generateMetadata({ params }) {
  const blogData = await getBlogBySlug(params.slug);
  const currentBlog = blogData.data.blogs[0];
  const seo = blogData.data.seo;

  if (!currentBlog) {
    return {
      title: "Blog",
      description: "The requested blog could not be found.",
    };
  }

  const imageUrl =
    currentBlog.banner_image
      ? process?.env?.NEXT_PUBLIC_API_URL + currentBlog.banner_image
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
      description: seo.meta_description || "Read the full article on EasyPRWire.",
      images: [imageUrl],
    },
    twitter: {
      site: "@easyprco",
      cardType: "summary_large_image",
      title: seo.meta_title || currentBlog.title,
      description: seo.meta_description || "Read the full article on EasyPRWire.",
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
        blogData={blogData.data.blogs[0]}
        params={params}
        allBlogs={allBlogsData.data.blogs}
      />
    </>
  );
}
