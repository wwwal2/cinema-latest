import Utility from '../Utility';
import { apiResultsPerPage } from '../../constants';
import Request from './Request';

const request = new Request();

export default async (args) => {
  const {
    readYear,
    readRating,
    readGenre,
    allGenres,
    main,
    UIpage,
  } = args;

  const layout = Utility.calculateLayout(UIpage, main, apiResultsPerPage);
  if (layout.startPage === layout.endPage) {
    const data = await request.getMovies(
      layout.startPage,
      Number(readYear),
      Number(readRating),
      Utility.codeGenre(readGenre, allGenres),
    );
    return {
      items: data.results.slice(layout.startRes, layout.endRes),
      totalResults: data.total_results,
    };
  }
  const page1 = await request.getMovies(
    layout.startPage,
    Number(readYear),
    Number(readRating),
    Utility.codeGenre(readGenre, allGenres),
  );

  const page2 = await request.getMovies(
    layout.endPage,
    Number(readYear),
    Number(readRating),
    Utility.codeGenre(readGenre, allGenres),
  );
  const payload1 = page1.results.slice(
    layout.startRes,
    page1.results.length,
  );
  const payload2 = page2.results.slice(
    0,
    layout.endRes,
  );

  return {
    items: payload1.concat(payload2),
    totalResults: page1.total_results,
  };
};
