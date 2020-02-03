import {
  checkFavorite,
  getSaveData,
  saveSettings,
  loadSettings,
} from '../components/Utils';
import defaultOptions from '../defaultOptions';
import {
  TEST,
  TEST_2,
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  ADD_ALL_GENRES,
  ADD_RESULTS,
  ADD_UI_PAGE_NUM,
  ADD_FAVORITE,
  ADD_DETAILS_ID,
  UPDATE,
  RESET,
  CHANGE_CARD_NUM,
  DEFINE_SECTION,
} from '../constants';

const initialState = loadSettings()
  ? { ...defaultOptions, ...loadSettings() }
  : defaultOptions;

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
    case ADD_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    case ADD_RESULTS:
      return {
        ...state,
        totalResults: action.payload,
      };
    case ADD_UI_PAGE_NUM:
      return {
        ...state,
        UIpage: action.payload,
      };
    case DEFINE_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    case ADD_FAVORITE:
      const { payload } = action;

      if (checkFavorite(state.favoriteIds, payload.id)) {
        const index = state.favoriteIds.findIndex((id) => (id === payload.id));

        return {
          ...state,
          favoriteMovies: [
            ...state.favoriteMovies.slice(0, index), ...state.favoriteMovies.slice(index + 1),
          ],
          favoriteIds: [
            ...state.favoriteIds.slice(0, index), ...state.favoriteIds.slice(index + 1),
          ],
        };
      }
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
        favoriteIds: [...state.favoriteIds, payload.id],
      };
    case ADD_DETAILS_ID:
      return {
        ...state,
        detailsId: action.payload,
      };
    case UPDATE:
      return {
        ...state,
        updateCounter: state.updateCounter + 1,
      };
    case RESET:
      saveSettings(getSaveData(defaultOptions));
      return {
        ...defaultOptions,
        allGenres: state.allGenres,
      };
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
}
