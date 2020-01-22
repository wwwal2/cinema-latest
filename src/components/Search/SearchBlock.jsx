import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { test, test2 } from '../../redux/actions';
import searchStyles from './searchStyles.css';

function Search(props) {
  const {
    placeHolder,
    start,
    readTheStore,
    testOne,
    testTwo,
  } = props;
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
        onClick={
          readTheStore !== 'TestOne'
            ? () => testOne('TestOne')
            : () => testTwo('TestTwo')
        }
      >
        {`${start} ${readTheStore}`}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => (
  { readTheStore: state.storeTest }
);

const mapDispatchToProps = (dispatch) => ({
  testOne: (payload) => dispatch(test(payload)),
  testTwo: (payload) => dispatch(test2(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  placeHolder: PropTypes.string,
  start: PropTypes.string,
  readTheStore: PropTypes.string,
  testOne: PropTypes.string,
  testTwo: PropTypes.string,
};

Search.defaultProps = {
  placeHolder: 'Search movies',
  start: 'Start',
  readTheStore: 'store',
  testOne: 'action',
  testTwo: 'action',
};
