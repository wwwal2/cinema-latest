import { getSaveData, saveSettings } from '../../components/Utils';
import { CHANGE_CARD_NUM } from '../../constants';

const initCardsNum = {
  main: 8,
  popular: 12,
  favorite: 4,
  search: 20,
};

export default (state = initCardsNum, action) => {
  switch (action.type) {
    case CHANGE_CARD_NUM:
      saveSettings(getSaveData(state), state[action.target] + action.payload, action.target);

      if (action.distance <= 0) {
        return state;
      }
      return {
        ...state,
        [action.target]: state[action.target] + action.payload,
      };
    default:
      return state;
  }
};
