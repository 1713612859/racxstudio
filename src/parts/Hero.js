/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png"; // Replace with POS-related image

export default function Hero() {
  return (
      <section className="hero flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* Left content area */}
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Smart POS<br />

        </h1>
          <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
            Making Store Management Easier
          </h2>

          <p className="font-light text-xl text-gray-500 leading-relaxed mb-10">
            Supporting member marketing,
            inventory management and business analytics to help stores with digital transformation.
          </p>

          <Fade direction="up" delay={500} triggerOnce>
            <div className="flex gap-4">
              <Button
                href="/discuss-project"
                type="link"
                className="px-10 py-4 text-white text-lg bg-theme-purple rounded-lg shadow-xl hover:bg-dark-theme-purple transition duration-200"
              >
                Book Demo
              </Button>
              <Button
                href="/features"
                type="link"
                className="px-10 py-4 text-theme-purple text-lg border border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition duration-200"
              >
                View Features
              </Button>
            </div>
          </Fade>
        </div>

        {/* Right product showcase image */}
        <div className="flex pt-5 w-full lg:w-1/2 justify-center items-center">
          <Fade direction="down" triggerOnce>
            <img
              className="max-w-full h-auto"
              src={BuildWebsite}
              alt="Smart Point of Sales"
            />
          </Fade>
        </div>
      </section>
  );
}
