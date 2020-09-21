import * as types from "../constants/userConstants";
import api from "../api";
// import { alertActions } from "./alertActions";

const register = (surname, firstName, gender, email, password) => async (
  dispatch
) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", {
      surname,
      firstName,
      gender,
      email,
      password,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

export const userActions = {
    register,
}