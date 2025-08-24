/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Blog from "parts/Blog";

export default class BlogPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
            <>
                <Header />
                    <Blog />
                <Footer />
            </>
    );
  }
}
