import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../constants/actionTypes";
  
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const authInitialState = {
  user: user ? user : null,
  isLoggedIn: user ? true : false,
  token: token ? token : null,
  error: null,
  success: false,
  loading: false,
}

export default function authReducer(state = authInitialState, action) {
    const { type, payload } = action;

    console.log('DISPATCH ACTION',action)
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          token: payload.token,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: payload.error
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          token: null
        };
      default:
        return state;
    }
}