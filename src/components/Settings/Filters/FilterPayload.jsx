import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filtersStyles from './filtersStyles.css';

import Select from './Select';

function useHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  function set(val) {
    setValue(val);
  }
  return {
    value,
    set,
  };
}

export default function FilterPayload(props) {
  const movieYear = useHook('');
  const timerId = useHook('');
  const hintPosition = useHook('hide');

  const {
    apply,
    reset,
    placeholder,
    placeholderYear,
    maxYear,
    minYear,
    countryNames,
    rating,
    notification,
  } = props;

  function permit(value) {
    if (/^\d+$/.test(value) || value === '') {
      movieYear.set(value);
    }
  }

  function validate(number) {
    if (number > maxYear || number < minYear) {
      clearTimeout(timerId.value);
      hintPosition.set('show');
      const timer = setTimeout(() => {
        hintPosition.set('hide');
      }, 5000);
      movieYear.set('');
      timerId.set(timer);
    }
  }

  function submit(e) {
    if (e.key === 'Enter') {
      validate(movieYear.value);
      movieYear.set('');
    }
  }
  return (
    <div>
      <div className={filtersStyles.applyReset}>
        <button type="button">
          {apply}
        </button>
        <button type="button">
          {reset}
        </button>
      </div>
      <div className={filtersStyles.inputContainer}>
        <input
          value={movieYear.value}
          type="text"
          placeholder={placeholderYear + placeholder}
          onKeyPress={(event) => submit(event)}
          onChange={(event) => permit(event.target.value)}
        />
        <div className={filtersStyles[hintPosition.value]}>
          {notification}
        </div>
      </div>
      <div>
        <div>Countries</div>
        <Select selectOptions={countryNames} />
      </div>
      <div>
        <div>Rating</div>
        <Select selectOptions={rating} />
      </div>
    </div>
  );
}

FilterPayload.propTypes = {
  apply: PropTypes.string,
  reset: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderYear: PropTypes.number,
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  countryNames: PropTypes.array,
  rating: PropTypes.array,
  notification: PropTypes.string,
};

FilterPayload.defaultProps = {
  apply: 'Apply',
  reset: 'Reset',
  placeholder: ' year',
  placeholderYear: 2019,
  maxYear: 2020,
  minYear: 1980,
  countryNames: [
    'USA',
    'Germany',
    'Italy',
    'France',
    'Russia',
  ],
  rating: [3, 4, 5, 6, 7, 8, 9],
  notification: 'Please input correct date from \'1980\' to \'2020\'',
};
