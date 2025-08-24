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
            <div className="w-1/3 flex-col ml-16 mr-8">
              <BrandIcon />
              <p className="w-full text-lg text-theme-blue font-light">
                业务增长，是我们的使命。
              </p>
            </div>
            <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
              <h1 className="text-lg text-theme-blue pt-4 pb-2">
                联系我们
              </h1>
              <p className="flex items-center text-lg text-gray-400 font-light hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M3 4a2 2 0 00-2 2v1.161A4 4 0 1019.741 6.161V6a2 2 0 00-2-2H3z" />
                  <path fillRule="evenodd" d="M3 14a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2H3zm5.338 0a3 3 0 103.324 0h-3.324z" clipRule="evenodd" />
                </svg>
                销售与咨询：sales.etech.ph
              </p>
              <p className="flex items-center text-lg text-gray-400 font-light hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M3 4a2 2 0 00-2 2v1.161A4 4 0 1019.741 6.161V6a2 2 0 00-2-2H3z" />
                  <path fillRule="evenodd" d="M3 14a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2H3zm5.338 0a3 3 0 103.324 0h-3.324z" clipRule="evenodd" />
                </svg>
                合作与支持：contact.etech.ph
              </p>
            </div>
            <div className="w-1/3 ml-16 sm:ml-0 mt-0">
              <h1 className="text-lg text-theme-blue pt-4 pb-2">
                社交媒体
              </h1>
              <Button href="https://www.instagram.com/racmathafidz/" type="link" target="_blank" className="flex items-center text-lg text-gray-400 font-light hover:underline" isExternal>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </Button>
              <Button href="https://www.linkedin.com/in/racmat-hafidz-89982a156/" type="link" target="_blank" className="flex items-center text-lg text-gray-400 font-light hover:underline" isExternal>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </Button>
              <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="flex items-center text-lg text-gray-400 font-light hover:underline" isExternal>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.54 6.4-1.59 9.4-4.14-1.05-5.96-4.05-8.14-6.05-8.29a5.2 5.2 0 00-2.33-.5 5.2 5.2 0 00-2.33.5 6.05 6.05 0 00-8.04 2.28 2.79 2.79 0 00-.19 1.94c0 3.2 2.89 5.81 6.89 6.05 1.9-2.17 3.28-4.63 3.75-8.09-2.3-2.3-6.16-2.3-8.46 0-1.25 1.25-2 2.88-2 4.08a1 1 0 00.35.64 2.65 2.65 0 01-.65 1.1 2.62 2.62 0 01-.92 1 2.62 2.62 0 01-1.29.5 2.62 2.62 0 01-.76-.34 1 1 0 00-.02-.02 2.78 2.78 0 01-.7 1.13 2.79 2.79 0 001.2 2.89 2.79 2.79 0 01-.92 1.11 2.79 2.79 0 01-.69.95 2.78 2.78 0 01-.21.34 1 1 0 00.25.18 1.74 1.74 0 00.64-.08 1.74 1.74 0 00.56-.34" />
                </svg>
                Github
              </Button>
            </div>
          </div>
          <div className="flex-col text-center mt-5">
            <p className="text-lg text-gray-400 font-light">
              Copyright © 2021 PP POS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
  );
}
