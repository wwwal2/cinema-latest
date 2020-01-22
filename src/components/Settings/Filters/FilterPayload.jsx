import React from 'react';
import PropTypes from 'prop-types';
import settingsStyles from '../settingsStyles.css';

export default function FilterPayload(props) {
  const {
    apply, reset, placeholder, year, countryNames, rating,
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
          type="text"
          placeholder={year + placeholder}
          // onKeyPress{}
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
  year: PropTypes.number,
  countryNames: PropTypes.array,
  rating: PropTypes.array,
};

FilterPayload.defaultProps = {
  apply: 'Apply',
  reset: 'Reset',
  placeholder: ' year',
  year: 2019,
  countryNames: [
    'USA',
    'Germany',
    'Italy',
    'France',
    'Russia',
  ],
  rating: [3, 4, 5, 6, 7, 8, 9],
};
