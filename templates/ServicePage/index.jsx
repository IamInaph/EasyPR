"use client";
import Layout from "@/components/Layout";
import Faq from "@/templates/HomePage/Faq";
import Started from "@/templates/HomePage/Started";
import Partner from "@/templates/HomePage/Partner";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import OrganicGrowth from "./OrganicGrowth";

export default function ServicePage({
  serviceData,
  partner,
  faqs,
  homeData,
  plan,
}) {
  const service = serviceData?.data?.attributes;

  const testimonials = [
    {
      rating: 5,
      review:
        "Easy PR has been a game-changer for our business. We have seen a significant increase in our media coverage and brand visibility.",
      reviewer: {
        name: "John Doe",
        designation: "CEO, Company 1",
        imageUrl: "https://via.placeholder.com/50x50.png",
      },
    },
    {
      rating: 4,
      review:
        "The team at Easy PR is professional, responsive, and dedicated. They have helped us secure top-tier media placements.",
      reviewer: {
        name: "Jane Smith",
        designation: "Marketing Manager, Company 2",
        imageUrl: "https://via.placeholder.com/50x50.png",
      },
    },
    {
      rating: 5,
      review:
        "I highly recommend Easy PR to any business looking to enhance their public relations efforts. They are simply the best.",
      reviewer: {
        name: "Peter Jones",
        designation: "Founder, Company 3",
        imageUrl: "https://via.placeholder.com/50x50.png",
      },
    },
    {
      rating: 4,
      review:
        "The team at Easy PR is professional, responsive, and dedicated. They have helped us secure top-tier media placements.",
      reviewer: {
        name: "Jane Smith",
        designation: "Marketing Manager, Company 2",
        imageUrl: "https://via.placeholder.com/50x50.png",
      },
    },
    {
      rating: 5,
      review:
        "I highly recommend Easy PR to any business looking to enhance their public relations efforts. They are simply the best.",
      reviewer: {
        name: "Peter Jones",
        designation: "Founder, Company 3",
        imageUrl: "https://via.placeholder.com/50x50.png",
      },
    },
  ];

  console.log(homeData, faqs);

  return (
    <Layout plan={plan}>
      <Hero service={service} />

      <section>
        <div className="container">
          <h2 className="text-center"> Trusted By 1000+ Companies WorldWide</h2>
        </div>
        <Partner partner={partner} />
      </section>

      <OrganicGrowth service={service} />

      <HowItWorks service={service} />

      <Testimonials service={service} testimonials={testimonials} />

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="flex justify-center">
            {service?.finalCta && <Started getStarted={service?.finalCta} />}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">{faqs && <Faq faqs={faqs} />}</div>
      </section>
    </Layout>
  );
}
