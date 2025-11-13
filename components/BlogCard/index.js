"use client";
import React from "react";
import { format } from "date-fns";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = (blogs) => {
  const blogItem = blogs.blogs.attributes;
  // console.log("blog items", blogItem);
  return (
    <>
      <Link href={"/blog/" + blogItem?.slug}>
        <div className="card hover:shadow-lg duration-300 ease-in-out">
          <div className="border border-slate-200 py-8 px-6 rounded-br-2xl rounded-bl-2xl flex flex-col gap-5">
            <div className="flex-col gap-3 flex">
              <h3 className="text-2xl line-clamp-2 ">{blogItem.title}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="pr-3 uppercase text-primary-400">
                PR Services
              </span>
              <span className="text-gray-400 pl-3">
                {format(new Date(blogItem?.publishedAt), "d MMM yyy")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
