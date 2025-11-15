"use client";
import BlogCard from "@/components/BlogCard";
import Layout from "@/components/Layout";
import React from "react";

export default function BlogPage({ blogData }) {
  const sortedBlogs = [...(blogData?.blogs || [])].sort(
    (a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
  );
  console.log(blogData?.blogs?.[0]);
  return (
    <>
      <Layout>
        <section className=" pb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-12 mb-12 items-end border-b border-gray-300 pb-3">
              <h1 className="">Blogs</h1>
              <p className="text-xl">
                Stories, insights, and advice that will transform how you design
                and build for the web.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 ">
              {sortedBlogs?.map((item, index) => {
                // console.log(item);
                return <BlogCard blogs={item} key={"bloglistpage=" + index} />;
              })}
            </div>
          </div>
        </section>
        ...
      </Layout>
    </>
  );
}
