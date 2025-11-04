"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import Faq from "@/templates/HomePage/Faq";
import Plan from "@/templates/HomePage/Plan";
import Started from "@/templates/HomePage/Started";
import Partner from "@/templates/HomePage/Partner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
import {
  PenTool,
  Newspaper,
  ShieldCheck,
  Send,
  Target,
  LineChart,
} from "lucide-react";

const iconMap = {
  Writing: PenTool,
  "Media Coverage": Newspaper,
  "Results & Trust": ShieldCheck,
  "Publish Your Press Release Within 7 Days": Send,
  "Reach Buyers Who Are Searching for You": Target,
  "Boost Your SEO and Google Rankings": LineChart,
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-8 border rounded-xl bg-white">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            icon={i < testimonial.rating ? "mdi:star" : "mdi:star-outline"}
            style={{ color: i < testimonial.rating ? "#34DAB9" : "#E5E7EB" }}
          />
        ))}
      </div>

      <p>{testimonial.review}</p>
      <div className="flex items-center">
        <Image
          src={testimonial.reviewer.imageUrl}
          width={50}
          height={50}
          alt={testimonial.reviewer.name}
          className="rounded-full mr-4"
        />
        <div>
          <p className="mb-2">{testimonial.reviewer.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.reviewer.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ServicePage({ serviceData, partner, faqs, homeData }) {
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

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(homeData, faqs);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                {service?.hero?.title}
              </h1>
              <p className="text-lg">{service?.hero?.description}</p>
              <div className="mt-8">
                <a href="/#pricing-plan" className="btn btn-primary mr-4">
                  {service?.hero?.ctaButton1}
                </a>
                <a href="#service_how_it_works" className="btn btn-secondary">
                  {service?.hero?.ctaButton2}
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/hero.png"
                width={640}
                height={500}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center"> Trusted By 1000+ Companies WorldWide</h2>
        <Partner partner={partner} />
      </section>

      {/* Advantage Section */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              {service?.advantage?.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {service?.advantage?.features.map((feature, index) => (
              <div key={index} className="p-8 border rounded-lg">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20" id="service_how_it_works">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              {service?.howItWorks?.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {service?.howItWorks?.steps.map((step, index) => {
              const Icon = iconMap[step.title] || ShieldCheck; // fallback icon if no match
              return (
                <div
                  key={index}
                  className="p-8 border rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 text-primary p-4 rounded-full">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 rounded-xl">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              {service?.testimonials?.title}
            </h2>
          </div>
          <div className="mt-8">
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className='py-20'>
            <div className='container'>
                {service?.pricing && <Plan plan={service?.pricing} />}
                <div className='text-center mt-8'>
                    <a href='#' className='btn btn-secondary'>Compare Pricings</a>
                </div>
            </div>
        </section> */}

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
