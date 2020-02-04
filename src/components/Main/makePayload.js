import { sections, apiResultsPerPage } from '../../constants';
import { codeGenre, calculateRequestProps } from '../Utils';
import getItems from './getItems';

export default async (props) => {
  const {
    year,
    rating,
    genre,
    allGenres,
    main,
    popular,
    favorite,
    search,
    UIpage,
    query,
    favoriteMovies,
  } = props;
  switch (props.section) {
    case sections.main:
      const mainPayload = await getItems(
        'getMovies',
        [
          year,
          rating,
          codeGenre(genre, allGenres),
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
        [query],
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
