import { sections, apiResultsPerPage } from '../../constants';
import { codeGenre, calculateRequestProps } from '../Utils';
import getItems from './getItems';

export default async (props) => {
  const {
    cardsNum: {
      main,
      popular,
      favorite,
      search,
    },
    movie: { year, rating, genre },
    status: { UIpage, section },
    allGenres: { allGenres },
    searchQuery: { searchQuery },
    favoriteMovies,
  } = props;
  switch (section) {
    case sections.main:
      const mainPayload = await getItems(
        'getMovies',
        [
          year,
          codeGenre(genre, allGenres),
          rating,
        ],
        main,
        UIpage,
      );
      return mainPayload;

    case sections.popular:
      const popularPayload = await getItems(
        'getPopular',
        [],
        popular,
        UIpage,
      );
      return popularPayload;

    case sections.search:
      const searchPayload = await getItems(
        'findMovie',
        [searchQuery],
        search,
        UIpage,
      );
      return searchPayload;

    case sections.favorite:
      const layout = calculateRequestProps(
        UIpage,
        favorite,
        apiResultsPerPage,
      );
      return {
        items: favoriteMovies.slice(
          layout.startRes,
          layout.startRes + favorite,
        ),
        totalResults: favoriteMovies.length,
      };
    default:
      return 'no props available';
  }
};
