import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addUIPageNum, update } from '../../redux/actions';
import { calculatePath } from '../../Utils';

import pagination from './Pagination.scss';


function Arrow(props) {
  const {
    addUIPageNum,
    update,
    image,
    page,
    briefStatus,
  } = props;

  const changePage = (myPage) => {
    addUIPageNum(myPage);
    update();
  };

  return (
    <Link
      to={calculatePath(briefStatus)}
      key={page}
      className={pagination.arrow}
    >
      <img alt="arrow" src={image} onClick={() => changePage(page)} className={pagination.arrow} />
    </Link>
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
  }
);
export default connect(mapStateToProps, { addUIPageNum, update })(Arrow);

Arrow.propTypes = {
  briefStatus: PropTypes.object,
  page: PropTypes.number,
  image: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
};

Arrow.defaultProps = {
  briefStatus: {},
  page: 0,
  image: '',
  addUIPageNum: () => { },
  update: () => { },
};
