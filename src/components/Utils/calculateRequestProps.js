export default (UIpage, cardsPerPage, apiResultsPerPage) => {
  const endResult = UIpage * cardsPerPage;
  const startResult = endResult - cardsPerPage;

  const startPage = Math.floor(startResult / apiResultsPerPage) + 1;
  const endPage = Math.floor(endResult / apiResultsPerPage) + 1;

  const startRes = ((startResult / apiResultsPerPage) % 1) * apiResultsPerPage;
  const endRes = ((endResult / apiResultsPerPage) % 1) * apiResultsPerPage;
  // console.log('startPage:', startPage, Math.round(startRes));
  // console.log('endPage:', endPage, Math.round(endRes));
  return {
    startPage,
    startRes: Math.round(startRes),
    endPage,
    endRes: Math.round(endRes),
  };
};
