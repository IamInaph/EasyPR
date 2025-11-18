import { RiVipCrownLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/media";
export default function Hero({ hero }) {
  //   console.log("hero section", hero);
  return (
    <>
      <section className="pb-[1.25rem]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-12 ">
              <div>
                <div className="flex flex-col lg:flex-row gap-2 items-center">
                  <figure className="relative min-w-52 min-h-12 block">
                    <Image
                      src="/images/avatars.png"
                      fill
                      sizes="100vh"
                      priority
                      className="object-contain"
                      alt="User's combine image"
                    />
                  </figure>
                  <div>
                    <div className="text-primary-300 border border-primary-300 bg-primary-50 rounded-full py-1.5 px-5 inline-flex gap-1 items-center">
                      <RiVipCrownLine height={18} /> {hero?.section.name}
                    </div>
                  </div>
                </div>
                <h1 className="lg:text-[3.75rem] text-[2.5rem] mx-auto lg:mx-0 leading-[3rem] lg:leading-tight lg:text-left text-center font-bold max-w-lg mb-0">
                  {hero?.section.title} <mark>{hero?.section.subTitle}</mark>
                </h1>
              </div>
              <div>
                <div className="text-gray-500 text-[1.25rem] lg:text-left text-center">
                  {hero?.section.description}
                </div>
                <div className="flex flex-wrap gap-8 mt-2 justify-center lg:justify-start">
                  {hero?.topBrands.data.map((item, index) => {
                    const imageData = item.attributes.brandImage;
                    return (
                      <figure
                        className="relative min-w-28 lg:min-h-20 min-h-14 block"
                        key={index}>
                        <Image
                          src={getStrapiMedia(imageData?.media)}
                          fill
                          sizes="100vh"
                          priority
                          className="object-contain"
                          alt={imageData?.alt}
                        />
                      </figure>
                    );
                  })}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-4 items-center">
                <Link
                  href="/#pricing-plan"
                  className="btn btn-primary lg:w-64 w-full"
                  style={{paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1.75rem', paddingRight: '1.75rem'}}>
                  Order Now
                </Link>
                <Link
                  href="/#plan"
                  className="btn btn-outline lg:w-64 w-full"
                  style={{paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1.75rem', paddingRight: '1.75rem'}}>
                  Our Plan &amp; Pricing
                </Link>
              </div>
            </div>
            <div>
              <figure className="relative h-full">
                <Image
                  src={getStrapiMedia(hero?.section?.image?.media)}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                  alt={hero?.section.image.alt}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
