import { RiVipCrownLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WritingPlan({ plan }) {
  const [activeWritingPackage, setActiveWritingPackage] = useState(
    plan.writingPackages.data[0]
  );
  // console.log("pricing", plan.pricingPlan.plans.data);
  return (
    <>
      {/* <div className="rounded-xl bg-slate-50 p-6 hidden lg:block">
        <h4 className="text-2xl mb-3">News Story Writing</h4>
        <div className="join">
          {plan?.writingPackages.data.map((item, index) => {
            return (
              <button
                className={`join-item btn capitalize ${
                  activeWritingPackage.attributes.packageType ==
                  item.attributes.packageType
                    ? "bg-active"
                    : " "
                }`}
                role="button"
                name="options"
                aria-label={item.attributes.packageType}
                key={`writing-plan-` + index + new Date().toString()}
                onClick={() => {
                  setActiveWritingPackage(item);
                }}
              >
                {item.attributes.packageType}
              </button>
            );
          })}
        </div>
      </div> */}
      {/* <div className=" grid-cols-10 hidden lg:grid">
        <div className="col-span-3">
          <div className="flex flex-col">
            <div className="table-item">Total News Outlets</div>
            <div className="table-item">News Story Price</div>
            <div className="table-item">Included Revisions</div>
            <div className="table-item">News Story Written In</div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-4 ">
            {plan?.pricingPlan?.plans.data.map((item, index) => {
              return (
                <div key={index}>
                  {activeWritingPackage && (
                    <div
                      key={`story-writing-` + index + new Date().toString()}
                      className="flex flex-col"
                    >
                      <div className="table-item">
                        {activeWritingPackage.attributes.storyLength}
                      </div>
                      <div className="table-item">
                        ${activeWritingPackage.attributes.price}
                      </div>
                      <div className="table-item">
                        {activeWritingPackage.attributes.revision}
                      </div>
                      <div className="table-item">
                        {activeWritingPackage.attributes.storyWrittenIn}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}
