import * as types from "../constants/jobConstants";
const initialState = {
  jobList: [],
  jobDetails: null,
  fullJobDetails: null,
  totalPageNum: 1,
};

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.DELETE_JOB_REQUEST:
    case types.GET_SINGLE_JOB_WITH_APPLICANTS_REQUEST:
    case types.SUBMIT_CV_TO_EMPLOYER_REQUEST:
    case types.GET_SINGLE_JOB_REQUEST:
    case types.GET_ALL_JOBS_REQUEST:
    case types.SUBMIT_EMPLOYER_DETAILS_REQUEST:
    case types.SUBMIT_JOB_AD_REQUEST:
      return { ...state, loading: true };

    case types.GET_SINGLE_JOB_WITH_APPLICANTS_SUCCESS:
      return { ...state, loading: false, fullJobDetails: payload };

    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        fullJobDetails: null,
        redirectTo: "__GO_BACK__",
      };

    case types.GET_SINGLE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobDetails: payload,
      };
    case types.GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobList: payload.jobAds,
        totalPageNum: payload.totalPages,
      };
    case types.SUBMIT_CV_TO_EMPLOYER_SUCCESS:
    case types.SUBMIT_EMPLOYER_DETAILS_SUCCESS:
    case types.SUBMIT_JOB_AD_SUCCESS:
      return { ...state, loading: false };

    case types.DELETE_JOB_FAILURE:
    case types.GET_SINGLE_JOB_WITH_APPLICANTS_FAILURE:
    case types.SUBMIT_CV_TO_EMPLOYER_FAILURE:
    case types.GET_SINGLE_JOB_FAILURE:
    case types.GET_ALL_JOBS_FAILURE:
    case types.SUBMIT_EMPLOYER_DETAILS_FAILURE:
    case types.SUBMIT_JOB_AD_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default jobReducer;
