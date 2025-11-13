import Image from "next/image";

export default function Hero({ service }) {
  return (
    <section className="py-[1.5rem] lg:py-[3rem] pb-[1.25rem]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-12 ">
            <div>
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="relative min-w-52 min-h-12 block"></div>
                <div>
                  <div className="min-h-12"></div>
                </div>
              </div>
              <h1 className="lg:text-[3.75rem] text-[2.5rem] mx-auto lg:mx-0 leading-[3rem] lg:leading-tight lg:text-left text-center font-bold mb-0">
                {service?.hero?.title}
              </h1>
            </div>
            <div>
              <div className="text-gray-500 text-[1.25rem] lg:text-left text-center">
                {service?.hero?.description}
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <a
                href="/#pricing-plan"
                className="btn btn-primary btn-lg lg:w-64 w-full"
              >
                {service?.hero?.ctaButton1}
              </a>
              <a
                href="#service_how_it_works"
                className="btn btn-outline btn-lg lg:w-64 w-full"
              >
                {service?.hero?.ctaButton2}
              </a>
            </div>
          </div>
          <div>
            <figure className="relative h-full">
              <Image
                src="/images/hero.png"
                fill
                sizes="100vw"
                priority
                className="object-contain"
                alt="Hero Image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
