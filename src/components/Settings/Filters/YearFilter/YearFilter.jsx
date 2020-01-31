import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


import filtersStyles from '../filterPayload.css';

import * as actions from '../../../../redux/actions';
import Utility from '../../../Utility';

function useHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  function set(val) {
    setValue(val);
  }
  return { value, set };
}

function YearFilter(props) {
  const inputYear = useHook('');
  const timerId = useHook('');
  const hintPosition = useHook('hide');

  const {
    storeYear,
    maxYear,
    minYear,
    notification,
    addYear,
  } = props;

  const showNotification = () => {
    clearTimeout(timerId.value);
    hintPosition.set('show');
    const timer = setTimeout(() => {
      hintPosition.set('hide');
    }, 5000);
    timerId.set(timer);
  };

  const keyCheck = (event) => {
    const { value } = event.target;
    if (Utility.onlyNumbers(value)) {
      inputYear.set(value);
    }
  };

  const submitCheck = (event) => {
    if (event.key === 'Enter') {
      if (Utility.numberValidation(maxYear, minYear, inputYear.value)) {
        addYear(inputYear.value);
      } else {
        showNotification();
      }
      inputYear.set('');
    }
  };

  return (
    <div>
      <div className={filtersStyles.inputContainer}>
        <input
          value={inputYear.value}
          type="text"
          placeholder={storeYear}
          onKeyPress={submitCheck}
          onChange={keyCheck}
        />
        <div className={filtersStyles[hintPosition.value]}>
          {notification}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ storeYear: state.year });

const mapDispatchToProps = (dispatch) => {
  const { addYear } = bindActionCreators(actions, dispatch);
  return {
    addYear: (payload) => addYear(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YearFilter);

YearFilter.propTypes = {
  storeYear: PropTypes.string,
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  notification: PropTypes.string,
  addYear: PropTypes.func,
};

YearFilter.defaultProps = {
  storeYear: '',
  maxYear: 2020,
  minYear: 1950,
  notification: 'Please input correct date from \'1950\' to \'2020\'',
  addYear: () => { },
};
