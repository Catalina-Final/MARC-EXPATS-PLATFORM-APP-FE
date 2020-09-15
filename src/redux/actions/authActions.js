import * as types from "../constants/authConstants";
import api from "../api";
import { alertActions } from "./alertActions";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    const name = res.data.data.user.firstName;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.access_token;
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const loginFacebookRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/facebook", { access_token });
    const name = res.data.data.user.name;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_FACEBOOK_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.LOGIN_FACEBOOK_FAILURE, payload: error });
  }
};

const loginGoogleRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_GOOGLE_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/google", { access_token });
    const name = res.data.data.user.name;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_GOOGLE_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.LOGIN_GOOGLE_FAILURE, payload: error });
  }
};

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

const setRedirectTo = (redirectTo) => ({
  type: types.SET_REDIRECT_TO,
  payload: redirectTo,
});

export const authActions = {
  register,
  setRedirectTo,
  loginRequest,
  loginFacebookRequest,
  loginGoogleRequest,
};
