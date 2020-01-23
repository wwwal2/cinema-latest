import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import filtersStyles from './filtersStyles.css';
import * as actions from '../../../redux/actions';

function TopButtons(props) {
  const {
    apply,
    reset,
    update,
  } = props;

  return (
    <div>
      <div className={filtersStyles.applyReset}>
        <button type="button" onClick={() => update()}>
          {apply}
        </button>
        <button type="button">
          {reset}
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { update } = bindActionCreators(actions, dispatch);
  return {
    update: () => update(),
  };
};

export default connect(null, mapDispatchToProps)(TopButtons);

TopButtons.propTypes = {
  apply: PropTypes.string,
  reset: PropTypes.string,
  update: PropTypes.func,
};

TopButtons.defaultProps = {
  apply: 'Apply',
  reset: 'Reset',
  update: () => { },
};
