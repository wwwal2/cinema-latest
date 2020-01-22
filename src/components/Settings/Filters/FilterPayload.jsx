import React, { useState } from 'react';
import PropTypes from 'prop-types';
import settingsStyles from '../settingsStyles.css';

export default function FilterPayload(props) {
  const [movieYear, setYear] = useState('');
  const {
    apply, reset, placeholder, placeholderYear, maxYear, minYear, countryNames, rating,
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
      console.log('You picked wrong number');
      setYear('');
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
      <div className={settingsStyles.applyReset}>
        <button type="button">
          {apply}
        </button>
        <button type="button">
          {reset}
        </button>
      </div>
      <div>
        <input
          value={movieYear}
          type="text"
          placeholder={placeholderYear + placeholder}
          onKeyPress={(event) => submit(event)}
          onChange={(event) => permit(event.target.value)}
        />
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
};
