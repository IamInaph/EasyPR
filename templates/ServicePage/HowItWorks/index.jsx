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

export default function HowItWorks({ service }) {
  return (
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
            const iconStyles = [
              {
                bgColor: "bg-primary-100",
                textColor: "text-primary-600",
              },
              {
                bgColor: "bg-slate-100",
                textColor: "text-slate-600",
              },
              {
                bgColor: "bg-gray-100",
                textColor: "text-gray-600",
              },
              {
                bgColor: "bg-[#F4F3FF]",
                textColor: "text-[#7A5AF8]",
              },
              {
                bgColor: "bg-[#FFF6ED]",
                textColor: "text-[#FB6514]",
              },
            ];
            const style = iconStyles[index % iconStyles.length];
            return (
              <div
                key={index}
                className="p-8 border rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-full ${style.bgColor} ${style.textColor}`}
                  >
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
  );
}
