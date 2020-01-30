export default class Utility {
  static numberValidation(max, min, num) {
    return (num <= max && num >= min);
  }

  static onlyNumbers(key) {
    return (/^\d+$/.test(key) || key === '');
  }

  static calculateLayout(UIpage, cardLayout, apiResultsPerPage) {
    // totalResults
    // const lastPageCards = totalResults % apiResultsPerPage;
    // const totalApiPages = Math.ceil(totalResults / apiResultsPerPage);
    const endResult = UIpage * cardLayout;
    const startResult = endResult - cardLayout;

    const startPage = Math.floor(startResult / apiResultsPerPage) + 1;
    const endPage = Math.floor(endResult / apiResultsPerPage) + 1;

    const startRes = ((startResult / apiResultsPerPage) % 1) * apiResultsPerPage;
    const endRes = ((endResult / apiResultsPerPage) % 1) * apiResultsPerPage;

    return {
      startPage,
      startRes,
      endPage,
      endRes,
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

  static paginationShape(total, current, sideLength) {
    let result = this.split(total - 1);
    // cut right
    if (current + sideLength < total - 1) {
      result = result.slice(0, current - 2 + sideLength);
      result.push('...');
    }
    // cut left
    if (current - sideLength > 2) {
      result = result.slice(current - sideLength - 1, result.length);
      result.unshift('...');
    }
    // add limits
    result.unshift(1);
    result.push(total);
    return result;
  }
}
