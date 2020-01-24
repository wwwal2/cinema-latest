import {
  TEST,
  TEST2,
  ADDRATING,
  ADDGENRE,
  ADDYEAR,
  UPDATE,
  RESET,
} from '../constants';

const test = (payload) => ({ type: TEST, payload });
const test2 = (payload) => ({ type: TEST2, payload });
const addRating = (payload) => ({ type: ADDRATING, payload });
const addGenre = (payload) => ({ type: ADDGENRE, payload });
const addYear = (payload) => ({ type: ADDYEAR, payload });
const update = () => ({ type: UPDATE });
const reset = () => ({ type: RESET });

export {
  test,
  test2,
  addRating,
  addGenre,
  addYear,
  update,
  reset,
};
