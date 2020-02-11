import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cx from 'classnames';
import options from './OptionsPayload.scss';

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
    <div className={options.container}>
      <div className={options.label}>{label}</div>
      <div className={options.blockContainer}>
        <i
          className={cx(options.arrow, options.left)}
          onClick={
            () => changePayloadNum(-changeStep, target, allControllers[target] - minCardsNum)
          }
        />
        <div className={options.value}>
          {allControllers[target]}
        </div>
        <i
          className={cx(options.arrow, options.right)}
          onClick={
            () => changePayloadNum(changeStep, target, maxCardsNum - allControllers[target])
          }
        />
      </div>
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
