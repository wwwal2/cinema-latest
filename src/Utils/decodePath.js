export default (path) => {
  const urlParams = new URLSearchParams(path);
  const allEntries = [];
  for (const entry of urlParams.entries()) {
    allEntries.push(entry);
  }
  const urlObject = Object.fromEntries(allEntries);
  return urlObject;
};
