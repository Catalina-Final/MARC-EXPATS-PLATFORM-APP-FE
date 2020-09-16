import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  alert: alertReducer
});
