import * as types from "../constants/jobConstants";
import api from "../api";
// import { alertActions } from "./alertActions";

const submitJobAd = (formData) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_JOB_AD_REQUEST, payload: null });
  try {
    const res = await api.post("/users/employer/job", {
      formData,
    });
    dispatch({ type: types.SUBMIT_JOB_AD_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.SUBMIT_JOB_AD_FAILURE, payload: error });
  }
};

export const jobActions = {
  submitJobAd,
};
