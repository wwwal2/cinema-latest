import {
  getSaveData,
  saveSettings,
} from '../../components/Utils';

import {
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  RESET_FILTERS,
} from '../../constants';

const initMovie = {
  year: ' ',
  genre: ' ',
  rating: ' ',
};

export default (state = initMovie, action) => {
  switch (action.type) {
    case ADD_RATING:
      saveSettings(getSaveData(state), action.payload, 'rating');
      return {
        ...state,
        rating: action.payload,
      };
    case ADD_YEAR:
      saveSettings(getSaveData(state), action.payload, 'year');
      return {
        ...state,
        year: action.payload,
      };
    case ADD_GENRE:
      saveSettings(getSaveData(state), action.payload, 'genre');
      return {
        ...state,
        genre: action.payload,
      };
    case RESET_FILTERS:
      // saveSettings(getSaveData(defaultOptions));
      return {
        ...initMovie,
      };
    default:
      return state;
  }
};
