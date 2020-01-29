import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

// import Utility from '../Utility';

import pagination from './pagination.css';

function Button(props) {
  const {
    page,
    btnClass,
    addUIPageNum,
    disabled,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
  };

  return (
    <button
      type="button"
      className={pagination[btnClass]}
      onClick={() => changePage(page)}
      disabled={disabled}
    >
      {page}
    </button>
  );
}

// const mapStateToProps = (state) => (
//   {
//     totalPages: Math.ceil(state.totalResults / state.main),
//     currentPage: state.UIpage,
//   }
// );

const mapDispatchToProps = (dispatch) => {
  const { addUIPageNum } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
  };
};

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUIPageNum: PropTypes.func,
  disabled: PropTypes.bool,
  // currentPage: PropTypes.number,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  addUIPageNum: () => { },
  disabled: false,
};
