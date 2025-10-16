"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function MessageConfirmationPage() {
  return (
    <>
      <section className="h-screen bg-white">
        <div className=" max-w-lg  mx-auto ">
          <div className="  pb-20 pt-20">
            <div className="">
              <Icon
                className="text-green-500 mb-6"
                icon="teenyicons:tick-circle-solid"
                width="40"
                height="40"
              />

              <h3>Message Successfully sent!</h3>
              <p>
                We have received your message, and will reach out to you as soon
                as possible. We will look forward to our journey together.
              </p>
              <p>Thank you.</p>
              <Link href="/" className="text-primary-400">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
