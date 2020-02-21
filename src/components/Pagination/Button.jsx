import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUIPageNum, update } from '../../redux/actions';
import { routes } from '../../constants';

import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    cardsNum,
    btnClass,
    addUIPageNum,
    update,
    disabled,
    section,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
    update();
  };

  return (
    <Link
      to={`${routes[section]}/${page}/${cardsNum}`}
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
    section: state.status.section,
    cardsNum: state.cardsNum[state.status.section],
  }
);

export default connect(mapStateToProps, { addUIPageNum, update })(Button);

Button.propTypes = {
  cardsNum: PropTypes.number,
  section: PropTypes.string,
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  cardsNum: 0,
  section: '',
  page: 0,
  btnClass: '',
  addUIPageNum: () => { },
  update: () => { },
  disabled: false,
};
