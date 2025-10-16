"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStrapiMedia } from "@/utils/media";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Network({ network, outlet }) {
  // console.log("outlet", outlet);
  return (
    <>
      <section className="bg-slate-50 " id="network">
        <div className="container">
          <div className="text-center max-w-md mx-auto mb-10">
            <span className="text-key"> {network?.section.name}</span>
            <h2> {network?.section.title}</h2>
            {/* <span>{network?.section.subTitle}</span> */}
          </div>
        </div>
        <Tabs>
          <TabList className="overflow-x-scroll lg:overflow-hidden flex lg:justify-center justify-start text-large gap-4">
            {network?.networks.data.map((item, index) => {
              return <Tab key={index}>{item.attributes.name}</Tab>;
            })}
          </TabList>

          {network?.networks.data.map((item, index) => {
            // console.log("network", item.attributes.majorOutlets);

            return (
              <TabPanel key={index}>
                <div className="container mx-auto mt-4">
                  <p className="text-center max-w-xl mx-auto text-lg">
                    {item.attributes.description}
                  </p>

                  <div className="bg-white mt-8 lg:mt-4 lg:rounded-full grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-6 py-6 lg:px-16 px-3 justify-center text-center">
                    <div>
                      <strong className="lg:text-[24px] text-2xl text-gray-900 block">
                        ${item.attributes.price}
                      </strong>
                      <span className="uppercase text-gray-400">
                        TOTAL PRICE
                      </span>
                    </div>
                    <div>
                      <strong className="lg:text-[24px] text-3xl text-gray-900 block">
                        {item.attributes.newsSites}
                      </strong>
                      <span className="uppercase text-gray-400">
                        NEWS SITES
                      </span>
                    </div>
                    <div>
                      <strong className="lg:text-[24px] text-3xl text-gray-900 block">
                        {item.attributes.maxAuthority}
                      </strong>
                      <span className="uppercase text-gray-400">
                        MAX AUTHORITY
                      </span>
                    </div>
                    <div>
                      <strong className="lg:text-[24px] text-3xl text-gray-900 block">
                        {item.attributes.monthlyReaders}
                      </strong>
                      <span className="uppercase text-gray-400">READERS</span>
                    </div>
                  </div>
                </div>
                <div className="mt-20 flex flex-col gap-12">
                  <Marquee>
                    {item?.attributes?.majorOutlets.map((data, index) => {
                      const itemOutlets = data?.newsOutlet?.data?.attributes;
                      return (
                        <div
                          className="bg-white p-6 rounded-lg flex flex-col gap-4 min-w-60 mx-6"
                          key={index}
                        >
                          <figure
                            className="relative max-w-28 min-h-12 "
                            key={index}
                          >
                            {itemOutlets?.image?.media && (
                              <Image
                                src={getStrapiMedia(itemOutlets?.image?.media)}
                                fill
                                sizes="100vh"
                                priority
                                className="object-contain"
                                alt={itemOutlets?.image.alt}
                              />
                            )}
                          </figure>
                          <div className="flex justify-between">
                            <div>
                              <mark className="block text-2xl">
                                {itemOutlets?.visitors}
                              </mark>
                              <span>Visitors</span>
                            </div>
                            <div>
                              <mark className="block text-2xl">
                                {itemOutlets?.authority}
                              </mark>
                              <span>Authority</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </TabPanel>
            );
          })}

          <div className=" max-w-3xl mx-auto text-center mt-20">
            <h2>{outlet?.section.title}</h2>
            <span className="max-w-sm mx-auto block">
              {outlet?.section.subTitle}
            </span>

            <div className="flex lg:flex-row flex-col gap- justify-center mt-12">
              {outlet?.outlets.data.map((item, index) => {
                return (
                  <div
                    className="bg-white p-6 rounded-lg flex flex-col gap-4 min-w-[20rem] mx-6"
                    key={index}
                  >
                    <div className=" flex justify-between items-center">
                      <figure className="relative max-w-28 min-h-12 w-full">
                        {item?.attributes.image && (
                          <Image
                            src={getStrapiMedia(item?.attributes.image?.media)}
                            fill
                            sizes="100vh"
                            priority
                            className="object-contain"
                            alt={item.attributes?.image.alt}
                          />
                        )}
                      </figure>
                      <div>
                        <div className="text-xl bg-slate-900 text-white py-0 px-1.5 rounded-sm">
                          ${item.attributes.price}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-20">
                      <div className="text-left">
                        <mark className="block text-2xl">
                          {item.attributes.visitors}
                        </mark>
                        <span>Visitors</span>
                      </div>
                      <div className="text-left">
                        <mark className="block text-2xl">
                          {item.attributes.authority}
                        </mark>
                        <span>Authority</span>
                      </div>
                    </div>
                    {item.attributes.url && item.attributes.url.href && (
                      <Link
                        href={item.attributes.url.href}
                        target="_blank"
                        className="flex gap-1 items-center text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        <Icon
                          icon="ph:share-fat-bold"
                          className="text-blue-500 hover:text-blue-500"
                        />
                        <span className="text-blue-500 hover:text-blue-500">
                          Sample Publication
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Tabs>
      </section>
    </>
  );
}
