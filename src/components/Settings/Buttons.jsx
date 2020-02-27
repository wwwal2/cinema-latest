import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { filters } from '../../constants';
import { calculatePath } from '../../Utils';

import {
  actionBtn,
  reset,
  apply,
  actionBtnContainer,
  resetLink,
} from './Settings.scss';

import {
  update,
  resetFilters,
  resetOptions,
  addUIPageNum,
  defineSection,
} from '../../redux/actions';

function Buttons(props) {
  const {
    resetFilters,
    resetOptions,
    elementName,
    update,
    briefStatus,
    defineSection,
    updateCounter,
  } = props;
  const history = useHistory();

  useEffect(() => {
    history.push(calculatePath(briefStatus));
  }, [updateCounter]);

  const onApply = () => {
    defineSection('main');
    update();
  };

  const onReset = (element) => {
    if (element === filters) {
      resetFilters();
    } else {
      resetOptions();
    }
    defineSection('main');
    update();
  };

  return (
    <section className={actionBtnContainer}>

      <button
        type="button"
        onClick={onApply}
        className={`${actionBtn} ${apply}`}
      >
        Apply
      </button>

      <button
        type="button"
        onClick={() => onReset(elementName)}
        className={`${actionBtn} ${reset} ${resetLink}`}
      >
        Reset
      </button>
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
    updateCounter: state.status.updateCounter,
  }
);
export default connect(mapStateToProps, {
  update,
  resetFilters,
  resetOptions,
  addUIPageNum,
  defineSection,
})(Buttons);

Buttons.propTypes = {
  updateCounter: PropTypes.number,
  briefStatus: PropTypes.object,
  elementName: PropTypes.string,
  update: PropTypes.func,
  resetFilters: PropTypes.func,
  resetOptions: PropTypes.func,
  defineSection: PropTypes.func,
};

Buttons.defaultProps = {
  updateCounter: 0,
  briefStatus: [],
  elementName: '',
  update: () => { },
  resetFilters: () => { },
  resetOptions: () => { },
  defineSection: () => { },
};
