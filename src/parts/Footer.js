/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
      <div className="bg-gray-50 border-t border-gray-200 pb-6">
        <div className="container flex-col mx-auto ">
          <div className="flex flex-col sm:flex-row mt-8 justify-center">
            <div className="w-3/3 flex-col ml-16 mr-8">
              <BrandIcon />
              <p className="w-full text-lg text-theme-blue font-light">
                Business growth is our mission.
              </p>
            </div>
            <div className="w-full sm:w-2/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
              <h1 className="text-lg text-theme-blue pt-4 pb-2 font-semibold">
                Contact Us
              </h1>

              <p className="flex items-center text-lg text-gray-400 font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-[#f37525]"
                >
                  <path d="M2.94 6.34A2 2 0 014 6h12a2 2 0 011.06.34L10 11 2.94 6.34z" />
                  <path d="M18 8.12l-7.46 4.97a1 1 0 01-1.08 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
                </svg>
                <span>
      Sales and Consulting:&nbsp;
                  <a
                    href="mailto:sales.etech.ph"
                    className="hover:underline text-theme-blue"
                  >
        sales.etech.ph
      </a>
    </span>
              </p>

              <p className="flex items-center text-lg text-gray-400 font-light mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-[#f37525]"
                >
                  <path d="M2.94 6.34A2 2 0 014 6h12a2 2 0 011.06.34L10 11 2.94 6.34z" />
                  <path d="M18 8.12l-7.46 4.97a1 1 0 01-1.08 0L2 8.12V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
                </svg>
                <span>
      Cooperation and Support:&nbsp;
                  <a
                    href="mailto:support.etech.ph"
                    className="hover:underline text-theme-blue"
                  >
        support.etech.ph
      </a>
    </span>
              </p>
            </div>

            <div className="w-3/3 ml-16 sm:ml-0 mt-0">
              <h1 className="text-lg text-theme-blue pt-4 pb-2">
                Social Media
              </h1>
              <Button
                href="https://www.instagram.com/etechphilippines/"
                type="link" 
                target="_blank" 
                className="flex items-center text-lg text-gray-400 font-light hover:underline"
                isExternal
              > 
                <svg
                  className="w-5 h-5 mr-2" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /> 
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /> 
                </svg> Instagram
              </Button>
              <Button
                href="https://www.facebook.com/etechphilippines"
                type="link"
                target="_blank"
                className="flex items-center text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                Facebook
              </Button>
              <Button
                href="https://www.tiktok.com/@etechphilippines"
                type="link"
                target="_blank"
                className="flex items-center text-lg text-gray-400 font-light hover:underline"
                isExternal
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3h4a5 5 0 005 5v2a7 7 0 01-7-7H9v12a4 4 0 104 4v-3a1 1 0 11-2 0V3z" />
                </svg>
                TikTok
              </Button>

            </div>
          </div>
          <div className="flex-col text-center mt-5">
            <p className="text-lg text-gray-400 font-light">
              Copyright © 2025 PPPOS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
  );
}
