import * as types from "../constants/cvConstants";
const initialState = [];

const cvReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SUBMIT_CV_REQUEST:
      return { ...state, loading: true };

    case types.SUBMIT_CV_SUCCESS:
      return { ...state, loading: false };

    case types.SUBMIT_CV_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default cvReducer;