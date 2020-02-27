export default (object) => {
  const {
    section,
    page,
    cardsNum,
    query,
  } = object;

  switch (object.section) {
    case 'main':
      return object;

    case 'popular':
      return {
        section,
        page,
        cardsNum,
      };

    case 'favorite':
      return {
        section,
        cardsNum,
      };

    case 'search':
      return {
        section,
        page,
        cardsNum,
        query,
      };

    default:
      break;
  }
};
