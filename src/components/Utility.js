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

  static split(total) {
    const elements = [];
    for (let i = 2; i <= total; i += 1) {
      elements.push(i);
    }
    return elements;
  }

  static paginationShape(total, current, length) {
    let result = this.split(total - 1);
    if (current + length / 2 < total) {
      result = result.slice(0, current + 2);
      result.push('...');
    }
    if (current - length / 2 > 1) {
      result = result.slice(current - 3, result.length);
      result.unshift('...');
    }
    result.unshift(1);
    result.push(total);
    return result;
  }
}
