/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Select = (props) => {
  const {
    name, value, options, className, errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (!event.target.value) {
      setHasError(errorResponse);
    } else {
      setHasError(null);
    }

    props.onChange(target);
  };

  return (
        <div className="flex flex-col mb-6 mx-2 lg:mx-5">
            <select
              name={name}
              value={value}
              className={[
                'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f37525]',
                className,
              ].join(' ')}
              onChange={onChange}
              required
            >
                <option value="">Select Industry</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {hasError && (
                <span className="text-sm text-white bg-red-500 p-1 rounded">
          {hasError}
        </span>
            )}
        </div>
  );
};

Select.defaultProps = {
  errorResponse: 'Please select an option.',
  className: '',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
};
