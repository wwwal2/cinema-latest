import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filtersStyles from './filtersStyles.css';

export default function FilterPayload(props) {
  const [movieYear, setYear] = useState('');
  const [timerId, setTimerId] = useState('');
  const [hintPosition, setHintPosition] = useState('hide');

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

  function generateSelect(optionsArr) {
    const generate = optionsArr.map((option) => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });
    return generate;
  }

  function permit(value) {
    if (/^\d+$/.test(value) || value === '') {
      setYear(value);
    }
  }

  function validate(number) {
    if (number > maxYear || number < minYear) {
      clearTimeout(timerId);
      setHintPosition('show');
      const timer = setTimeout(() => {
        setHintPosition('hide');
      }, 5000);
      setYear('');
      setTimerId(timer);
    }
  }

  function submit(e) {
    if (e.key === 'Enter') {
      validate(movieYear);
      setYear('');
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
          value={movieYear}
          type="text"
          placeholder={placeholderYear + placeholder}
          onKeyPress={(event) => submit(event)}
          onChange={(event) => permit(event.target.value)}
        />
        <div className={filtersStyles[hintPosition]}>
          {notification}
        </div>
      </div>
      <div>
        <div>Countries</div>
        <select id="countries">{generateSelect(countryNames)}</select>
      </div>
      <div>
        <div>Rating</div>
        <select id="rating">{generateSelect(rating)}</select>
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
  notification: 'Please input correct date from \'1980\' to \' 2020\'',
};
