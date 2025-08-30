/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "🧾",
      title: "Multiple Payment Methods",
      description:
                "Supports QR code payment, bank cards, cash, and more to fit different scenarios.",
    },
    {
      id: 2,
      icon: "👥",
      title: "Membership Marketing",
      description:
                "Built-in membership system with points, stored value, and coupons management.",
    },
    {
      id: 3,
      icon: "📊",
      title: "Business Analytics",
      description:
                "Generate reports in real time to help owners make accurate decisions and increase revenue.",
    },
    {
      id: 4,
      icon: "📦",
      title: "Inventory Management",
      description:
                "Auto-synced stock, low inventory alerts, and reduced waste.",
    },
    {
      id: 5,
      icon: "📱",
      title: "Cross-Device Sync",
      description:
                "Supports cash register and management on tablet and desktop.",
    },
    {
      id: 6,
      icon: "🔒",
      title: "Secure & Stable",
      description:
                "Multi-layer data encryption ensures safe and reliable store operations.",
    },
  ];

  return (
        <section className="feature bg-gradient-to-b from-white to-white ">
            <div className="container mx-auto px-10 py-10">
                <Fade direction="up" triggerOnce>
                    {/* Title Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-theme-blue mb-4">
                            Key Features
                        </h2>
                        <p className="text-gray-500 text-lg  mx-auto">
                            Empowering businesses in retail, restaurants, and quick-service chains —
                            streamlining everything from checkout to daily
                            operations for a smarter future.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature) => (
                            <div
                              key={feature.id}
                              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 relative"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 text-white text-3xl mb-6 group-hover:scale-110 transform transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3 text-blue-700 group-hover:text-theme-purple transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-theme-purple transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
  );
}
