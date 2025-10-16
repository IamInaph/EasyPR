"use client";

import React, { useEffect, useState } from "react";
import Sticky from "@/components/Sticky";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Icon } from "@iconify/react";

export default function Faq({ faqs }) {
  const [openTab, setopenTab] = useState(null);

  const faqData = faqs.faqs.data;
  const groupedData = faqData.reduce((groups, item) => {
    const { category } = item.attributes;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
  // console.log("faq", groupedData);

  return (
    <>
      <section className="bg-slate-50 faq-section" id="faq">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-key">{faqs.section.name}</span>
            <h2>{faqs.section.title}</h2>
            <p>{faqs.section.subTitle}</p>
          </div>
          <Tabs className="flex lg:flex-row flex-col tabs-box gap-12 items-start mt-20">
            <Sticky offsetTop={80} offsetBottom={20} className="min-w-[20rem]">
              <TabList className="flex flex-col gap-4">
                {Object.entries(groupedData).map(([category]) => (
                  <Tab key={category}>
                    <Icon icon="iconamoon:news" height={20} />
                    {category}
                  </Tab>
                ))}
              </TabList>
            </Sticky>

            {Object.entries(groupedData).map(([category, items]) => (
              <TabPanel key={category}>
                <div>
                  {items.map((item, index) => {
                    const isTabOpen = openTab === index;
                    return (
                      <div key={item.id}>
                        <div
                          className={`${isTabOpen ? "active" : " "} accordion`}
                          onClick={() => {
                            setopenTab(index);
                          }}
                        >
                          <div className="accordion-title ">
                            {item.attributes.question}
                            <div>
                              {isTabOpen ? (
                                <Icon
                                  icon="ph:minus-circle"
                                  className="text-primary-400"
                                  height={26}
                                />
                              ) : (
                                <Icon icon="ph:plus-circle" height={26} />
                              )}
                            </div>
                          </div>
                          <div className="accordion-content">
                            <p>{item.attributes.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
