import { saveSettings } from '../../Utils';
import defaultOptions from '../../defaultOptions';

import {
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  RESET_FILTERS,
} from '../../constants';

const initialState = defaultOptions.movie;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING:
      saveSettings('movie', state, action.payload, 'rating');
      return {
        ...state,
        rating: action.payload,
      };
    case ADD_YEAR:
      saveSettings('movie', state, action.payload, 'year');
      return {
        ...state,
        year: action.payload,
      };
    case ADD_GENRE:
      saveSettings('movie', state, action.payload, 'genre');
      return {
        ...state,
        genre: action.payload,
      };
    case RESET_FILTERS:
      saveSettings('movie', initialState);
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
