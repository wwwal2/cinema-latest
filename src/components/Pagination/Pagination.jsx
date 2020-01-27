import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import arrowLeft from '../../../images/arr3.png';
import arrowRight from '../../../images/arr2.png';
import arrowHome from '../../../images/arr5.png';
import arrowLast from '../../../images/arr6.png';


import pagiStyles from './pagiStyles.css';

function Pagination(props) {
  const { totalPages } = props;
  return (
    <div>
      <div className={pagiStyles.label}>
        Total pages:
        {
          totalPages
        }
      </div>
      <div className={pagiStyles.pagination}>
        <img alt="arrow" src={arrowHome} />
        <img alt="arrow" src={arrowLeft} />
        <input type="text" placeholder="1" />
        <img alt="arrow" src={arrowRight} />
        <img alt="arrow" src={arrowLast} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    totalPages: Math.ceil(state.totalResults / state.main),
  }
);

const mapDispatchToProps = (dispatch) => {
  const { changePayloadNum } = bindActionCreators(actions, dispatch);
  return {
    changePayloadNum: (payload, target, distance) => changePayloadNum(payload, target, distance),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.propTypes = {
  totalPages: PropTypes.number,
};

Pagination.defaultProps = {
  totalPages: 0,
};
