"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Overview({ plan }) {
  const [isOpen, setIsOpen] = useState(true); // Track open/close state

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle state
  };

  return (
    <div className="custom-accordion mb-6">
      {/* Accordion Header (Clickable) */}
      <div
        className="rounded-xl bg-slate-50 p-6 hidden lg:flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h4 className="text-2xl">Overview</h4>
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          height={24}
          className="text-gray-600"
        />
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="flex-col hidden lg:flex ">
          {plan?.overviewTopics?.data.map((item, index) => (
            <div key={`overview-topic-${index}`} className="flex">
              <div className="table-item max-w-[26rem] w-full font-medium">
                {item.attributes.name}
              </div>

              {plan?.pricingPlan?.plans?.data.map((newItem, idx) => {
                const findData = newItem?.attributes?.overviewTopics.find(
                  (dataItem) => dataItem.overviewTopic?.data?.id === item.id
                );

                return (
                  <div
                    key={`story-writing-${idx}`}
                    className="table-item max-w-[13.5rem] w-full"
                  >
                    {findData ? (
                      findData.value ? (
                        findData.value
                      ) : findData.isAvailable ? (
                        <Icon icon="charm:tick" color="#32d583" height={24} />
                      ) : (
                        <Icon
                          icon="radix-icons:cross-2"
                          color="#f04438"
                          height={24}
                        />
                      )
                    ) : (
                      "No data"
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
