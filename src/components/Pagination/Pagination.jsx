import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import arrowLeft from '../../../images/arr3.png';
import arrowRight from '../../../images/arr2.png';
import pagination from './Pagination.scss';

import PaginationBoard from './PaginationBoard';


function Pagination(props) {
  const {
    totalPages,
    addUIPageNum,
    currentPage,
    update,
  } = props;

  const changePage = (page) => {
    addUIPageNum(page);
    update();
  };

  if (totalPages > 1) {
    return (
      <div>
        <div className={pagination.pagination}>
          <img alt="arrow" src={arrowLeft} onClick={() => changePage(currentPage - 1)} />
          <PaginationBoard totalPages={totalPages} currentPage={currentPage} />
          <img alt="arrow" src={arrowRight} onClick={() => changePage(currentPage + 1)} />
        </div>
      </div>
    );
  }
  return <div />;
}

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.totalResults / state[state.section]),
    currentPage: state.UIpage,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addUIPageNum, update } = bindActionCreators(actions, dispatch);
  return {
    addUIPageNum: (payload) => addUIPageNum(payload),
    update: () => update(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.propTypes = {
  totalPages: PropTypes.number,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1,
  addUIPageNum: () => { },
  update: () => { },
};
