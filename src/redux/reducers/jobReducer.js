import * as types from "../constants/jobConstants";
const initialState = [];

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SUBMIT_EMPLOYER_DETAILS_REQUEST:
    case types.SUBMIT_JOB_AD_REQUEST:
      return { ...state, loading: true };

    case types.SUBMIT_EMPLOYER_DETAILS_SUCCESS:
    case types.SUBMIT_JOB_AD_SUCCESS:
      return { ...state, loading: false };

    case types.SUBMIT_EMPLOYER_DETAILS_FAILURE:
    case types.SUBMIT_JOB_AD_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default jobReducer;
