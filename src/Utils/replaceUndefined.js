export default (obj) => {
  return Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      obj[key] = ' ';
    }
  });
};
