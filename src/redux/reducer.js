import defaultOptions from '../defaultOptions';
import {
  TEST,
  TEST_2,
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  UPDATE,
  RESET,
  CHANGE_CARD_NUM,
} from '../constants';

const initialState = defaultOptions;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        storeTest: action.payload,
      };
    case TEST_2:
      return {
        ...state,
        storeTest: action.payload,
      };
    case ADD_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ADD_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ADD_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case UPDATE:
      return {
        ...state,
        updateCounter: state.updateCounter + 1,
      };
    case RESET:
      return {
        ...defaultOptions,
      };
    case CHANGE_CARD_NUM:
      console.log(action);
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
}
