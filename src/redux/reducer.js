const initialState = {
  storeTest: 'empty',
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
    default:
      return state;
  }
}
