import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import arrowLeft from '../../../images/arr3.png';
import arrowRight from '../../../images/arr2.png';
import pagination from './Pagination.scss';

import PaginationBoard from './PaginationBoard';
import Arrow from './Arrow';


function Pagination(props) {
  const { totalPages, currentPage, detailsTab } = props;

  if (totalPages > 1 && !detailsTab) {
    return (
      <div className={pagination.container}>
        <Arrow page={currentPage - 1} image={arrowLeft} />
        <PaginationBoard totalPages={totalPages} currentPage={currentPage} />
        <Arrow page={currentPage + 1} image={arrowRight} />
      </div>
    );
  }
  return <div />;
}

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.totalResults / state[state.section]),
    detailsTab: state.detailsTab,
    currentPage: state.UIpage,
  }
);

export default connect(mapStateToProps, null)(Pagination);

Pagination.propTypes = {
  totalPages: PropTypes.number,
  detailsTab: PropTypes.bool,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  detailsTab: false,
  totalPages: 1,
  currentPage: 1,
};
