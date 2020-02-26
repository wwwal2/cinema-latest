import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { checkSavedSettings } from './Utils';

import rootReducer from './redux/rootReducer';
import defaultOptions from './defaultOptions';

import App from './App';

const initialState = checkSavedSettings(defaultOptions);
const store = createStore(rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
