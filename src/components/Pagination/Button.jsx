import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUIPageNum, update } from '../../redux/actions';


import pagination from './Pagination.scss';

function Button(props) {
  const {
    page,
    btnClass,
    addUIPageNum,
    update,
    disabled,
  } = props;

  const changePage = (value) => {
    addUIPageNum(value);
    update();
  };

  return (
    <a
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
    </a>
  );
}

export default connect(null, { addUIPageNum, update })(Button);

Button.propTypes = {
  page: PropTypes.node,
  btnClass: PropTypes.string,
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  page: 0,
  btnClass: '',
  addUIPageNum: () => { },
  update: () => { },
  disabled: false,
};
