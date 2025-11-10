import { useEffect, useState } from "react";
const OrganicGrowth = ({ service }) => {
  const [openTab, setOpenTab] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpenTab((prevItem) => (prevItem + 1) % (service?.organicGrowth?.length || 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [service?.organicGrowth?.length]);
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center">{service?.organicGrowthTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {service?.organicGrowth?.map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 border rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 ${
                openTab === index ? "tab-active" : ""
              }`}
            >
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganicGrowth;
