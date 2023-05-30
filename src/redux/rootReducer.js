import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import analysis from "./reducers/analysisReducer";

const rootReducer = combineReducers({
  userReducer,
  analysis,
});

export default rootReducer;
