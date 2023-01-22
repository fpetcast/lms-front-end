import AuthService from "../../api/services/auth.service.js";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../constants/actionTypes";
  
export const register = (name, surname , email, password, role = 'tutor') => {
  return async (dispatch) => {
    let res = await AuthService.register(name, surname, email, password, role)

    if(res.status) {
      console.log('REGISTER SUCCESS',res)

      dispatch({
        type: REGISTER_SUCCESS,
      });

      return Promise.resolve(true);
    }else {
      console.log('REGISTER FAIL',res.error)

      dispatch({
        type: REGISTER_FAIL,
      });

      return Promise.reject(false);
    }

  }
};
  
export const login = (username, password) => {
  return async (dispatch) => {
    let res = await AuthService.login(username, password)

    console.log('LOGIN RESPONSE',res)

    if(res.status) {
      dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: res.data.user , token : res.data.token },
      });

      localStorage.setItem('user',JSON.stringify(res.data.user))
      localStorage.setItem('token',res.data.token)
  
      return Promise.resolve(res.data);
    }else {
      console.log('LOGIN ERROR',res.error)

      dispatch({
        type: LOGIN_FAIL,
        payload: { error : res.error},
      });

      return Promise.reject(res.error);
    }
  }
};
  
export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
};

export const fakeLogin = (email,password) => {
    return async (dispatch,getState) => {
      console.log('ACTION FAKE LOGIN',dispatch)

      let res = await AuthService.fakeLogin(email,password)

      if(res.status === true) {
        console.log('FAKE LOGIN RESPONSE',res.data)

        localStorage.setItem('user',JSON.stringify(res.data.user))
        localStorage.setItem('token',res.data.token)
  
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: res.data.user , token : res.data.token },
        });
  
        console.log('APP STATE',getState())
        
        return Promise.resolve(true)
      }else {
        console.log('FAKE LOGIN ERROR',res)

        dispatch({
          type: LOGIN_FAIL,
          payload: { error : res.error},
        });

        return Promise.reject(res.error)
      }

    }
};