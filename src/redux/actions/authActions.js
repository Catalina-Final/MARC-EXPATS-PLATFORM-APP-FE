import * as types from "../constants/authConstants";
import api from "../api";
// import { alertActions } from "./alert.actions";

const register = (surname, firstName, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", {
      surname,
      firstName,
      email,
      password,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

export const authActions = {
  register,
};
