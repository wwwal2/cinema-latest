import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import settings from './Settings.scss';
import * as actions from '../../redux/actions';

function Buttons(props) {
  const { reset, update, addUIPageNum } = props;

  const apply = () => {
    addUIPageNum(1);
    update();
  };

  const doReset = () => {
    addUIPageNum(1);
    reset();
    update();
  };

  return (
    <section className={settings.actionBtnContainer}>
      <Link to="/" className={settings.applyLink}>
        <button
          type="button"
          onClick={apply}
          className={`${settings.actionBtn} ${settings.apply}`}
        >
          Apply
        </button>
      </Link>

      <Link to="/" className={settings.resetLink}>
        <button
          type="button"
          onClick={doReset}
          className={`${settings.actionBtn} ${settings.reset}`}
        >
          Reset
        </button>
      </Link>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { update, reset, addUIPageNum } = bindActionCreators(actions, dispatch);
  return {
    update: () => update(),
    reset: () => reset(),
    addUIPageNum: (payload) => addUIPageNum(payload),
  };
};

export default connect(null, mapDispatchToProps)(Buttons);

Buttons.propTypes = {
  addUIPageNum: PropTypes.func,
  update: PropTypes.func,
  reset: PropTypes.func,
};

Buttons.defaultProps = {
  addUIPageNum: () => { },
  update: () => { },
  reset: () => { },
};
