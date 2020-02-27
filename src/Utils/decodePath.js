export default (path) => {
  const urlParams = new URLSearchParams(path);
  const allEntries = [];
  for (const entry of urlParams.entries()) {
    allEntries.push(entry);
  }
  const urlObject = Object.fromEntries(allEntries);
  console.log('urlObject:', urlObject);
  return urlObject;
};
