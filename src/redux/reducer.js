const initialState = {
  storeTest: 'empty',
  rating: 'empty',
  genre: 'empty',
  year: 'empty',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        storeTest: action.payload,
      };
    case 'TEST2':
      return {
        ...state,
        storeTest: action.payload,
      };
    case 'ADDRATING':
      return {
        ...state,
        genre: action.payload,
      };
    case 'ADDGENRE':
      return {
        ...state,
        rating: action.payload,
      };
    case 'ADDYEAR':
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
}
