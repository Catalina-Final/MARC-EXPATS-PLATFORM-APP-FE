import * as types from "../constants/jobConstants";
import api from "../api";
import { alertActions } from "./alertActions";

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
    dispatch({
      type: types.SUBMIT_EMPLOYER_DETAILS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.SUBMIT_EMPLOYER_DETAILS_FAILURE, payload: error });
  }
};

const getJobs = (
  pageNum = 1,
  limit = 9,
  ownerId = null,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_JOBS_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&title[$regex]=${query}&title[$options]=i`;
    }
    if (ownerId) {
      queryString = `${queryString}&author=${ownerId}`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/jobs?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({ type: types.GET_ALL_JOBS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_ALL_JOBS_FAILURE, payload: error });
  }
};

const getSingleJob = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_JOB_REQUEST, payload: null });
  try {
    const res = await api.get(`/jobs/${id}`);
    dispatch({ type: types.GET_SINGLE_JOB_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_JOB_FAILURE, payload: error });
  }
};

const getSingleJobWithApplicants = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_SINGLE_JOB_WITH_APPLICANTS_REQUEST,
    payload: null,
  });
  try {
    const res = await api.get(`/jobs/full/${id}`);
    dispatch({
      type: types.GET_SINGLE_JOB_WITH_APPLICANTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_SINGLE_JOB_WITH_APPLICANTS_FAILURE,
      payload: error,
    });
  }
};

// userId - accessToken
// jobId - params

const submitCv = (jobId) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_CV_TO_EMPLOYER_REQUEST, payload: null });
  try {
    const res = await api.post(`/jobs/${jobId}/submitcv`);
    dispatch({
      type: types.SUBMIT_CV_TO_EMPLOYER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.SUBMIT_CV_TO_EMPLOYER_FAILURE, payload: error });
  }
};

const deleteJob = (jobId) => async (dispatch) => {
  dispatch({ type: types.DELETE_JOB_REQUEST, payload: null });
  try {
    const res = await api.delete(`/jobs/${jobId}`);
    dispatch({
      type: types.DELETE_JOB_SUCCESS,
      payload: res.data,
    });
    dispatch(alertActions.setAlert("The blog has been deleted!", "success"));
  } catch (error) {
    dispatch({ type: types.DELETE_JOB_FAILURE, payload: error });
  }
};

export const jobActions = {
  getSingleJobWithApplicants,
  submitJobAd,
  updateEmployerInfo,
  getJobs,
  getSingleJob,
  submitCv,
  deleteJob
};
