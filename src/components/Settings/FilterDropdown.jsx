import React from 'react';
import PropTypes from 'prop-types';
// import filterStyles from '../css_modules/filterStyles.css';

export default function FilterDropdown(props) {
  const { name, countryNames, rating } = props;

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
      {name}
      <div>
        <input type="text" placeholder="Enter year" />
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

FilterDropdown.propTypes = {
  name: PropTypes.string,
  countryNames: PropTypes.array,
  rating: PropTypes.array,
};

FilterDropdown.defaultProps = {
  name: 'filter',
  countryNames: [
    'USA',
    'Germany',
    'Italy',
    'France',
    'Russia',
  ],
  rating: [4, 5, 6, 7, 8, 9, 10],
};
