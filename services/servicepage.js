import { fetchAPI } from "@/utils/api";
export async function getServicePageData() {
  // For now, we'll return static data based on the PDF.
  // Later, this can be fetched from a CMS.
  return {
    data: {
      data: {
        attributes: {
          seo: {
            metaTitle: "Our Services - Easy PR",
            metaDescription:
              "Affordable press release distribution services to boost your brand visibility.",
          },
          hero: {
            title:
              "Launch New Products & Drive Sales: PR Distribution for E-commerce Success.",
            description:
              "Secure high-intent coverage on shopping blogs, tech review sites, and major news outlets that directly impact your store's traffic and trust.",
            ctaButton1: "Get Started",
            ctaButton2: "Learn More",
          },
          trustedBy: {
            title: "Trusted By 1000+ Companies WorldWide",
            companies: [
              "Company 1",
              "Company 2",
              "Company 3",
              "Company 4",
              "Company 5",
            ],
          },
          advantage: {
            title:
              "Stop Wasting Ad Spend: The E-commerce PR Advantage is Organic Growth.",
            features: [
              {
                title: "H3",
                description: "Short Description",
              },
              {
                title: "H3",
                description: "Short Description",
              },
              {
                title: "H3",
                description: "Short Description",
              },
              {
                title: "H3",
                description: "Short Description",
              },
            ],
          },
          howItWorks: {
            title: "How EasyPr Can Help?",
            steps: [
              {
                title: "Writing",
                description:
                  "Our expert team creates a high-quality press release focused on your story. Every release is written to attract media attention and connect with your target audience.",
              },
              {
                title: "Media Coverage",
                description:
                  "Once approved, we publish your release across a network of 400+ news websites, blogs, and industry media channels. This helps expand your reach and boost brand awareness.",
              },
              {
                title: "Results & Trust",
                description:
                  "You’ll receive a detailed report with live links to every placement, plus a trust badge you can use on your website. Enjoy increased SEO, media exposure, and brand credibility.",
              },
              {
                title: "Publish Your Press Release Within 7 Days",
                description:
                  "Skip the wait. Our expert press release distribution service gets your story published on high-traffic media sites in less than a week. Gain faster exposure and better momentum for your brand.",
              },
              {
                title: "Reach Buyers Who Are Searching for You",
                description:
                  "We distribute your news to relevant media channels and connect you with journalists and audiences who are already looking for products and services like yours.",
              },
              {
                title: "Boost Your SEO and Google Rankings",
                description:
                  "Each press release builds backlinks from trusted media outlets. Improve your search visibility, grow your domain authority, and attract organic traffic that converts.",
              },
            ],
          },
          testimonials: {
            title: "Clients Testimonials",
          },
          pricing: {
            title: "Pricings Section",
            plans: [
              {
                name: "Starter",
                price: "$59",
                originalPrice: "$159",
                features: ["For small business", "Starter Sample Report"],
                cta: "Order Now",
              },
              {
                name: "Elite",
                price: "$99",
                originalPrice: "$299",
                features: ["For large business", "Elite Sample Report"],
                cta: "Order Now",
              },
              {
                name: "Premium",
                price: "$399",
                originalPrice: "$599",
                features: ["For top business", "Premium Sample Report"],
                cta: "Order Now",
              },
              {
                name: "Ultimate",
                price: "$499",
                originalPrice: "$799",
                features: ["For large business", "Ultimate Sample Report"],
                cta: "Order Now",
              },
            ],
            compareButton: "Compare Pricings",
          },
          finalCta: {
            title: "Final CTA Heading",
            description: "Short Description",
            ctaButton1: "CTA BUTTON 1",
            ctaButton2: "CTA BUTTON 2",
          },
          faq: {
            section: {
              name: "FAQs",
              title: "Frequently Asked Questions",
              subTitle: "Find answers to common questions about our services.",
            },
            faqs: {
              data: [
                {
                  id: 1,
                  attributes: {
                    question:
                      "What makes EasyPRwire the best press release service for businesses?",
                    answer:
                      "EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.",
                    category: "General",
                  },
                },
                {
                  id: 2,
                  attributes: {
                    question:
                      "How long does a press release take from writing to publishing?",
                    answer:
                      "Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.",
                    category: "Process",
                  },
                },
                {
                  id: 3,
                  attributes: {
                    question:
                      "What makes EasyPRwire the best press release service for businesses?",
                    answer:
                      "EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.",
                    category: "General",
                  },
                },
                {
                  id: 4,
                  attributes: {
                    question:
                      "What makes EasyPRwire the best press release service for businesses?",
                    answer:
                      "EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.",
                    category: "General",
                  },
                },
                {
                  id: 5,
                  attributes: {
                    question:
                      "What makes EasyPRwire the best press release service for businesses?",
                    answer:
                      "EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.",
                    category: "General",
                  },
                },
                {
                  id: 6,
                  attributes: {
                    question:
                      "What makes EasyPRwire the best press release service for businesses?",
                    answer:
                      "EasyPRwire offers expert-written press releases, SEO strategy, and wide distribution to top outlets like FOX, NBC, and CBS affiliates. Ideal for startups and businesses seeking the best press release service or online press release services.",
                    category: "General",
                  },
                },
                {
                  id: 7,
                  attributes: {
                    question:
                      "How long does a press release take from writing to publishing?",
                    answer:
                      "Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.",
                    category: "Process",
                  },
                },
                {
                  id: 8,
                  attributes: {
                    question:
                      "How long does a press release take from writing to publishing?",
                    answer:
                      "Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.",
                    category: "Process",
                  },
                },
                {
                  id: 9,
                  attributes: {
                    question:
                      "How long does a press release take from writing to publishing?",
                    answer:
                      "Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.",
                    category: "Process",
                  },
                },
                {
                  id: 10,
                  attributes: {
                    question:
                      "How long does a press release take from writing to publishing?",
                    answer:
                      "Typically 7 business days. Press release writing takes 2–3 days, revisions 1 day, and press release publishing takes 3–5 days. Add-ons like international syndication may extend the timeline.",
                    category: "Process",
                  },
                },
              ],
            },
          },
        },
      },
    },
  };
}
