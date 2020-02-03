export default (genreName, tableOfGenres) => {
  return tableOfGenres.find((genre) => genre.name === genreName).id;
};
