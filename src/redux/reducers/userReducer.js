import * as types from "../constants/userConstants";
const initialState = {
  user: {},
  jobApplications: [],
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
  myJobs: [],
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MY_JOBS_REQUEST:
    case types.GET_JOB_APPS_REQUEST:
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        user: { ...payload.user },
        accessToken: payload.accessToken,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_MY_JOBS_SUCCESS:
      return { ...state, loading: false, myJobs: payload };

    case types.GET_JOB_APPS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobApplications: payload.jobApps.jobApplications,
      };

    case types.GET_JOB_APPS_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
