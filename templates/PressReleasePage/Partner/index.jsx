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
          <div className="max-w-lg mx-auto mb-12">
            <h2>Our Network</h2>
            <p>
              Get featured with our extensive distribution network that can help
              you unlock new markets and connect with your target audience.
            </p>
          </div>
          {/* <div className="lg:flex lg:flex-row flex-col justify-center lg:gap-24 gap-8 hidden ">
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
        <div className=" block mt-12">
          <Marquee direction="right">
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
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-linear-gradient-secondary rounded-2xl lg:p-[4rem] p-10  mx-2 text-center flex flex-col ">
            <h2 className="text-white">Looking for custom PR coverage?</h2>
            <span className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your brand deserves to be recognized! Start getting real exposure
              for your brand and high-quality buyers for your site.
            </span>
            <div className="mt-8">
              <Link href="/#plan" className="btn btn-white btn-lg">
                See Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
