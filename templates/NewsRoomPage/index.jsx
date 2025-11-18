"use client";
import NewsCard from "@/components/NewsCard";
import Layout from "@/components/Layout";
import React from "react";

const NewsRoomPage = ({ newsData }) => {
  // Updated to match new API format
  const sortedNewsrooms = [...(newsData?.newsrooms || [])].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <>
      <Layout>
        <section className=" pb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-12 mb-12 items-end border-b border-gray-300 pb-3">
              <h1 className="">Newsroom</h1>
              <p className="text-xl">
                Stories, insights, and advice that will transform how you design
                and build for the web.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 ">
              {sortedNewsrooms?.map((item, index) => {
                return (
                  <NewsCard news={item} key={"newsroomlistpage=" + index} />
                );
              })}
            </div>
          </div>
        </section>
        ...
      </Layout>
    </>
  );
};

export default NewsRoomPage;
