import * as types from "../constants/jobConstants";
import api from "../api";
// import { alertActions } from "./alertActions";

const submitJobAd = (formData) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_JOB_AD_REQUEST, payload: null });
  try {
    const res = await api.post("/jobs/employer/submit", {
      formData,
    });
    dispatch({ type: types.SUBMIT_JOB_AD_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.SUBMIT_JOB_AD_FAILURE, payload: error });
  }
};

const updateEmployerInfo = (formData) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_EMPLOYER_DETAILS_REQUEST, payload: null });
  try {
    const res = await api.post("/users/employer", {
      formData,
    });
    dispatch({ type: types.SUBMIT_EMPLOYER_DETAILS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.SUBMIT_EMPLOYER_DETAILS_FAILURE, payload: error });
  }
};

const getJobs = () => async (dispatch) => {
  dispatch({type: types.GET_ALL_JOBS_REQUEST, payload:null})
  try {
    const res = await api.get("/jobs")
    dispatch({type: types.GET_ALL_JOBS_SUCCESS, payload: res.data.data})
  } catch (error) {
    dispatch({type: types.GET_ALL_JOBS_FAILURE, payload:null})
  }
}

export const jobActions = {
  submitJobAd,
  updateEmployerInfo, 
  getJobs
};
