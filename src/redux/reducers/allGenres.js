import { ADD_ALL_GENRES } from '../../constants';


export default (state = [], action) => {
  switch (action.type) {
    case ADD_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    default:
      return state;
  }
};
