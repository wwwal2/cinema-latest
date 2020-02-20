export default (stateName, settings, value, option) => {
  const allSettings = JSON.parse(localStorage.getItem('Cinema'));
  const newSettings = {
    ...allSettings,
    [stateName]: {
      ...settings,
      [option]: value,
    },
  };
  localStorage.setItem('Cinema', JSON.stringify(newSettings));
};
