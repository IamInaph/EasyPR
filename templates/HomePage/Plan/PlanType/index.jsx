import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import React from "react";
import PlanReport from "../PlanReport";

export default function PlanType({ plan, indiePage, isSmall }) {
  const handleReportDownload = (e, name, url) => {
    e.preventDefault();
    const reportUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

    const link = document.createElement("a");
    link.href = reportUrl;
    link.target = "_blank";
    link.download = `${name}-sample-report.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {/* <PlanReport plan={plan} className={'hidden lg:block'} /> */}
      <div
        className={`sticky z-[100] top-[4rem] min-w-full lg:min-w-fit pt-4 pb-2 border-y bg-white`}>
        <div className="container">
          <div className="grid grid-cols-10 gap-2 w-full ">
            <div className="lg:col-span-3 col-span-10 bg-white">
              <h3>{plan?.pricingPlan.title}</h3>
            </div>
            <div className="lg:col-span-7 col-span-10">
              <div className="grid lg:grid-cols-4 gap-3 ">
                {plan?.pricingPlan.plans.data.map((item, index) => {
                  return (
                    <div
                      key={`pricing-plan-` + index + new Date().toString()}
                      className="card-plan">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <strong className="stick-title">
                            {item.attributes.name}
                          </strong>
                          <strong
                            className={`stick-amount ${!isSmall && "hidden"}`}>
                            ${item.attributes.offerPrice}{" "}
                          </strong>
                        </div>

                        <span className={`stick-text ${isSmall && "hidden"}`}>
                          For {item.attributes.businessType} business
                        </span>
                      </div>
                      <div
                        className={`flex flex-row justify-between gap-2 items-center group cursor-pointer ${
                          isSmall && "hidden"
                        }`}
                        onClick={(e) =>
                          handleReportDownload(
                            e,
                            item.attributes.name,
                            item?.attributes?.pdf_report?.data?.attributes?.url
                          )
                        }>
                        <div className="flex flex-col justify-between items-baseline">
                          <div className="stick-title text-xs group-hover:underline">
                            {item.attributes.name} Sample Report
                          </div>
                        </div>
                        <DownloadCloud className="duration-200 group-hover:scale-110 w-4 h-4" />
                      </div>
                      <div className={`${isSmall && "hidden"}`}>
                        <strong className="stick-amount-primary">
                          ${item.attributes.offerPrice}{" "}
                          <span className="line-through text-xl text-gray-500">
                            {" "}
                            ${item.attributes.price}
                          </span>
                        </strong>
                        <span className="stick-text">One time payment</span>
                      </div>
                      <div className="flex-grow flex items-end justify-center">
                        <Link
                          href={`https://orders.easyprwire.com/${item.attributes.name.toLowerCase()}`}
                          className="btn btn-outline btn-lg w-full text-center"
                          target="_blank">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
