import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { collapseSection } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { useFormContext } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "@/utils/media";
import Image from "next/image";

const PublishingNetwork = ({ network, register, isTabOpen, activePack }) => {
  return (
    <label
      className={`package-card flex flex-col w-full ${
        activePack == network.id ? "package-active" : ""
      }`}
      htmlFor={network.id}
      // onClick={() => {
      //   setIsActivePack(network.id);
      // }}
    >
      <div className="package-block lg:gap-12 gap-4 relative">
        <div className="flex gap-6">
          <div className="mt-10 hidden lg:block">
            <input
              type="radio"
              id={network.id}
              className="w-5 h-5 radio checked:bg-primary-300 "
              {...register("publishingNetwork")}
              value={network.id}
            />
          </div>

          <div>
            <strong className="package-title mb-3 lg:mb-0">
              {network.attributes.name}
            </strong>
            <span className="text-gray-500 font-normal lg:text-base text-sm leading-none">
              {network.attributes.description}
            </span>
            <div className="flex flex-wrap mt-4 lg:gap-3 gap-1">
              <div className="pr-1 lg:pr-3 border-r text-base">
                <mark className="bg-transparent text-primary-400 lg:text-lg text-sm font-normal">
                  {network.attributes.newsSites}{" "}
                </mark>
                <span className="text-gray-500 font-normal lg:text-base text-sm">
                  outlets
                </span>
              </div>
              <div className="pr-1 lg:pr-3  border-r text-base">
                <mark className="bg-transparent text-primary-400 lg:text-lg text-sm font-normal">
                  {network.attributes.monthlyReaders}{" "}
                </mark>
                <span className="text-gray-500 font-normal lg:text-base text-sm">
                  readers
                </span>
              </div>
              <div className="text-base">
                <mark className="bg-transparent text-primary-400 lg:text-lg text-sm font-normal">
                  {network.attributes.acceptedTopicType}{" "}
                </mark>
                <span className="text-gray-500 font-normal lg:text-base text-sm">
                  {" "}
                  topics accepted
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:relative absolute top-2 right-2">
            <span>
              <label className="package-price">
                ${network.attributes.price}
              </label>
            </span>
          </div>
        </div>
      </div>

      <div className="package-content">
        <div className="py-2 ">
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Accepted Topics</Tab>
              <Tab>Major Outlets</Tab>
              <Tab>Story Limitations</Tab>
            </TabList>
            <TabPanel>
              <div className="grid lg:grid-cols-2 gap-2 text-sm lg:px-4 mb-3">
                {network?.attributes.overview?.features?.map((item, index) => {
                  return (
                    <>
                      <div
                        key={`overview-` + index + new Date().toString()}
                        className="mardown-text flex item-center gap-1"
                      >
                        {item.isAccepted === true ? (
                          <Icon
                            icon="charm:circle-cross"
                            className="text-rose-400"
                            height={20}
                          />
                        ) : (
                          <Icon
                            icon="icon-park-outline:check-one"
                            className="text-emerald-400"
                            height={20}
                          />
                        )}
                        <ReactMarkdown>{item.name}</ReactMarkdown>
                      </div>
                    </>
                  );
                })}
                <div>
                  <Link
                    href="/sample-report.pdf"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    See Sample Report
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-2 gap-2 text-sm lg:px-4 mb-3">
                {network.attributes.acceptedTopics?.map((item, index) => {
                  return (
                    <>
                      <div
                        key={`acceptedTopics-` + index + new Date().toString()}
                        className="flex gap-1 items-center"
                      >
                        {item.isAccepted === true ? (
                          <Icon
                            icon="icon-park-outline:check-one"
                            className="text-emerald-400"
                            height={20}
                          />
                        ) : (
                          <Icon
                            icon="charm:circle-cross"
                            className="text-rose-400"
                            height={20}
                          />
                        )}

                        <div>{item.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-2 gap-2 text-sm lg:px-4 mb-3">
                {network?.attributes?.majorOutlets?.map((item, index) => {
                  return (
                    <>
                      <div
                        key={`majorOutlets-` + index + new Date().toString()}
                        className="flex gap-1 items-center"
                      >
                        {item.isAccepted == true ? (
                          <Icon
                            icon="charm:circle-cross"
                            className="text-rose-400"
                            height={20}
                          />
                        ) : (
                          <Icon
                            icon="icon-park-outline:check-one"
                            className="text-emerald-400"
                            height={20}
                          />
                        )}

                        <div>
                          {item.name}
                          {item.isGuaranteed === true ? (
                            <span className="bg-blue-50 text-blue-600 py-0.5 px-1 rounded-lg border-blue-600 border">
                              Guaranteed
                            </span>
                          ) : (
                            " "
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-2 gap-2 text-sm lg:px-4 mb-3">
                <div>
                  {network.attributes.storyLimitation && (
                    <span className="bg-gray-900 py-0.5 px-1 text-white mr-1 rounded-md">
                      {network.attributes.storyLimitation.wordsAllowed}
                    </span>
                  )}
                  words allowed
                </div>
                <div>
                  {network.attributes.storyLimitation && (
                    <span className="bg-gray-900 py-0.5 px-1 text-white mr-1 rounded-md">
                      {network.attributes.storyLimitation.youtubeEmbedAllowed}
                    </span>
                  )}
                  YouTube embed allowed
                </div>

                <div>
                  {network.attributes.storyLimitation && (
                    <span className="bg-gray-900 py-0.5 px-1 text-white mr-1 rounded-md">
                      {network.attributes.storyLimitation.linksAllowed}
                    </span>
                  )}
                  links allowed
                </div>

                <div>
                  {network.attributes.storyLimitation && (
                    <span className="bg-gray-900 py-0.5 px-1 text-white mr-1 rounded-md">
                      {network.attributes.storyLimitation.googleMapEmbedAllowed}
                    </span>
                  )}
                  Google Map embeds not allowed
                </div>
                <div>
                  {network.attributes.storyLimitation && (
                    <span className="bg-gray-900 py-0.5 px-1 text-white mr-1 rounded-md">
                      {network.attributes.storyLimitation.imagesAllowed}
                    </span>
                  )}
                  images allowed
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </label>
  );
};

const NewsOutlet = ({ outlet, register }) => {
  const [isUpgrade, setIsUpgrade] = useState(false);
  // console.log("outlet", outlet);
  return (
    <div
      className={`package-card items-start p-3 mb-3${
        isUpgrade ? "border-slate-900" : " "
      }`}
      onClick={() => {
        setIsUpgrade((prevState) => !prevState);
      }}
    >
      <label className="cursor-pointer label gap-2 w-full">
        <input
          type="checkbox"
          {...register("extraNewsOutlets")}
          value={outlet.id}
          className="w-5 h-5 checkbox border-gray-300 rounded-md   [--chkbg:theme(colors.black)] [--chkfg:white]"
        />
        <div>
          {outlet?.attributes?.image?.media && (
            <figure className="relative min-w-28 min-h-[2rem] hidden lg:block">
              <Image
                src={getStrapiMedia(outlet?.attributes?.image?.media)}
                fill
                sizes="100vh"
                priority
                className="object-contain"
                alt={outlet.attributes?.image.alt}
              />
            </figure>
          )}
        </div>
        <div>
          <h4 className="label-text">{outlet.attributes.name}</h4>

          <div className="flex flex-col lg:flex-row lg:gap-2 gap-0 ">
            <div className="pr-1 lg:pr-3 lg:border-r text-base">
              <mark className="bg-transparent text-primary-400 lg:text-lg text-sm font-normal">
                {outlet.attributes.visitors}{" "}
              </mark>
              <span className="text-gray-500 font-normal lg:text-base text-sm">
                monthly visitors
              </span>
            </div>
            <div className="text-base">
              <mark className="bg-transparent text-primary-400 lg:text-lg text-sm font-normal">
                {outlet.attributes.authority}
              </mark>
              <span className="text-gray-500 font-normal lg:text-base text-sm">
                {" "}
                domain authority
              </span>
            </div>
          </div>
          <Link
            href={outlet.attributes.url.href}
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
        </div>
        <div className="ml-auto package-price">${outlet.attributes.price}</div>
      </label>
    </div>
  );
};

const PublishingNetworks = ({ publishingNetworks, newsOutlets, pageData }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const { activeCollapseSection, toggleActiveCollapseSection } =
    useOrderFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger("publishingNetwork");

    if (isValid) {
      toggleActiveCollapseSection(collapseSection.writing);
    }
  };
  const [isActivePack, setIsActivePack] = useState(false);
  const activePack = watch("publishingNetwork");
  // console.log("activePack", activePack);
  return (
    <div>
      <div
        tabIndex={0}
        className={`bg-white border rounded-lg collapse collapse-arrow border-slate-200  flex flex-col ${
          activeCollapseSection === collapseSection.network
            ? "collapse-open"
            : "collapse-close"
        }`}
      >
        <div
          onClick={() => {
            toggleActiveCollapseSection(collapseSection.network);
          }}
          className="collapse-title"
        >
          {pageData.publishingNetworksTitle}
        </div>
        <div className="collapse-content">
          <p>{pageData.publishingNetworksDescription}</p>
          <div>
            <div className="flex flex-col gap-3">
              {publishingNetworks?.data.map((network, index) => {
                const isTabOpen = isActivePack === network.id;
                return (
                  <PublishingNetwork
                    network={network}
                    key={`publishingNetworks-` + index + new Date().toString()}
                    register={register}
                    activePack={activePack}
                    index={index}
                    setIsActivePack={setIsActivePack}
                  />
                );
              })}
            </div>
            <span className="mt-2 text-red-500">
              {errors["publishingNetwork"]?.message}
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg">Get more coverage</h3>
            <div>
              <ul>
                {newsOutlets?.data.map((outlet, index) => (
                  <NewsOutlet
                    key={`newsOutlets-` + index + new Date().toString()}
                    outlet={outlet}
                    register={register}
                  />
                ))}
              </ul>
              <span className="mt-2 text-red-500">
                {errors["extraNewsOutlets"]?.message}
              </span>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={handleNextStep}
              className="btn btn-secondary"
            >
              Next Step <Icon icon="heroicons:arrow-long-right" height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingNetworks;
