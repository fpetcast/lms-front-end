import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../constants/actionTypes";
  
import AuthService from "../../api/services/auth.service.js";
  
export const register = (name, surname , email, password, role = 'tutor') => (dispatch) => {
    return AuthService.register(name, surname, email, password,role).then(
      (res) => {
        console.log('REGISTER SUCCESS',res)

        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        return Promise.resolve();
      },
      (error) => {
        console.log('REGISTER FAIL',error)

        dispatch({
          type: REGISTER_FAIL,
        });

        return Promise.reject();
      }
    );
  };
  
export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (res) => {
        localStorage.setItem('user',JSON.stringify(res.user))
        localStorage.setItem('token',res.token)
  
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: res.user , token : res.token },
        });
  
        return Promise.resolve();
      },
      (error) => {
  
        console.log('LOGIN ERROR',error)

        dispatch({
          type: LOGIN_FAIL,
          payload: { error : error},
        });
  
        return Promise.reject();
      }
    );
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

      if(res.status == true) {
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

        return Promise.resolve(false)
      }

    }
};