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
} from '../constants';

export const test = (payload) => ({ type: TEST, payload });
export const test2 = (payload) => ({ type: TEST_2, payload });
export const addRating = (payload) => ({ type: ADD_RATING, payload });
export const addGenre = (payload) => ({ type: ADD_GENRE, payload });
export const addYear = (payload) => ({ type: ADD_YEAR, payload });
export const addAllGenres = (payload) => ({ type: ADD_ALL_GENRES, payload });
export const addResults = (payload) => ({ type: ADD_RESULTS, payload });
export const addUIPageNum = (payload) => ({ type: ADD_UI_PAGE_NUM, payload });
export const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload });
export const addDetailsId = (payload) => ({ type: ADD_DETAILS_ID, payload });

export const update = () => ({ type: UPDATE });
export const reset = () => ({ type: RESET });
export const changePayloadNum = (payload, target, distance) => (
  {
    type: CHANGE_CARD_NUM,
    payload,
    target,
    distance,
  }
);
