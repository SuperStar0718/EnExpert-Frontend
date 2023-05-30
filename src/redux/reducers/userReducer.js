import {
  SET_USER_COLORS,
  SET_USER_RESTRICTIONS,
  SET_BAR_COLORS,
  SET_LIVE_PAGE_CONFIG,
} from "../types/generalTypes";

const initialState = {
  colors: null,
  barColors: null,
  restrictions: null,
  livePageConfig: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_COLORS:
      return {
        ...state,
        colors: payload,
      };
    case SET_USER_RESTRICTIONS:
      return {
        ...state,
        restrictions: payload,
      };

    case SET_BAR_COLORS:
      return {
        ...state,
        barColors: payload,
      };
    case SET_LIVE_PAGE_CONFIG:
      return {
        ...state,
        livePageConfig: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
