import Layout from "@/components/Layout";
import ServiceList from "@/components/ServiceList";
import { getHomepageData } from "@/services/homepage";
import Plan from "@/templates/ServicePage/Plan";

export default async function AllServices() {
  const homeData = await getHomepageData();
  const plan = homeData?.data?.data?.attributes?.content?.find(
    (content) => content?.section?.uid === "pricing"
  );
  const services = [
    {
      title: "Press Release Distribution Services For SaaS",
      description: "Get your SaaS featured on top tech media, startup blogs, and business outlets.",
      href: "/services/press-release-services-for-saas",
    },
    {
      title: "Press Release Distribution Services For Fintech",
      description: "Secure high-intent media coverage on top financial news outlets, fintech blogs, and investor-focused platforms.",
      href: "/services/press-release-services-for-fintech",
    },
    {
      title: "Press Release Distribution Services For Real Estate",
      description: "Get featured on top real estate blogs, property news sites, and industry publications.",
      href: "/services/press-release-services-for-real-estate",
    },
    {
      title: "Press Release Distribution Services For Ecommerce Brands",
      description: "Boost eCommerce sales with targeted press release distribution services.",
      href: "/services/press-release-services-for-ecommerce-brands",
    },
    {
      title: "Press Release Distribution Services For Startups",
      description: "Your news, product launches, and updates reach the right media outlets, blogs, and online platforms.",
      href: "/services/press-release-services-for-startups",
    },
    {
      title: "Press Release Services for E-commerce",
      description: "Drive Sales with PR Distribution.",
      href: "/services/press-release-services-for-e-commerce",
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
          <ServiceList services={services} />
        </div>
      </section>
      <Plan plan={plan} />
    </Layout>
  );
}
