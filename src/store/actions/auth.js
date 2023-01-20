import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../constants/actionTypes";
  
  import AuthService from "../../api/services/auth.service.js";
  
export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
/*         dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        }); */
  
        return Promise.resolve();
      },
      (error) => {
        console.log(error)
/*         const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
   */
        dispatch({
          type: REGISTER_FAIL,
        });
  
/*         dispatch({
          type: SET_MESSAGE,
          payload: message,
        }); */
  
        return Promise.reject();
      }
    );
  };
  
export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
 /*        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString(); */
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
/*         dispatch({
          type: SET_MESSAGE,
          payload: message,
        }); */
  
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

      let data = await AuthService.fakeLogin(email,password)

      console.log('FAKE LOGIN RESPONSE',data)

      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('token',JSON.stringify(data.token))

      dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data.user , token : data.token },
      });

      console.log('APP STATE',getState())
    }
};