import {
  ADD_RESULTS,
  ADD_UI_PAGE_NUM,
  DEFINE_SECTION,
  UPDATE,
  SHOW_DETAILS,
  ADD_URL_DATA,
} from '../../constants/actionTypes';
import defaultOptions from '../../defaultOptions';

const initialState = defaultOptions.status;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      return {
        ...state,
        totalResults: action.payload,
      };
    case ADD_UI_PAGE_NUM:
      return {
        ...state,
        uiPage: action.payload,
      };
    case DEFINE_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    case SHOW_DETAILS:
      return {
        ...state,
        detailsTab: action.payload,
      };
    case UPDATE:
      return {
        ...state,
        updateCounter: state.updateCounter + 1,
      };
    case ADD_URL_DATA:
      const { section, page } = action.payload;
      return {
        ...state,
        uiPage: Number(page) || state.uiPage,
        section: section || state.section,
      };
    default:
      return state;
  }
};
