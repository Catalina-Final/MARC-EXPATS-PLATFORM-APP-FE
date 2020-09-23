import * as types from "../constants/employerConstants";
import api from "../api";

const getEmployers = () => async (dispatch) => {
    dispatch({type: types.GET_EMPLOYERS_REQUEST, payload:null})
    try {
      const res = await api.get("/employer/all")
      dispatch({type: types.GET_EMPLOYERS_SUCCESS, payload: res.data.data.employers})
    } catch (error) {
      dispatch({type: types.GET_EMPLOYERS_FAILURE, payload:null})
    }
  }

export const employerActions = {
    getEmployers
}