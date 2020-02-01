import Utility from '../Utility';
import { apiResultsPerPage } from '../../constants';
import Request from './Request';

const request = new Request();

export default async (args) => {
  const {
    main,
    UIpage,
    year,
    rating,
    genre,
    allGenres,
  } = args;

  const layout = Utility.calculateLayout(UIpage, main, apiResultsPerPage);
  if (layout.startPage === layout.endPage) {
    const data = await request.getMovies(
      layout.startPage,
      Number(year),
      Number(rating),
      Utility.codeGenre(genre, allGenres),
    );
    return {
      items: data.results.slice(layout.startRes, layout.endRes),
      totalResults: data.total_results,
    };
  }
  const page1 = await request.getMovies(
    layout.startPage,
    Number(year),
    Number(rating),
    Utility.codeGenre(genre, allGenres),
  );

  const page2 = await request.getMovies(
    layout.endPage,
    Number(year),
    Number(rating),
    Utility.codeGenre(genre, allGenres),
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
