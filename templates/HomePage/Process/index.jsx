import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/media";

export default function Process({ process, growBrand }) {
  // console.log("process", process);
  return (
    <>
      <section>
        <div className="max-w-5xl mx-auto flex flex-col gap-0 ">
          <div className="max-w-xl mx-auto text-center mb-20">
            <span className="text-key">{process?.section.name}</span>
            <h2>{process?.section.title}</h2>
            <span>{process?.section.subTitle}</span>
          </div>
          {/* Process */}
          <div className="px-3 flex flex-col gap-6 lg:gap-0">
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
                      xmlns="http://www.w3.org/2000/svg">
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
                      xmlns="http://www.w3.org/2000/svg">
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
                      xmlns="http://www.w3.org/2000/svg">
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
          </div>
          <div className="max-w-5xl mx-auto mt-20">
            <div className="bg-linear-gradient-secondary rounded-2xl lg:p-[4rem] p-10  mx-2 text-center flex flex-col items-center ">
              <h2 className="text-white">{growBrand?.title}</h2>
              <span className="text-gray-400 text-lg max-w-2xl mx-auto">
                {growBrand?.description}
              </span>
              <div className="mt-8">
                <Link href="/#plan" className="btn btn-white btn-lg">
                  See Our Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
