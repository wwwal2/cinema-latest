import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { filters } from '../../constants';
import { calculatePath } from '../../Utils';

import settings from './Settings.scss';

import {
  update,
  resetFilters,
  resetOptions,
  addUIPageNum,
} from '../../redux/actions';

function Buttons(props) {
  const {
    resetFilters,
    resetOptions,
    reset,
    update,
    addUIPageNum,
    movie,
    briefStatus,
  } = props;

  const apply = () => {
    addUIPageNum(1);
    update();
    calculatePath(briefStatus, movie);
  };

  const doReset = (element) => {
    if (element === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    addUIPageNum(1);
    update();
  };

  return (
    <section className={settings.actionBtnContainer}>
      <Link to="/" className={settings.applyLink}>
        <button
          type="button"
          onClick={apply}
          className={`${settings.actionBtn} ${settings.apply}`}
        >
          Apply
        </button>
      </Link>

      <Link to="/" className={settings.resetLink}>
        <button
          type="button"
          onClick={() => doReset(reset)}
          className={`${settings.actionBtn} ${settings.reset}`}
        >
          Reset
        </button>
      </Link>
    </section>
  );
}

const mapStateToProps = (state) => (
  {
    briefStatus: [
      state.status.section,
      state.status.UIpage,
      state.cardsNum[state.status.section],
    ],
    movie: state.movie,
  }
);
export default connect(mapStateToProps, {
  update,
  resetFilters,
  resetOptions,
  addUIPageNum,
})(Buttons);

Buttons.propTypes = {
  movie: PropTypes.object,
  briefStatus: PropTypes.array,
  reset: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  resetFilters: PropTypes.func,
  resetOptions: PropTypes.func,
};

Buttons.defaultProps = {
  movie: {},
  briefStatus: [],
  reset: '',
  addUIPageNum: () => { },
  update: () => { },
  resetFilters: () => { },
  resetOptions: () => { },
};
