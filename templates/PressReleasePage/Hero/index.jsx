import React, { useState } from "react";
import { useRouter } from "next/navigation";

import axiosInstance from "@/utils/axios";
export default function PressReleasePage() {
  // console.log("hero section", hero);
  const router = useRouter();

  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [sender_message, set_sender_message] = useState("");

  const [selectValue, setSelectValue] = useState("default");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const handleMessage = (e) => {
    set_sender_message(e.target.value);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  const postContact = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/contacts", {
        data: {
          firstName: sender_name,
          lastName: sender_name,
          emailAddress: sender_email,
          websiteUrl: "sdad",
          budget: "213",
          message: "adsd",
          organization: "asdd",
        },
      })
      .then(function (response) {
        router.push("/message-confirmation");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <section className="pb-[1.25rem]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-12 ">
              <div>
                <h1 className="lg:text-[2.75rem] text-[2.5rem] mx-auto lg:mx-0 leading-[3rem] lg:leading-tight lg:text-left text-center font-semibold max-w-lg mb-0">
                  Get Featured on Hindustan times, TOI, Outlook &amp;
                  <mark>500+ Media Networks</mark>
                </h1>
              </div>
              <div>
                <div className="text-gray-500 text-[1.25rem] lg:text-left text-center">
                  NewsReach Press Release unleashes a Digital Revolution,
                  amplifying presence across 1000+ influential news sites for
                  unprecedented exposure and enhanced search rankings.{" "}
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <strong className="text-4xl text-gray-800 block">
                    4,000+
                  </strong>{" "}
                  <span className="uppercase text-gray-400">TOTAL PRICE</span>
                </div>
                <div className="text-center">
                  <strong className="text-4xl text-gray-800 block">300</strong>{" "}
                  <span className="uppercase text-gray-400">NEWS SITES</span>
                </div>
                <div className="text-center">
                  <strong className="text-4xl text-gray-800 block">92</strong>{" "}
                  <span className="uppercase text-gray-400">MAX AUTHORITY</span>
                </div>
                <div className="text-center">
                  <strong className="text-4xl text-gray-800 block">
                    37.0m
                  </strong>{" "}
                  <span className="uppercase text-gray-400">
                    MONTHLY READERS
                  </span>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="p-6 bg-white border border-primary-400 rounded-2xl">
                <form onSubmit={postContact}>
                  <label className="form-control w-full mb-2 ">
                    <div className="label">
                      <span className="text-sm font-medium">
                        Your full name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Your full name..."
                      className="input input-bordered w-full"
                      value={sender_name}
                      onChange={handleName}
                      required
                    />
                  </label>
                  <label className="form-control w-full mb-2 ">
                    <div className="label">
                      <span className="text-sm font-medium">
                        Your email address
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Your email address..."
                      className="input input-bordered w-full"
                      value={sender_email}
                      onChange={handleEmail}
                      required
                    />
                  </label>
                  <label className="form-control w-full mb-2 ">
                    <div className="label">
                      <span className="text-sm font-medium">Your Whatsapp</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Your Whatsapp..."
                      className="input input-bordered w-full"
                      value={sender_email}
                      onChange={handleEmail}
                      required
                    />
                  </label>
                  <label className="form-control w-full mb-2 ">
                    <div className="label">
                      <span className="text-sm font-medium">Message</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered textarea-lg min-h-[10rem]"
                      placeholder="Your Message...."
                      required
                      value={sender_message}
                      onChange={handleMessage}
                    ></textarea>
                  </label>
                  <button className="btn btn-primary w-full" type="submit">
                    Send a Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
