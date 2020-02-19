import { combineReducers } from 'redux';
// import { loadSettings } from '../components/Utils';
import * as reducers from './reducers';

// import defaultOptions from '../defaultOptions';

// const initialState = loadSettings()
//   ? { ...defaultOptions, ...loadSettings() }
//   : defaultOptions;

export default combineReducers({
  ...reducers,
  // initialState,
});
