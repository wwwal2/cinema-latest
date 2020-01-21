import React from 'react';
import PropTypes from 'prop-types';
import searchStyles from './searchStyles.css';

export default function Search(props) {
  const { placeHolder, start } = props;
  return (
    <div className={searchStyles.subgrid}>
      <input
        type="text"
        placeholder={placeHolder}
        className={searchStyles.search}
      />
      <button
        type="button"
        className={searchStyles.start}
      >
        {start}
      </button>
    </div>
  );
}

Search.propTypes = {
  placeHolder: PropTypes.string,
  start: PropTypes.string,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  start: 'Start',
};
