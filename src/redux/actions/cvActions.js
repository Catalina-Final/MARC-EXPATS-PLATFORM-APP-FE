import * as types from "../constants/cvConstants";
import api from "../api";
// import { alertActions } from "./alertActions";

const submitCv = (formData) => async (dispatch) => {
  dispatch({ type: types.UPDATE_CV_REQUEST, payload: null });
  try {
    const res = await api.post("/users/cv", {
      formData,
    });
    dispatch({ type: types.UPDATE_CV_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_CV_FAILURE, payload: error });
  }
};

export const cvActions = {
  submitCv,
};
