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

const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT, payload: null });
};

const loginFacebookRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/facebook", { access_token });
    const name = res.data.data.user.firstName;
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
    const name = res.data.data.user.firstName;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_GOOGLE_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.LOGIN_GOOGLE_FAILURE, payload: error });
  }
};

const verifyEmail = (code) => async (dispatch) => {
  dispatch({ type: types.VERIFY_EMAIL_REQUEST, payload: null });
  try {
    const res = await api.post("/users/verify_email", { code });
    dispatch({ type: types.VERIFY_EMAIL_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.firstName;
    dispatch(
      alertActions.setAlert(
        `Welcome, ${name}! Your email address has been verified.`,
        "success"
      )
    );
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.VERIFY_EMAIL_FAILURE, payload: error });
  }
};

const setRedirectTo = (redirectTo) => ({
  type: types.SET_REDIRECT_TO,
  payload: redirectTo,
});

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

export const authActions = {
  setRedirectTo,
  loginRequest,
  loginFacebookRequest,
  loginGoogleRequest,
  verifyEmail,
  logout,
  getCurrentUser
};
