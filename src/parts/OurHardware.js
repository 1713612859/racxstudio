/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";

export default function OurHardware({ data }) {
  return (
        <section className="container mx-auto px-4 py-16 bg-blue-50">
            <div className="text-center   mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
                    Our hardware  products
                </h2>
                <p className="text-gray-600   mt-2">Diverse hardware solutions empower efficient store operations.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {/* eslint-disable-next-line react/destructuring-assignment */}
                {data.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
                    >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 sm:h-32 object-contain mb-4"
                        />
                        <p className="text-gray-800 font-medium">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
  );
}
