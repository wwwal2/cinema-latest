import { checkFavorite } from '../../components/Utils';
import { ADD_FAVORITE } from '../../constants';

const initFavorite = {
  favoriteMovies: [],
  favoriteIds: [],
};

export default (state = initFavorite, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
