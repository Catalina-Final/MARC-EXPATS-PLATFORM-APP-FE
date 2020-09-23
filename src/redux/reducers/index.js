import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import cvReducer from "./cvReducer";
import jobReducer from "./jobReducer";
import employerReducer from "./employerReducer";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  alert: alertReducer,
  cv: cvReducer,
  job: jobReducer,
  employer: employerReducer,
});
