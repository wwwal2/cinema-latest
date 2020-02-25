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
    briefStatus,
  } = props;

  const apply = () => {
    update();
    calculatePath(briefStatus);
  };

  const doReset = (element) => {
    if (element === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    update();
  };

  return (
    <section className={settings.actionBtnContainer}>
      <Link to={calculatePath(briefStatus)} className={settings.applyLink}>
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
    briefStatus: {
      section: state.status.section,
      page: state.status.UIpage,
      cardsNum: state.cardsNum[state.status.section],
      year: state.movie.year,
      genre: state.movie.genre,
      rating: state.movie.rating,
    },
  }
);
export default connect(mapStateToProps, {
  update,
  resetFilters,
  resetOptions,
  addUIPageNum,
})(Buttons);

Buttons.propTypes = {
  briefStatus: PropTypes.object,
  reset: PropTypes.string,
  update: PropTypes.func,
  resetFilters: PropTypes.func,
  resetOptions: PropTypes.func,
};

Buttons.defaultProps = {
  briefStatus: [],
  reset: '',
  update: () => { },
  resetFilters: () => { },
  resetOptions: () => { },
};
