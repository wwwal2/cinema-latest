import { saveSettings } from '../../Utils';
import defaultOptions from '../../defaultOptions';

import {
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  RESET_FILTERS,
  ADD_URL_DATA,
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
    case ADD_URL_DATA:
      // saveSettings('movie', initialState);
      const { year, genre, rating } = action.payload;
      return {
        ...state,
        year,
        genre,
        rating,
      };

    default:
      return state;
  }
};
