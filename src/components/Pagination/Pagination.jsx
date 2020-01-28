import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import arrowLeft from '../../../images/arr3.png';
import arrowRight from '../../../images/arr2.png';
import arrowHome from '../../../images/arr5.png';
import arrowLast from '../../../images/arr6.png';

import Utility from '../Utility';

import pagiStyles from './pagiStyles.css';

function Pagination(props) {
  const { totalPages, addUIPageNum, currentPage } = props;

  const changePage = (page) => {
    if (Utility.numberValidation(totalPages, 1, page)) {
      addUIPageNum(page);
    }
  };

  return (
    <div>
      <div className={pagiStyles.label}>
        Total pages:
        {
          totalPages
        }
      </div>
      <div className={pagiStyles.pagination}>
        <img alt="arrow" src={arrowHome} onClick={() => changePage(1)} />
        <img alt="arrow" src={arrowLeft} onClick={() => changePage(currentPage - 1)} />
        <input type="text" placeholder={currentPage} />
        <img alt="arrow" src={arrowRight} onClick={() => changePage(currentPage + 1)} />
        <img alt="arrow" src={arrowLast} onClick={() => changePage(totalPages)} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.totalResults / state.main),
    currentPage: state.UIpage,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addUIPageNum } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.propTypes = {
  totalPages: PropTypes.number,
  addUIPageNum: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1,
  addUIPageNum: () => { },
};
