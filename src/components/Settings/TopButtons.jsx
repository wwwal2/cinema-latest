import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import settings from './Settings.scss';
import * as actions from '../../redux/actions';

function TopButtons(props) {
  const {
    reset,
    update,
  } = props;

  return (
    <div>
      <div className={settings.actionBtnContainer}>
        <button
          type="button"
          onClick={() => update()}
          className={`${settings.actionBtn} ${settings.apply}`}
        >
          Apply
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className={`${settings.actionBtn} ${settings.reset}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { update, reset } = bindActionCreators(actions, dispatch);
  return {
    update: () => update(),
    reset: () => reset(),
  };
};

export default connect(null, mapDispatchToProps)(TopButtons);

TopButtons.propTypes = {
  update: PropTypes.func,
  reset: PropTypes.func,
};

TopButtons.defaultProps = {
  update: () => { },
  reset: () => { },
};
