import React from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

// import * as actions from '../../redux/actions';

import Utility from '../Utility';
import Button from './Button';

import pagination from './pagination.css';

export default function PaginationBoard(props) {
  const { totalPages, currentPage, boardLength } = props;

  const assemble = (total, current) => {
    return Utility.paginationShape(total, current, boardLength).map((elem, index) => {
      if (elem === current) {
        return <Button page={elem} key={`pug${index}`} btnClass="currentPage" disabled={false} />;
      }
      if (elem === '...') {
        return <Button page={elem} key={`pug${index}`} btnClass="dots" disabled />;
      }
      return <Button page={elem} key={`pug${index}`} btnClass="button" disabled={false} />;
    });
  };

  return (
    <div className={pagination.boardContainer}>
      {assemble(totalPages, currentPage)}
    </div>
  );
}

PaginationBoard.propTypes = {
  boardLength: PropTypes.number,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

PaginationBoard.defaultProps = {
  boardLength: 6,
  totalPages: 0,
  currentPage: 0,
};
