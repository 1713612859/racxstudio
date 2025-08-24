/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import HelpCenter from "parts/HelpCenter";
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export default class HelpCenterPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
           <>
            <Header />
               <HelpCenter />
               <Footer />
           </>
    );
  }
}
