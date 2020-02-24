export default (status) => {
  const keys = Object.keys(status);
  const values = Object.values(status);
  const urlPath = values.reduce((acc, item, index) => {
    if (item === ' ') {
      return acc;
    }
    return `${acc}&${keys[index]}=${encodeURIComponent(item)}`;
  }, 'status?');
  const cutUrl = urlPath.replace('&', '');

  return cutUrl;
};
