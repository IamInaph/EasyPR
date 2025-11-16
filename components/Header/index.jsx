"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Svg/Logo";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { ChevronDown, DownloadCloud } from "lucide-react";

const services = [
  {
    title: "Press Release Distribution Services For SaaS",
    href: "/services/press-release-services-for-saas",
  },
  {
    title: "Press Release Distribution Services For Fintech",
    href: "/services/press-release-services-for-fintech",
  },
  {
    title: "Press Release Distribution Services For Real Estate",
    href: "/services/press-release-services-for-real-estate",
  },
  {
    title: "Press Release Distribution Services For Ecommerce Brands",
    href: "/services/press-release-services-for-ecommerce-brands",
  },
  {
    title: "Press Release Distribution Services For Startups",
    href: "/services/press-release-services-for-startups",
  },
];

const Header = ({ plan }) => {
  const [orderId, setOrderId] = useState("");
  const [istop, setistop] = useState(true);
  const [isMainNavOpen, setIsMainNavOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Services");
  const pathname = usePathname();

  useEffect(() => {
    const currentService = services.find(
      (service) => service.href === pathname
    );
    if (currentService) {
      setSelectedService(currentService.title);
    } else {
      setSelectedService("Services");
    }
  }, [pathname]);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 40) {
      setistop(false);
    } else {
      setistop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

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
      <header
        className={`${
          istop ? "" : "shrink-header"
        } sticky z-50 top-0 duration-300 ease-in-out bg-white `}>
        <div className="container">
          <div className="flex items-center ">
            <Link href="/">
              <Logo />
            </Link>
            <nav
              className={`main-menu ${isMainNavOpen ? "active" : " "}
              `}>
              <div>
                <Link className="nav-link" href="/#plan">
                  Packages
                </Link>
              </div>
              {/* <div>
                <Link className="nav-link" href="/#review">
                  Reviews
                </Link>
              </div> */}
              <div>
                <Link className="nav-link" href="/blogs">
                  Blogs
                </Link>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="nav-link flex gap-1 items-center truncate">
                    Sample Report
                    <ChevronDown className="w-5 h-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white rounded-[8px] z-[999]">
                    {plan?.pricingPlan?.plans?.data?.map((item, index) => (
                      <DropdownMenuItem
                        className="flex flex-row justify-between gap-2 items-center group cursor-pointer"
                        onClick={(e) =>
                          handleReportDownload(
                            e,
                            item.attributes.name,
                            item?.attributes?.pdf_report?.data?.attributes?.url
                          )
                        }
                        key={item?.attributes?.name + index}>
                        <div className="text-base">{item.attributes.name}</div>
                        <DownloadCloud className="duration-200 group-hover:scale-110" />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="nav-link flex gap-1 items-center truncate">
                    <span className="truncate">{selectedService}</span>
                    <ChevronDown className="w-5 h-5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-white rounded-[8px] z-[999]">
                    {services.map((service) => (
                      <Link href={service.href} key={service.href} passHref>
                        <DropdownMenuItem className="flex flex-row justify-between gap-2 items-center group cursor-pointer">
                          {service.title}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </div>
              <div className=" menu-button items-center">
              <div className="w-full lg:w-fit">
                <button
                  className="rounded-full btn btn-outline btn-sm btn-main flex gap-2 h-12"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }>
                  <Icon icon="lucide:box" height={24} />
                  <span>Order Status</span>
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="bg-white modal-box">
                    <form method="dialog" className="modal-backdrop">
                      <button className="absolute w-10 h-10 p-2 bg-white border-0 rounded-full btn btn-icon btn-sm  right-2 top-2 ">
                        <Icon icon="radix-icons:cross-2" height={24} />
                      </button>
                    </form>
                    <h3 className="text-2xl">Order Status</h3>
                    <div className=" mb-3 mt-8">
                      Please fill the Order ID provided in the email
                    </div>
                    <form method="dialog" className="relative">
                      <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Order ID #213-WA233F"
                        className="w-full rounded-full input input-bordered"
                      />
                      <Link
                        href={`/order/track-status?orderId=${orderId}`}
                        className="absolute w-10 h-10 p-2 rounded-full btn btn-sm btn-ghost bg-slate-50 right-1 top-1 ">
                        <Icon icon="bi:arrow-right" height={24} />
                      </Link>
                    </form>
                  </div>
                </dialog>
              </div>
              <div className="w-full lg:w-fit">
                <Link
                  href="/#pricing-plan"
                  className="rounded-full btn btn-primary btn-sm btn-main flex gap-2 h-12">
                  <span>Order Now</span>
                  <Icon icon="bi:arrow-right" height={24} />
                </Link>
              </div>
            </div>
            </nav>
            <div
              className="lg:hidden block fixed top-4 right-4 z-40 w-26 h-26 rounded-full  bg-white p-1"
              onClick={() => {
                setIsMainNavOpen((prevState) => !prevState);
              }}>
              {isMainNavOpen ? (
                <Icon icon="radix-icons:cross-2" height={36} />
              ) : (
                <Icon icon="ci:menu-alt-05" height={36} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
