import { RiVipCrownLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/media";
import Marquee from "react-fast-marquee";

export default function Partner({ partner }) {
  // console.log("partners", partner);

  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="text-lg font-normal text-gray-400 mb-10">
            {partner?.section.name}
          </h2>
          {/* <div className="lg:flex lg:flex-row flex-col justify-center lg:gap-24 gap-8 hidden ">
            <Marquee direction="right">
              {partner?.brands.data.map((item, index) => {
                const imageData = item?.attributes?.brandImage;

                return (
                  <figure
                    className="relative min-w-36 lg:min-h-20 min-h-14 block"
                    key={index}
                  >
                    <Image
                      src={getStrapiMedia(imageData?.media)}
                      fill
                      sizes="100vw"
                      priority
                      className="object-contain"
                      alt={imageData?.alt}
                    />
                  </figure>
                );
              })}
            </Marquee>
          </div> */}
        </div>
        <div className=" block">
          <Marquee>
            {partner?.brands.data.map((item, index) => {
              const imageData = item.attributes.brandImage;

              return (
                <figure
                  className="relative min-w-36 lg:min-h-20 min-h-14 block mx-8"
                  key={index}
                >
                  <Image
                    src={getStrapiMedia(imageData?.media)}
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                    alt={imageData?.alt}
                  />
                </figure>
              );
            })}
          </Marquee>
        </div>
      </section>
    </>
  );
}
