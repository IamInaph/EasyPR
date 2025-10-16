"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { getStrapiMedia } from "@/utils/media";
import Image from "next/image";

export default function Topics({ plan }) {
  const [isOpen, setIsOpen] = useState(true); // Track open/close state

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle state
  };
  return (
    <>
      <div
        className="rounded-xl bg-slate-50 p-6 hidden lg:flex justify-between items-center cursor-pointer mb-6"
        onClick={toggleAccordion}
      >
        <h4 className="text-2xl">Accepted Topics</h4>
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          height={24}
          className="text-gray-600"
        />
      </div>
      {isOpen && (
        <div className=" flex-col hidden lg:flex">
          {plan?.acceptedTopics.data.map((item, index) => {
            return (
              <div
                className="flex"
                key={`overview-topic-` + index + new Date().toString()}
              >
                <div className="table-item max-w-[26rem] w-full flex items-center gap-3">
                  <span> {item.attributes.name} </span>
                </div>
                {plan?.pricingPlan.plans.data.map((newItem, index) => {
                  
                  const findData = newItem?.attributes.acceptedTopics.find(
                    (dataItem) =>
                      dataItem.newsTopic.data
                        ? dataItem.newsTopic.data.id === item.id
                        : false
                  );
                  // console.log("find topic", findData);
                  return (
                    <div
                      key={`outlets-` + index + new Date().toString()}
                      className=" table-item max-w-[13.5rem] w-full"
                    >
                      {findData?.isAccepted ? (
                        <Icon icon="charm:tick" color="#32d583" height={24} />
                      ) : (
                        <Icon
                          icon="radix-icons:cross-2"
                          color="#f04438"
                          height={24}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
