"use client";
import Layout from "@/components/Layout";
import React from "react";
import Markdown from "react-markdown";

export default function PolicyPage({ policyData }) {
  const policy = policyData.data.attributes;
  // console.log("policy data", policy);

  return (
    <>
      <Layout>
        <section>
          <div className="max-w-4xl mx-auto px-3">
            <h1>{policy.title}</h1>
            <strong className="text-xl">
              Effective Date: November 29, 2020
            </strong>
          </div>
        </section>

        <section className="pt-0">
          <div className="max-w-4xl mx-auto text-xl px-3 content-template">
            <Markdown>{policy.content}</Markdown>
          </div>
        </section>
      </Layout>
    </>
  );
}
