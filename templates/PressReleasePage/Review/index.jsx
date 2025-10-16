"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default function Review({ feedback }) {
  // console.log("feedback", feedback);
  return (
    <section className="bg-linear-gradient-secondary pb-0" id="review">
      <div className="container">
        <div className="mb-12">
          <span className="text-key">{feedback.section.name}</span>
          <h2 className="text-white">{feedback.section.title}</h2>
        </div>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {feedback?.feedbacks.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row container lg:py-20 pb-12 gap-10">
                <div>
                  <figure className="h-[12.5rem] w-[12.5rem] rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src="https://res.cloudinary.com/dbhgrickp/image/upload/v1703493094/Easy-pr/Avatar_hochqp.jpg"
                      height={200}
                      width={200}
                      alt="avatar"
                    />
                  </figure>
                </div>
                <div className="max-w-4xl flex flex-col gap-20">
                  <blockquote className="text-[1.825rem] font-normal text-gray-200 italic">
                    {item?.content}
                  </blockquote>
                  <div>
                    <strong className="block text-2xl text-white">
                      {item?.clientName}
                    </strong>
                    <span className="text-gray-300">
                      {item?.clientDegination}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
