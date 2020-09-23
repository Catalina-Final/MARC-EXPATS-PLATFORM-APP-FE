import * as types from "../constants/authConstants";

const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.VERIFY_EMAIL_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
      return { ...state, loading: true };

    case types.VERIFY_EMAIL_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
    case types.LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...payload.user,
        },
        loading: false,
        accessToken: payload.accessToken,
      };

    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: {
          ...payload.user,
        },
      };

    case types.VERIFY_EMAIL_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    case types.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
