import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUIPageNum, update } from '../../redux/actions';
import { calculatePath } from '../../Utils';


import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    addUIPageNum,
    update,
    disabled,
    briefStatus,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
    update();
  };

  return (
    <Link
      to={calculatePath(briefStatus)}
      key={page}
    >
      <button
        type="button"
        className={pagination[btnClass]}
        onClick={() => changePage(page)}
        disabled={disabled}
      >
        {page}
      </button>
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

export default connect(mapStateToProps, { addUIPageNum, update })(Button);

Button.propTypes = {
  briefStatus: PropTypes.object,
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  briefStatus: {},
  page: 0,
  btnClass: '',
  addUIPageNum: () => { },
  update: () => { },
  disabled: false,
};
