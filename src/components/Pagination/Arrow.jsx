import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addUIPageNum, update } from '../../redux/actions';
import { routes } from '../../constants';

import pagination from './Pagination.scss';


function Arrow(props) {
  const {
    cardsNum,
    section,
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
      to={`${routes[section]}/${page}/${cardsNum}`}
      key={page}
      className={pagination.arrow}
    >
      <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
    </Link>
  );
}

const mapStateToProps = (state) => (
  {
    section: state.status.section,
    cardsNum: state.cardsNum[state.status.section],
  }
);
export default connect(mapStateToProps, { addUIPageNum, update })(Arrow);

Arrow.propTypes = {
  cardsNum: PropTypes.number,
  section: PropTypes.string,
  page: PropTypes.number,
  image: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
};

Arrow.defaultProps = {
  cardsNum: 0,
  section: '',
  page: 0,
  image: '',
  addUIPageNum: () => { },
  update: () => { },
};
