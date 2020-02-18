import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';
// import { allGenres, movie } from './redux/reducers';
import App from './App';

// const rootReducer = combineReducers({
//   allGenres,
//   year: movie,
//   genre: movie,
//   rating: movie,
//   section: reducer,
//   totalResults: reducer,
//   requestPage: reducer,
//   UIpage: reducer,
//   detailsId: reducer,
//   updateCounter: reducer,
//   query: '',
//   detailsTab: reducer,
//   favoriteMovies: reducer,
//   favoriteIds: reducer,
//   main: reducer,
//   popular: reducer,
//   favorite: reducer,
//   search: reducer,
// });

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
