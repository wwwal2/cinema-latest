export default (allSettings, value, option) => {
  if (value) {
    allSettings = {
      ...allSettings,
      [option]: value,
    };
  }
  localStorage.setItem('Cinema', JSON.stringify(allSettings));
};
