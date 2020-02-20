export default (defaultOptions) => {
  const loaded = JSON.parse(localStorage.getItem('Cinema'));
  if (loaded) {
    return loaded;
  }
  return defaultOptions;
};
