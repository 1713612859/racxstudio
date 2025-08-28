/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services,  Advantages, Testimonials, OurClients, OurHardwares,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
// import Portfolio from 'parts/Portfolio';
import Features from "parts/Features";
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import OurClient from "parts/OurClients";
import OurHardware from "parts/OurHardware";
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
          <Features />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <OurClient data={OurClients} />
          <OurHardware data={OurHardwares} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
