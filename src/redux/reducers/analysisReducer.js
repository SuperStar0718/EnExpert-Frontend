import { GET_ANALYSIS_DATA } from "../types/generalTypes";

const initialState = {
  analysis: null,
  electricity: ["Total"],
  water: ["Total"],
  heat: ["Total"],
  gas: ["Total"],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ANALYSIS_DATA:
      return {
        ...state,
        analysis: payload,
      };
    case "UPDATE_ELECTRICITY":
      return {
        ...state,
        electricity: payload,
      };
    case "CLEAR_ELECTRICITY":
      return {
        ...state,
        electricity: [],
      };
    default:
      return state;
  }
};

export default productReducer;
