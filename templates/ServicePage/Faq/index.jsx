"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Script from "next/script";

export default function ServiceFaq({ faqs }) {
  const [openTab, setOpenTab] = useState(null);

  const faqData = faqs.faqs.data;

  return (
    <>
      <section className="bg-slate-50 faq-section" id="faq">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">QUESTIONS ANSWERED</h2>
            <h3 className="text-2xl mb-4">
              Questions About Press Release Services? We're Here to Help
            </h3>
            <p className="mb-8">
              Find answers about how it works, what’s included, and what to
              expect when you publish with us.
            </p>
          </div>
          <div className="mt-12">
            {faqData.map((item, index) => {
              const isTabOpen = openTab === index;
              return (
                <div key={item.id}>
                  <div
                    className={`${isTabOpen ? "active" : " "} accordion`}
                    onClick={() => {
                      setOpenTab(isTabOpen ? null : index);
                    }}
                  >
                    <div className="accordion-title ">
                      {item.attributes.question}
                      <div>
                        {isTabOpen ? (
                          <Icon
                            icon="ph:minus-circle"
                            className="text-primary-400"
                            height={26}
                          />
                        ) : (
                          <Icon icon="ph:plus-circle" height={26} />
                        )}
                      </div>
                    </div>
                    <div className="accordion-content">
                      <p>{item.attributes.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.attributes.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.attributes.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
