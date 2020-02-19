import { ADD_DETAILS_ID } from '../../constants';

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_DETAILS_ID:
      return {
        ...state,
        detailsId: action.payload,
      };
    default:
      return state;
  }
};
