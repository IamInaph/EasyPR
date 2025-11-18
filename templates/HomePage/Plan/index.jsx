"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import PlanReport from "./PlanReport";

const PlanType = dynamic(() => import("./PlanType"));
const PricingPlanType = dynamic(() => import("./PlanType/PricingPlanType"));
const WritingPlan = dynamic(() => import("./WritingPlan"));
const Overview = dynamic(() => import("./Overview"));
const Outlets = dynamic(() => import("./Outlets"));
const Topics = dynamic(() => import("./Topics"));

export default function Plan({ plan, indiePage = false, hideTopics = false }) {
  const [isSmall, setIsSmall] = useState(false);
  const [isSqueezed, setIsSqueezed] = useState(false);
  const [isIndieSqueezed, setIsIndieSqueezed] = useState(false);
  const topicsRef = useRef(null);
  const planRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    headerRef.current = document.querySelector("header");

    const handleScroll = () => {
      if (topicsRef.current) {
        const topicsTop = topicsRef.current.offsetTop;
        if (window.scrollY > topicsTop) {
          setIsSmall(true);
        } else {
          setIsSmall(false);
        }
      }

      if (planRef.current && headerRef.current) {
        const planTop = planRef.current.offsetTop;
        const headerBottom =
          headerRef.current.offsetTop + headerRef.current.offsetHeight;
        if (indiePage) {
          if (window.scrollY > planTop - headerBottom) {
            setIsIndieSqueezed(true);
          } else {
            setIsIndieSqueezed(false);
          }
        } else {
          if (window.scrollY > planTop - headerBottom) {
            setIsSqueezed(true);
          } else {
            setIsSqueezed(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [indiePage]);

  return (
    <>
      <section id="plan" ref={planRef} className={indiePage ? "lg:!pt-0" : ""}>
        <div className="container">
          <div className="text-center max-w-md mx-auto mb-10">
            <span className="text-key">{plan?.section.name}</span>
            <h2>{plan?.section.title}</h2>
            <span>{plan?.section.subTitle}</span>
          </div>
        </div>

        {/* <PlanReport	className={'lg:hidden'} plan={plan} /> */}

        <div
          className="mt-20 flex flex-row lg:flex-col gap-4"
          id="pricing-plan">
          {indiePage ? (
            <PricingPlanType
              plan={plan}
            />
          ) : (
            <PlanType
              plan={plan}
              indiePage={indiePage}
              isSmall={isSmall}
              isSqueezed={isSqueezed}
              isIndieSqueezed={isIndieSqueezed}
            />
          )}
          <div className="container">
            <WritingPlan plan={plan} />
            <Overview plan={plan} />
            <Outlets plan={plan} />
            {hideTopics ? (
              <div className="flex justify-center mt-8">
                <Link
                  href="/pricings"
                  className="btn btn-outline btn-lg w-full md:w-1/4 text-center">
                  Compare Pricings
                </Link>
              </div>
            ) : (
              <div ref={topicsRef}>
                <Topics plan={plan} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
