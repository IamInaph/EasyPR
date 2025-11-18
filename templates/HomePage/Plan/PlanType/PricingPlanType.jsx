import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PlanReport from "../PlanReport";

export default function PricingPlanType({ plan }) {
  const [istop, setistop] = useState(true);
  const [planTop, setPlanTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header ? header.offsetHeight : 0);

    // Get the initial position of the plan section
    const planSection = document.getElementById("plan");
    if (planSection) {
      setPlanTop(planSection.offsetTop - (header ? header.offsetHeight : 0));
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Only update if necessary
      if (scrollY > planTop && istop) {
        setistop(false);
      } else if (scrollY <= planTop && !istop) {
        setistop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [istop, planTop]);

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
        className={`${
          istop ? "" : "!pt-1 !pb-2 stick-price pricing-plan border-y"
        } sticky z-[100] top-[4rem] min-w-full lg:min-w-fit lg:!pt-[1rem] lg:!pb-[0.5rem]`}
        style={{ paddingTop: istop ? '0' : '1rem', paddingBottom: istop ? '0' : '0.5rem' }}>
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
                          <strong className="stick-amount">
                            ${item.attributes.offerPrice}{" "}
                          </strong>
                        </div>

                        <span className="stick-text">
                          For {item.attributes.businessType} business
                        </span>
                      </div>
                      <div
                        className={`flex flex-row justify-between gap-2 items-center group cursor-pointer ${
                          !istop && "hidden"
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
                      <div>
                        <strong className="stick-amount-primary">
                          ${item.attributes.offerPrice}{" "}
                          <span className="line-through text-xl text-gray-500">
                            {" "}
                            ${item.attributes.price}
                          </span>
                        </strong>
                        <span className="stick-text">One time payment</span>
                      </div>
                      <div>
                        <Link
                          href={`https://orders.easyprwire.com/${item.attributes.name.toLowerCase()}`}
                          className="btn btn-outline btn-lg w-full bg-transparent hover:bg-transparent"
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
