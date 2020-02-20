import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addUIPageNum, update } from '../../redux/actions';
import pagination from './Pagination.scss';


function Arrow(props) {
  const {
    addUIPageNum,
    update,
    image,
    page,
  } = props;

  const changePage = (myPage) => {
    addUIPageNum(myPage);
    update();
  };

  return (
    <Link
      to={`/${page}`}
      key={page}
      className={pagination.arrow}
    >
      <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
    </Link>
  );
}

export default connect(null, { addUIPageNum, update })(Arrow);

Arrow.propTypes = {
  page: PropTypes.number,
  image: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
};

Arrow.defaultProps = {
  page: 0,
  image: '',
  addUIPageNum: () => { },
  update: () => { },
};
