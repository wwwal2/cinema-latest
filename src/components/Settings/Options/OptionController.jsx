import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cx from 'classnames';
import settingsStyles from '../settingsStyles.css';

import * as actions from '../../../redux/actions';
import {
  // defaultCardsNum,
  maxCardsNum,
  minCardsNum,
  changeStep,
} from '../../../constants';

function OptionsController(props) {
  // function handleChange(direction, distance) {
  //   if (distance <= 0) {
  //     return;
  //   }
  //   this.setState((state) => ({
  //     cardsNum: state.cardsNum + direction,
  //   }));
  // }

  const {
    name,
    action,
    cards,
    changeCardNum,
  } = props;

  return (
    <div className={settingsStyles.flex}>
      <div className="label">{name}</div>
      <i
        className={cx(settingsStyles.arrow, settingsStyles.left)}
        onClick={
          () => changeCardNum(-changeStep, action.toLowerCase(), cards[action] - minCardsNum)
        }
      />
      <div className="value">
        {cards[action]}
      </div>
      <i
        className={cx(settingsStyles.arrow, settingsStyles.right)}
        onClick={
          () => changeCardNum(changeStep, action.toLowerCase(), (maxCardsNum - cards[action]))
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    cards: {
      Main: state.main,
      Popular: state.popular,
      Favorite: state.favorite,
    },
  }
);

const mapDispatchToProps = (dispatch) => {
  const { changeCardNum } = bindActionCreators(actions, dispatch);
  return {
    changeCardNum: (payload, target, distance) => changeCardNum(payload, target, distance),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsController);

OptionsController.propTypes = {
  name: PropTypes.string,
  action: PropTypes.string,
  cards: PropTypes.object,
  changeCardNum: PropTypes.func,
};

OptionsController.defaultProps = {
  name: 'Controller',
  action: '',
  cards: {},
  changeCardNum: () => { },
};
