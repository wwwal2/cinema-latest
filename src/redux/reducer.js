import defaultOptions from '../defaultOptions';
import {
  TEST,
  TEST2,
  ADDRATING,
  ADDGENRE,
  ADDYEAR,
  UPDATE,
  RESET,
} from '../constants';

const initialState = defaultOptions;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        storeTest: action.payload,
      };
    case TEST2:
      return {
        ...state,
        storeTest: action.payload,
      };
    case ADDRATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ADDGENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ADDYEAR:
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
        updateCounter: state.updateCounter,
      };
    default:
      return state;
  }
}
