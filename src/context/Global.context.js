import React from 'react';
import { useState } from 'react';

export const GlobalContext = React.createContext(null);

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}

export const GlobalContextProvider = props => {
  const [state, setState] = useState(initialState);

  const setLoginPending = (isLoginPending) => setState({isLoginPending});
  const setLoginSuccess = (isLoggedIn) => setState({...state,isLoggedIn});
  const setLoginError = (loginError) => setState({loginError});

  async function login(email, password) {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    const loginStatus = await fetchLogin(email, password);

    console.log('LOGIN STATUS',loginStatus)

    if(loginStatus) {
      setLoginPending(false);

      if (loginStatus === true) {
        console.log('LOGIN SUCCESS')
        setLoginSuccess(true);
      } else {
        console.log('LOGIN ERROR')
        setLoginError('Not Authenticated');
      }
    }
  }

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

// fake login
const fetchLogin = (email, password) =>  {
  try {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'admin' && password === 'admin') {
          res(true)
        } else {
          rej(false)
        }
      }, 1000)
    })  
  } catch (error) {
    console.log(error)
  }
}
