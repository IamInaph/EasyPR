"use client";
import Layout from "@/components/Layout";
import React from "react";
import Markdown from "react-markdown";
import { format } from "date-fns";

export default function RefundPolicyPage({ refundData }) {
  const refund = refundData.data.attributes;

  return (
    <Layout>
      <section>
        <div className="max-w-4xl mx-auto px-3">
          <h1>{refund.title}</h1>
          <strong className="text-xl">
            Effective Date: {format(new Date(), "MMMM d, yyyy")}
          </strong>
        </div>
      </section>

      <section className="pt-0">
        <div className="max-w-4xl mx-auto text-xl px-3 content-template">
          <Markdown>{refund.content}</Markdown>
        </div>
      </section>
    </Layout>
  );
}
