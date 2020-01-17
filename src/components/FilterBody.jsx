import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from '../css_modules/filterStyles.css';

export default function FilterBody(props) {
  const { name, optionNames } = props;
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
    <div className={filterStyles.dropDown}>
      {name}
      <div>
        <input type="number" placeholder="Enter year" />
      </div>
      <div>
        <div>Countries</div>
        <select id="countries">{generateSelect(optionNames)}</select>
      </div>
    </div>
  );
}

FilterBody.propTypes = {
  name: PropTypes.string,
  optionNames: PropTypes.array,
};

FilterBody.defaultProps = {
  name: 'filter',
  optionNames: [
    'USA',
    'Germany',
    'Italy',
    'France',
    'Russia',
  ],
};
