/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurClient({ data }) {
  return (
        <section className="container bg-blue-50 mx-auto   px-1 py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
                    Our Clients
                </h2>
                <p className="text-gray-600 mt-2">
                    Trusted by industry-leading companies.
                </p>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={5}
              slidesPerView={5}
              breakpoints={{
                640: { slidesPerView: 6 },
                1024: { slidesPerView: 6 },
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              className="
              "
            >
                {data.map((client) => (
                    <SwiperSlide key={client.id}>
                        <div className="flex justify-center items-center transition duration-300">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="h-20 sm:h-28 object-contain shadow-lg rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
  );
}
