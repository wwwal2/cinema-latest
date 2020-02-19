import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkLimit } from '../../Utils';

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
    <section className={options.container}>
      <label className={options.label}>{label}</label>
      <div className={options.blockContainer}>
        <i
          className={checkLimit(allControllers[target], minCardsNum, 'left')}
          onClick={
            () => changePayloadNum(-changeStep, target, allControllers[target] - minCardsNum)
          }
        />
        <div className={options.value}>
          {allControllers[target]}
        </div>
        <i
          className={checkLimit(allControllers[target], maxCardsNum, 'right')}
          onClick={
            () => changePayloadNum(changeStep, target, maxCardsNum - allControllers[target])
          }
        />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => (
  {
    allControllers: {
      main: state.cardsNum.main,
      popular: state.cardsNum.popular,
      favorite: state.cardsNum.favorite,
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
