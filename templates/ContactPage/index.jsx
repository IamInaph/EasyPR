"use client";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import India from "@/components/Svg/India";
import Uae from "@/components/Svg/Uae";
import { submitContactForm } from "@/services/contactpage";
import Started from "../HomePage/Started";
import { headers } from "@/next.config";
import { API_BASE_URL } from "@/constants";
import Image from "next/image";

const service = [
  {
    title: "Limited",
  },
  {
    title: "Popular",
  },
  {
    title: "Authority",
  },
  {
    title: "Ultimate",
  },
];

export default function ContactPage({ content }) {
  const router = useRouter();

  const [sender_full_name, set_sender_full_name] = useState("");
  const [sender_last_name, set_sender_last_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [sender_url, set_sender_url] = useState("");
  const [sender_budget, set_sender_budget] = useState("");
  const [sender_telegram, set_sender_telegram] = useState("");
  const [sender_organization, set_sender_organization] = useState("");
  const [sender_message, set_sender_message] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [mainError, setMainError] = useState("");

  const [selectValue, setSelectValue] = useState("default");

  // Add state for validation messages
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    contact: "",
    message: "",
    telegram: "",
    url: "",
  });

  // Add validation functions
  const validateFName = (value) => {
    if (value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        full_name: "Name must be at least 3 characters long",
      }));
    } else {
      setErrors((prev) => ({ ...prev, full_name: "" }));
    }
  };

  const validatePhone = (value) => {
    const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;
    if (!phoneRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        telegram: "Please enter a valid phone number with country code",
      }));
    } else {
      setErrors((prev) => ({ ...prev, telegram: "" }));
    }
  };

  const validateURL = (value) => {
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

    if (!urlRegex.test(value.trim())) {
      setErrors((prev) => ({
        ...prev,
        url: "Please enter a valid URL (e.g., https://example.com)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, url: "" }));
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Update handlers
  const handleFName = (e) => {
    set_sender_full_name(e.target.value);
    validateFName(e.target.value);
  };

  const handleTelegram = (e) => {
    set_sender_telegram(e.target.value);
    validatePhone(e.target.value);
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
    validateEmail(e.target.value);
  };

  const handleWebURL = (e) => {
    set_sender_url(e.target.value);
    validateURL(e.target.value);
  };

  const handleMessage = (e) => {
    set_sender_message(e.target.value);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  const postContact = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const formData = {
        full_name: sender_full_name,
        email_address: sender_email,
        website_url: sender_url || "",
        telegram_whatsapp: sender_telegram,
        message: sender_message,
      };

      const response = await submitContactForm(formData);

      if (response.message === "Contact form submitted successfully.") {
        setMainError("");
        router.push("/message-confirmation");
      } else {
        setMainError("There was an error sending your message!");
      }
    } catch (error) {
      console.log("[CONTACT_FORM]", error);
    } finally {
      setIsSending(false);

      setTimeout(() => {
        setMainError("");
      }, 5000);
    }
  };

  return (
    <>
      <Layout>
        <section className="bg-slate-50">
          <div className="container">
            <div className="max-w-3xl">
              <h1>{content?.title}</h1>
              <p className="text-xl">{content?.description}</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid grid-cols-3 gap-12">
              <div className="lg:col-span-1 col-span-3">
                <h2 className="text-3xl">Simply fill up this form</h2>
                <p>
                  We will get back to you instantly to explore possible avenues
                  where we could work together. You will hear from us within 2-3
                  hours.
                </p>
              </div>
              <div className="lg:col-span-2 col-span-3 lg:px-12">
                <form onSubmit={postContact}>
                  <div className="flex sm:gap-4 max-sm:flex-col">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Your full name</span>
                      </div>
                      {errors.full_name && (
                        <span className="text-red-500 text-sm mb-1">
                          {errors.full_name}
                        </span>
                      )}
                      <input
                        type="text"
                        placeholder="Enter your full name (minimum 3 characters)"
                        className="input input-bordered w-full input-lg px-6 py-5 border border-gray-400"
                        value={sender_full_name}
                        onChange={handleFName}
                        required
                      />
                    </label>
                  </div>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">
                        Your Whatsapp/Telegram no.
                      </span>
                    </div>
                    {errors.telegram && (
                      <span className="text-red-500 text-sm mb-1">
                        {errors.telegram}
                      </span>
                    )}
                    <input
                      type="text"
                      placeholder="Enter a valid phone no. (e.g., +1 41XXXXXXXX)"
                      className="input input-bordered w-full input-lg px-6 py-5 border border-gray-400"
                      value={sender_telegram}
                      onChange={handleTelegram}
                      required
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Your email address</span>
                    </div>
                    {errors.email && (
                      <span className="text-red-500 text-sm mb-1">
                        {errors.email}
                      </span>
                    )}
                    <input
                      type="email"
                      placeholder="Enter a valid email address (e.g., name@example.com)"
                      className="input input-bordered w-full input-lg px-6 py-5 border border-gray-400"
                      value={sender_email}
                      onChange={handleEmail}
                      required
                    />
                  </label>

                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">
                        Your Website URL (Optional)
                      </span>
                    </div>
                    {errors.url && (
                      <span className="text-red-500 text-sm mb-1">
                        {errors.url}
                      </span>
                    )}
                    <input
                      type="text"
                      placeholder="Enter your website url (e.g., https://www.abc.xyz/...)"
                      className="input input-bordered w-full input-lg px-6 py-5 border border-gray-400"
                      onChange={handleWebURL}
                      value={sender_url}
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">
                        Tell us something that you want
                      </span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered textarea-lg w-full min-h-[10rem] py-4 px-6 border border-gray-400"
                      placeholder="Tell us something that you want..."
                      required
                      value={sender_message}
                      onChange={handleMessage}></textarea>
                  </label>
                  {mainError && (
                    <p className="text-center text-red-500">{mainError}</p>
                  )}
                  <button
                    className="btn btn-secondary btn-lg py-4 px-7"
                    type="submit"
                    disabled={isSending}>
                    {isSending ? "Sending..." : "Send a Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container">
            <h2 className="text-center">Our Locations</h2>

            <div className="flex flex-col lg:flex-row gap-20 mt-12 justify-center flex-wrap">
              <div className="flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
                <Uae />
                <div>
                  <strong className="block text-slate-900 text-2xl mb-4">
                    {content?.locations?.length > 0 &&
                      content?.locations[0]?.country}
                  </strong>
                  <span className="text-xl block">
                    {content?.locations?.length > 0 &&
                      content?.locations[0]?.address}
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
                <India />
                <div>
                  <strong className="block text-slate-900 text-2xl mb-4">
                    {content?.locations?.length > 1 &&
                      content?.locations[1]?.country}
                  </strong>
                  <span className="text-xl">
                    {content?.locations?.length > 1 &&
                      content?.locations[1]?.address}
                  </span>
                </div>
              </div>
              {content?.locations?.length > 2 && (
                <div className="flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
                  <Image
                    src={"/assets/uk-gray.png"}
                    alt="UK map"
                    width={200}
                    height={200}
                    className="w-[80px] grayscale opacity-50"
                  />
                  <div>
                    <strong className="block text-slate-900 text-2xl mb-4">
                      {content?.locations?.length > 2 &&
                        content?.locations[2]?.country}
                    </strong>
                    <span className="text-xl">
                      {content?.locations?.length > 2 &&
                        content?.locations[2]?.address}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <Started getStarted={content?.readyToGrow} />
      </Layout>
    </>
  );
}
