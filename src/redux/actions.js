import {
  TEST,
  TEST_2,
  ADD_RATING,
  ADD_GENRE,
  ADD_YEAR,
  ADD_RESULTS,
  UPDATE,
  RESET,
  CHANGE_CARD_NUM,
} from '../constants';

const test = (payload) => ({ type: TEST, payload });
const test2 = (payload) => ({ type: TEST_2, payload });
const addRating = (payload) => ({ type: ADD_RATING, payload });
const addGenre = (payload) => ({ type: ADD_GENRE, payload });
const addYear = (payload) => ({ type: ADD_YEAR, payload });
const addResults = (payload) => ({ type: ADD_RESULTS, payload });
const update = () => ({ type: UPDATE });
const reset = () => ({ type: RESET });
const changePayloadNum = (payload, target, distance) => (
  {
    type: CHANGE_CARD_NUM,
    payload,
    target,
    distance,
  }
);

export {
  test,
  test2,
  addRating,
  addGenre,
  addYear,
  addResults,
  update,
  reset,
  changePayloadNum,
};
