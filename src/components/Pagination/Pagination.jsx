import React from 'react';
import arrowLeft from '../../../images/arr3.png';
import arrowRight from '../../../images/arr2.png';
import arrowHome from '../../../images/arr5.png';
import arrowLast from '../../../images/arr6.png';


// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

// import * as actions from '../../../redux/actions';

import pagiStyles from './pagiStyles.css';

export default function Pagination() {
  return (
    <div>
      <div className={pagiStyles.label}>
        Totall pages:
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
