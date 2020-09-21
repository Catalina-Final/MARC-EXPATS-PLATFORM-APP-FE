import * as types from "../constants/jobConstants";
const initialState = {
  jobList: []
};

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_JOBS_REQUEST:
    case types.SUBMIT_EMPLOYER_DETAILS_REQUEST:
    case types.SUBMIT_JOB_AD_REQUEST:
      return { ...state, loading: true };

    case types.GET_ALL_JOBS_SUCCESS:
      return { ...state, loading: false, jobList: payload.jobAds }
    case types.SUBMIT_EMPLOYER_DETAILS_SUCCESS:
    case types.SUBMIT_JOB_AD_SUCCESS:
      return { ...state, loading: false };

    case types.GET_ALL_JOBS_FAILURE:
    case types.SUBMIT_EMPLOYER_DETAILS_FAILURE:
    case types.SUBMIT_JOB_AD_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default jobReducer;
