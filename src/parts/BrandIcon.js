/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import logo from "../assets/logo.jpg";
import Button from '../elements/Button';

export default function BrandIcon() {
  return (
        <div className="flex items-center space-x-2">
            {/* 左边 Logo */}
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />

            {/* 右边文字 */}
            <Button
              className="p-0 bg-transparent hover:bg-transparent"
              type="link"
              href="/"
            >
                <p className="text-orange-400 text-2xl sm:text-3xl font-medium leading-none">
                    PP <span className="text-orange-400">POS</span>
                </p>
            </Button>
        </div>
  );
}
