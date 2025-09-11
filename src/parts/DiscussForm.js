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
import  { Select }  from "elements/Select";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const { name, email, projectIdea } = data;

    if (!name || !email || !projectIdea) {
      toast.error('Please fill out your name, email . ');
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
          <h1 className="text-5xl text-gray-900 text-center font-bold">Simplify Your Business With Us!</h1>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Every business has a story.
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's hear yours-fill out the form and we'll work on bringing your ideas to life.
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
              <Select
                name="company"
                value={data.company}
                onChange={actions.onChange}
                options={[
                  { value: 'food-beverages', label: 'Food & Beverages Industry' },
                  { value: 'retail-consumer', label: 'Retail & Consumer Industry' },
                ]}
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
                placeholder="Explain briefly your business"
                className=""
                onChange={actions.onChange}
              />
            </div>
            <Button
              className="text-xl mx-auto px-12 py-3 mt-5 bg-[#f37525] text-white rounded-full border-2 border-[#f37525] hover:bg-[#d9641f] transition duration-200 focus:outline-none"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0614399422075!2d120.99289137574067!3d14.538478278593319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9597d50c6e5%3A0xe6a2b03436ca7914!2sGlobal%20Media%20Live%20Inc!5e0!3m2!1sen!2sph!4v1757559840636!5m2!1sen!2sph"
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
