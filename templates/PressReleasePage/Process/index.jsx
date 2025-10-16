import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/media";

export default function Process({ process }) {
  // console.log("process", process);
  return (
    <>
      <section>
        <div className="max-w-5xl mx-auto flex flex-col gap-0 ">
          <div className="max-w-xl mx-auto text-center mb-20">
            <span className="text-key">Features</span>
            <h2>Benefits of Press Release</h2>
            <span>
              Looking for a distinctive way to share your company&apos;s latest
              happenings with your audience? Look no further than press
              releases!
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
            <div className="rounded-lg border p-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#F2F4F7"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FCFCFD"
                  stroke-width="8"
                />
                <path
                  d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                  stroke="#475467"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="text-xl mt-4">Increased Brand Visibility</h3>
              <span>
                Press releases help increase your brand&apos;s visibility by
                reaching a wider audience through media coverage.
              </span>
            </div>
          </div>
          {/* Process */}
          {/* <div className="px-3 flex flex-col gap-6 lg:gap-0">
            {process?.processSteps.slice(0, 1).map((item, index) => {
              return (
                <div className="grid grid-cols-11 gap-4  items-end" key={index}>
                  <div className="lg:col-span-5 col-span-11 lg:order-1 order-3">
                    {item?.image && (
                      <figure className="relative min-h-[26rem] max-w-[24rem]">
                        <Image
                          src={getStrapiMedia(item?.image?.media)}
                          fill
                          sizes="100vh"
                          priority
                          className="object-cover"
                          alt={item.image.alt}
                        />
                      </figure>
                    )}
                  </div>
                  <div className="col-span-1 lg:flex hidden justify-center lg:order-2 order-2">
                    <svg
                      width="30"
                      height="230"
                      viewBox="0 0 30 230"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="14.625"
                        r="14.125"
                        fill="#F6FAFF"
                        stroke="#D5D9EB"
                      />
                      <circle cx="15" cy="14.625" r="1.8125" fill="#34DAB9" />
                      <rect
                        x="14.5"
                        y="29.25"
                        width="1"
                        height="200.75"
                        fill="#D5D9EB"
                      />
                    </svg>
                  </div>
                  <div className="lg:col-span-5 col-span-11 flex h-full justify-center flex-col lg:order-3 order-1">
                    <label className="text-gray-400 uppercase text-lg">
                      0{index + 1}
                    </label>
                    <h3 className="text-3xl">{item.title}</h3>
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
            {process?.processSteps.slice(1, 2).map((item, index) => {
              return (
                <div className="grid grid-cols-11 gap-4  items-end" key={index}>
                  <div className="lg:col-span-5 col-span-11 flex h-full justify-center flex-col">
                    <label className="text-gray-400 uppercase text-lg">
                      0{index + 2}
                    </label>
                    <h3 className="text-3xl">{item.title}</h3>
                    <span>{item.description}</span>
                  </div>
                  <div className="col-span-1 lg:flex hidden justify-center">
                    <svg
                      width="30"
                      height="411"
                      viewBox="0 0 30 411"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14.5"
                        width="1"
                        height="190.875"
                        fill="#D5D9EB"
                      />
                      <circle
                        cx="15"
                        cy="205.5"
                        r="14.125"
                        fill="#F6FAFF"
                        stroke="#D5D9EB"
                      />
                      <circle cx="15" cy="205.5" r="1.8125" fill="#34DAB9" />
                      <rect
                        x="14.5"
                        y="220.125"
                        width="1"
                        height="190.875"
                        fill="#D5D9EB"
                      />
                    </svg>
                  </div>
                  <div className="lg:col-span-5 col-span-11">
                    {item?.image && (
                      <figure className="relative  min-h-[26rem] max-w-[24rem]">
                        <Image
                          src={getStrapiMedia(item?.image?.media)}
                          fill
                          sizes="100vh"
                          priority
                          className="object-cover"
                          alt={item.image.alt}
                        />
                      </figure>
                    )}
                  </div>
                </div>
              );
            })}
            {process?.processSteps.slice(2).map((item, index) => {
              return (
                <div className="grid grid-cols-11 gap-4  items-end" key={index}>
                  <div className="lg:col-span-5 col-span-11 lg:order-1 order-3">
                    {item?.image && (
                      <figure className="relative min-h-[26rem] max-w-[24rem]">
                        <Image
                          src={getStrapiMedia(item?.image?.media)}
                          fill
                          sizes="100vh"
                          priority
                          className="object-cover"
                          alt={item.image.alt}
                        />
                      </figure>
                    )}
                  </div>
                  <div className="col-span-1 lg:flex hidden  justify-center  lg:order-2 order-2">
                    <svg
                      width="30"
                      height="411"
                      viewBox="0 0 30 411"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14.5"
                        width="1"
                        height="190.875"
                        fill="#D5D9EB"
                      />
                      <circle
                        cx="15"
                        cy="205.5"
                        r="14.125"
                        fill="#F6FAFF"
                        stroke="#D5D9EB"
                      />
                      <circle cx="15" cy="205.5" r="1.8125" fill="#34DAB9" />
                      <rect
                        x="14.5"
                        y="220.125"
                        width="1"
                        height="190.875"
                        fill="#D5D9EB"
                      />
                    </svg>
                  </div>
                  <div className="lg:col-span-5 col-span-11 flex h-full justify-center flex-col lg:order-3 order-1">
                    <label className="text-gray-400 uppercase text-lg">
                      0{index + 3}
                    </label>
                    <h3 className="text-3xl">{item.title}</h3>
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}
