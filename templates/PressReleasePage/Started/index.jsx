"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Started() {
  return (
    <>
      <section className="py-0">
        <div className="max-w-[62.5rem] mx-auto px-3">
          <div className="bg-linear-gradient-primary lg:py-16 lg:px-12 p-4 rounded-xl top-32 relative">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-between text-center lg:text-left gap-4">
                <div>
                  <span className="text-key">Get Started</span>
                  <h2>Ready to Grow Your Brand?</h2>
                  <span>
                    Your brand deserves to be recognized! Start getting real
                    exposure for your brand and high-quality buyers for your
                    site.
                  </span>
                </div>
                <div>
                  <Link href="/#pricing-plan" className="btn btn-primary min-w-52">
                    Order Now <Icon icon="bi:arrow-right" height={24} />
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/images/grow-your-brand.webp"
                  width={800}
                  height={470}
                  alt="Subscribe Card Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
