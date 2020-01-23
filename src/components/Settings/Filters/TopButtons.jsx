import React from 'react';
import PropTypes from 'prop-types';
import filtersStyles from './filtersStyles.css';

export default function TopButtons(props) {
  const {
    apply,
    reset,
  } = props;

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
    </div>
  );
}

TopButtons.propTypes = {
  apply: PropTypes.string,
  reset: PropTypes.string,
};

TopButtons.defaultProps = {
  apply: 'Apply',
  reset: 'Reset',
};
