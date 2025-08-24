/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-orange-400 text-4xl font-medium ">
        PP
        <span className="text-orange-400">{' '} POS</span>
      </p>
    </Button>
  );
}
