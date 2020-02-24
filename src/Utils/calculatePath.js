export default (status, movie) => {
  const urlArray = status.concat(Object.values(movie));
  // const variables = urlArray.map((item) => {
  //   if (item === ' ') {
  //     return 'blanc';
  //   }
  //   return item;
  // });
  const urlPath = urlArray.reduce((acc, item) => {
    if (item === ' ') {
      return `${acc}/blanc`;
    }
    return `${acc}/${encodeURIComponent(item)}`;
  }, '');
  return urlPath;
};
