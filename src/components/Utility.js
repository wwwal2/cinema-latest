export default class Utility {
  static numberValidation(max, min, num) {
    return (num <= max && num >= min);
  }

  static onlyNumbers(key) {
    return (/^\d+$/.test(key) || key === '');
  }

  static calculateLayout(UIpage, cardLayout, apiResultsNum, totalResults) {
    const lastPageResult = totalResults % apiResultsNum;
    const totalApiPages = Math.ceil(totalResults / apiResultsNum);

    const endPoint = Math.round((((UIpage * cardLayout) / apiResultsNum) % 1) * 10) / 10;
    const startPoint = Math.round((endPoint - cardLayout / apiResultsNum) * 10) / 10;
    const endPage = Math.ceil((UIpage * cardLayout) / apiResultsNum);
    const lastPageStartPoint = (lastPageResult - (lastPageResult % cardLayout)) / apiResultsNum;
    const fit = apiResultsNum * endPoint - cardLayout;


    if (endPoint === 0) {
      return {
        page: totalApiPages,
        startPoint: lastPageStartPoint,
        endPoint: 1,
      };
    }

    if (fit < 0) {
      return {
        startPage: endPage - 1,
        startPoint: fit / apiResultsNum + 1,
        endPage,
        endPoint,
      };
    }

    return {
      page: endPage,
      startPoint,
      endPoint,
    };
  }

  static codeGenre(genreName, tableOfGenres) {
    return tableOfGenres.find((genre) => genre.name === genreName).id;
  }
}
