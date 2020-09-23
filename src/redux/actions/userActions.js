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

const submitCv = (userId, cvId, jobId, recruiterId) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_CV_REQUEST, payload: null });
  try {
    const res = await api.post("/job/:id/submit", {
      userId,
      cvId,
      jobId,
      recruiterId,
    });
    dispatch({ type: types.SUBMIT_CV_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.SUBMIT_CV_FAILURE, payload: null });
  }
};

const getJobApps = (userId) => async (dispatch) => {
  dispatch({ type: types.GET_JOB_APPS_REQUEST, payload: null });
  try {
    const res = await api.get("/users/me/jobapps", { userId });
    dispatch({ type: types.GET_JOB_APPS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_JOB_APPS_FAILURE, payload: null });
  }
};

export const userActions = {
  register,
  submitCv,
  getJobApps,
};
