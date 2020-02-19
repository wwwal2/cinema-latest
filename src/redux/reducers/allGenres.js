import { ADD_ALL_GENRES } from '../../constants';


export default (state = [], action) => {
  switch (action.type) {
    case ADD_ALL_GENRES:
      console.log('action.payload:', action.payload);
      return action.payload;
    default:
      return state;
  }
};
