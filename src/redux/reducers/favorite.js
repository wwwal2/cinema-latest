import { toggleFavorite } from '../../Utils';
import { TOGGLE_FAVORITE } from '../../constants';
import defaultOptions from '../../defaultOptions';

const initialState = defaultOptions.favorite;

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
};
