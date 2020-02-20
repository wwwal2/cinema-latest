import { saveSettings } from '../../components/Utils';
import { CHANGE_CARD_NUM, RESET_OPTIONS } from '../../constants';

const initialState = {
  main: 8,
  popular: 12,
  favorite: 4,
  search: 20,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CARD_NUM:
      saveSettings('cardsNum', state, state[action.target] + action.payload, action.target);

      if (action.distance <= 0) {
        return state;
      }
      return {
        ...state,
        [action.target]: state[action.target] + action.payload,
      };
    case RESET_OPTIONS:
      saveSettings('cardsNum', initialState);
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
