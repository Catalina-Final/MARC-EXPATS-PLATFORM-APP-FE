import * as types from "../constants/employerConstants";
const initialState = {
  employerList: [],
};

const employerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EMPLOYERS_REQUEST:
      return { ...state, loading: true };

    case types.GET_EMPLOYERS_SUCCESS:
      return { ...state, loading: false, employerList: payload };

    case types.GET_EMPLOYERS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default employerReducer;
