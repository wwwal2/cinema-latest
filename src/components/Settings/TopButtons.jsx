import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import filtersStyles from './Filters/FilterPayload.css';
import * as actions from '../../redux/actions';

function TopButtons(props) {
  const {
    reset,
    update,
  } = props;

  return (
    <div>
      <div className={filtersStyles.applyReset}>
        <button type="button" onClick={() => update()}>
          Apply
        </button>
        <button type="button" onClick={() => reset()}>
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
