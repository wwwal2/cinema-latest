import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cx from 'classnames';
import settingsStyles from './OptionsPayload.scss';

import * as actions from '../../../redux/actions';
import {
  maxCardsNum,
  minCardsNum,
  changeStep,
} from '../../../constants';

function OptionsController(props) {
  const {
    label,
    target,
    allControllers,
    changePayloadNum,
  } = props;

  return (
    <div className={settingsStyles.flex}>
      <div className="label">{label}</div>
      <i
        className={cx(settingsStyles.arrow, settingsStyles.left)}
        onClick={
          () => changePayloadNum(-changeStep, target, allControllers[target] - minCardsNum)
        }
      />
      <div className="value">
        {allControllers[target]}
      </div>
      <i
        className={cx(settingsStyles.arrow, settingsStyles.right)}
        onClick={
          () => changePayloadNum(changeStep, target, maxCardsNum - allControllers[target])
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    allControllers: {
      main: state.main,
      popular: state.popular,
      favorite: state.favorite,
    },
  }
);

const mapDispatchToProps = (dispatch) => {
  const { changePayloadNum } = bindActionCreators(actions, dispatch);
  return {
    changePayloadNum: (payload, target, distance) => changePayloadNum(payload, target, distance),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsController);

OptionsController.propTypes = {
  label: PropTypes.string,
  target: PropTypes.string,
  allControllers: PropTypes.object,
  changePayloadNum: PropTypes.func,
};

OptionsController.defaultProps = {
  label: 'Controller',
  target: '',
  allControllers: {},
  changePayloadNum: () => { },
};
