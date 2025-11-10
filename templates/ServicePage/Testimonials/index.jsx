import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`p-8 border rounded-xl bg-white ${
        isActive ? "tab-active" : ""
      }`}
    >
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

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer bg-white/30 backdrop-blur-sm rounded-full p-2`}
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6 text-black" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer bg-white/30 backdrop-blur-sm rounded-full p-2`}
      onClick={onClick}
    >
      <ChevronLeft className="h-6 w-6 text-black" />
    </div>
  );
};

export default function Testimonials({ service, testimonials }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextSlide = (activeSlide + 1) % testimonials.length;
        sliderRef.current.slickGoTo(nextSlide);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [activeSlide, testimonials.length]);

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveSlide(current),
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

  return (
    <section className="bg-white py-20 rounded-xl">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            {service?.testimonials?.title}
          </h2>
        </div>
        <div className="mt-8">
          <Slider {...testimonialSettings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === activeSlide}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
