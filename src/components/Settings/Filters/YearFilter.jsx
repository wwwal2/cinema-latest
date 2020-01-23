import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filtersStyles from './filtersStyles.css';

function useHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  function set(val) {
    setValue(val);
  }
  return { value, set };
}

export default function YearFilter(props) {
  const movieYear = useHook('');
  const timerId = useHook('');
  const hintPosition = useHook('hide');

  const {
    placeholderYear,
    maxYear,
    minYear,
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
      <div className={filtersStyles.inputContainer}>
        <input
          value={movieYear.value}
          type="text"
          placeholder={placeholderYear}
          onKeyPress={(event) => submit(event)}
          onChange={(event) => permit(event.target.value)}
        />
        <div className={filtersStyles[hintPosition.value]}>
          {notification}
        </div>
      </div>
    </div>
  );
}

YearFilter.propTypes = {
  placeholderYear: PropTypes.number,
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  notification: PropTypes.string,
};

YearFilter.defaultProps = {
  placeholderYear: 2019,
  maxYear: 2020,
  minYear: 1980,
  notification: 'Please input correct date from \'1980\' to \'2020\'',
};
