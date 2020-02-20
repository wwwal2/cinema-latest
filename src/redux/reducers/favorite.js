import { toggleFavorite } from '../../components/Utils';
import { TOGGLE_FAVORITE } from '../../constants';

const initFavorite = {
  favoriteMovies: [],
  favoriteIds: [],
};

export default (state = initFavorite, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
};
