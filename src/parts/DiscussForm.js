/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const { name, email, projectIdea } = data;

    if (!name || !email || !projectIdea) {
      toast.error('Please fill out your name, email, and project idea.');
      return;
    }

    const templateParams = {
      name,
      projectIdea,
      title: projectIdea,
      message: projectIdea,
      to_email: email,
    };

    console.log('Sending email with:', templateParams);

    emailjs.send(
      'service_an19heb',
      'template_urpnupp',
      templateParams,
      'TSPrn4FlWjVdIchE-',
    )
      .then(() => {
        toast.success('Success! We will get back to you soon. Thank you!');
        resetForm();
      })
      .catch((error) => {
        toast.error(`Failed to send: ${error.text || error}`);
      });
  };

  return (
      <section className="flex flex-col container mx-auto mt-10 justify-center">

        <Fade direction="down" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row mx-auto">
              <Form
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Your name"
                className=""
                onChange={actions.onChange}
              />
              <Form
                id="company"
                name="company"
                type="text"
                value={data.company}
                placeholder="Your company"
                className=""
                onChange={actions.onChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row mx-auto">
              <Form
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Your email address"
                className=""
                onChange={actions.onChange}
              />
              <Form
                id="phone"
                name="phone"
                type="text"
                value={data.phone}
                placeholder="Your contact number"
                className=""
                onChange={actions.onChange}
              />
            </div>

            <div className="mx-auto">
              <Form
                id="projectIdea"
                name="projectIdea"
                type="textarea"
                value={data.projectIdea}
                placeholder="Explain about your project idea"
                className=""
                onChange={actions.onChange}
              />
            </div>
            <Button
              className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
              type="button"
              onClick={submitEmail}
            >
              Submit
            </Button>
          </div>
        </Fade>

        <ToastContainer />
        <section className="container mx-auto px-4 mt-12 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Details */}
            <div className="space-y-6 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We’d love to hear from you. Get in touch with us through any of the following:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">📍 Address</h3>
                  <p className="text-gray-600">
                    don benito, f.b Harrison, Don B. Hernandez, Pasay City, 1300 Metro Manila
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">📞 Phone</h3>
                  <p className="text-gray-600">0917-446-9999</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">✉️ Email</h3>
                  <p className="text-gray-600">info@e-tech.com.ph</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">🕒 Office Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="w-full h-[400px]">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7656209581895!2d121.02672191530756!3d14.550198689812674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9b0e9e1c1b1%3A0x6b3b2b7b5c0c9e6d!2sMakati%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1678825028448!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </section>
  );
};
