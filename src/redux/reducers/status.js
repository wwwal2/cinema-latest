import {
  ADD_RESULTS,
  ADD_UI_PAGE_NUM,
  DEFINE_SECTION,
  UPDATE,
  SHOW_DETAILS,
} from '../../constants';

const initStatus = {
  totalResults: 0,
  UIpage: 1,
  updateCounter: 0,
  detailsTab: false,
  section: 'main',
};

export default (state = initStatus, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      return {
        ...state,
        totalResults: action.payload,
      };
    case ADD_UI_PAGE_NUM:
      return {
        ...state,
        UIpage: action.payload,
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
    default:
      return state;
  }
};
