"use client";

import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
const Layout = dynamic(() => import("@/components/Layout"));
const BlogCard = dynamic(() => import("@/components/BlogCard"));
import { format } from "date-fns";
import { getMediaUrl } from "@/utils/media";
import Image from "next/image";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import Head from "next/head";

export default function BlogSingle({ blogData, params, className, allBlogs }) {
  const shareUrl = `https://www.easyprwire.com/blogs/${blogData.slug}`;

  // Handle both new API structure (with related_blogs) and old structure (with allBlogs)
  const featuredBlogs = blogData.related_blogs || [];

  return (
    <>
      <Layout>
        <section className="pb-[10rem] sm:pb-[20rem] bg-primary-100">
          <div className="max-w-3xl px-3 mx-auto">
            <div className="text-center">
              <div className="flex gap-4 justify-center text-xl max-sm:text-sm">
                <div>{format(new Date(blogData?.created_at), "d MMM yyy")}</div>
                <div>|</div>
                <div>{blogData.readableInMinutes || 5} min read</div>
                <div>|</div>
                <div>Marketing</div>
              </div>
              <h1 className="text-6xl mt-2 leading-tight max-sm:text-2xl">
                {blogData.title}
              </h1>
              <div className="flex gap-4 justify-center mt-8">
                <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                  <FacebookShareButton
                    url={shareUrl}
                    quote=" Maximizing your reach with marketing strategies">
                    <Icon
                      icon="bxl:facebook"
                      height={26}
                      className="text-gray-900"
                    />
                  </FacebookShareButton>
                </div>
                <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                  <TwitterShareButton
                    url={shareUrl}
                    quote=" Maximizing your reach with marketing strategies">
                    <Icon
                      icon="bxl:twitter"
                      height={26}
                      className="text-gray-900"
                    />
                  </TwitterShareButton>
                </div>
                <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                  <LinkedinShareButton
                    url={shareUrl}
                    quote=" Maximizing your reach with marketing strategies">
                    <Icon
                      icon="bxl:linkedin"
                      height={26}
                      className="text-gray-900"
                    />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-5xl mx-auto mt-12">
          {blogData?.banner_image && (
            <figure className="relative min-w-[10rem] block -mt-[10rem] sm:-mt-[20rem] mb-12">
              <Image
                src={getMediaUrl(blogData?.banner_image)}
                height={2000}
                width={2000}
                priority
                className="object-cover !aspect-auto"
                alt={blogData?.banner_image_alt || "Blog image"}
              />
            </figure>
          )}

          <div className="max-w-4xl mx-auto px-4">
            <article className="flex items-start gap-8">
              <div className="blog-content max-sm:text-lg overflow-x-auto text-justify">
                <Markdown
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        {...props}
                        className="text-blue-600 underline hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul {...props} className="list-disc pl-6 mb-4" />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol {...props} className="list-decimal pl-6 mb-4" />
                    ),
                    li: ({ node, ...props }) => (
                      <li {...props} className="mb-1" />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong {...props} className="text-black font-bold" />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-4">
                        <table
                          {...props}
                          className="border border-gray-300 border-collapse min-w-max text-sm"
                        />
                      </div>
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        {...props}
                        className="border border-gray-400 bg-gray-100 px-3 py-2 text-left font-semibold "
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        {...props}
                        className="border border-gray-300 px-3 py-2"
                      />
                    ),
                  }}>
                  {blogData.content}
                </Markdown>
              </div>
            </article>

            <div className="border-t">
              <div className="flex items-center py-12 rounded-xl justify-center gap-6">
                <div className="text-center">
                  <strong className="text-lg">Share:</strong>
                </div>
                <div className="flex gap-2 justify-center">
                  <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                    <FacebookShareButton
                      url={shareUrl}
                      quote=" Maximizing your reach with marketing strategies">
                      <Icon
                        icon="bxl:facebook"
                        height={26}
                        className="text-gray-500"
                      />
                    </FacebookShareButton>
                  </div>
                  <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                    <TwitterShareButton
                      url={shareUrl}
                      quote=" Maximizing your reach with marketing strategies">
                      <Icon
                        icon="bxl:twitter"
                        height={26}
                        className="text-gray-500"
                      />
                    </TwitterShareButton>
                  </div>
                  <div className="h-12 w-12 border border-gray-300 rounded-full flex flex-col justify-center">
                    <LinkedinShareButton
                      url={shareUrl}
                      quote=" Maximizing your reach with marketing strategies">
                      <Icon
                        icon="bxl:linkedin"
                        height={26}
                        className="text-gray-500"
                      />
                    </LinkedinShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container mx-auto">
            <h2 className="text-center mb-6">Related Posts</h2>

            <div className="grid grid-cols-3 gap-8">
              {Array.isArray(featuredBlogs) &&
                featuredBlogs.slice(0, 3).map((item, index) => (
                  <div
                    className="col-span-3 md:col-span-1"
                    key={`related-${index}`}>
                    <BlogCard blogs={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
