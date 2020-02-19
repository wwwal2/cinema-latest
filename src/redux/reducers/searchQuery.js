import { ADD_QUERY } from '../../constants';


export default (state = [], action) => {
  switch (action.type) {
    case ADD_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
