import Link from "next/link";

export default function ServiceList({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link href={service.href} key={service.title}>
          <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {service.title}
            </h5>
            <p className="font-normal text-gray-700">
              {service.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
}
