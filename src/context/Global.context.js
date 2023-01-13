/* import React from 'react';
import { useReducer , useContext } from 'react';
import AppReducer   from '../reducer/reducer'

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}

export const GlobalContext = React.createContext(initialState);
export const GlobalConsumer = React.createContext(undefined);


export const GlobalContextProvider = props => {
  const [globalState, dispatch] = useReducer(AppReducer,initialState)

  async function login(email, password) {
    const loginStatus = await fetchLogin(email, password);

    console.log('LOGIN STATUS',loginStatus)

    if(loginStatus) {
      if (loginStatus === true) {
        console.log('STATE AFTER DISPATCH',globalState)
        return true
      } else {
        return 'login_error_type'
      }
    }

  }

  return (
    <GlobalContext.Provider value={{globalState,login}}>
      <GlobalConsumer.Provider value={dispatch}>
        {props.children}
      </GlobalConsumer.Provider>
    </GlobalContext.Provider>
  );
};

// fake login
const fetchLogin = (email, password) =>  {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (email === 'admin' && password === 'admin') {
        res(true)
      } else {
        rej(false)
      }
    }, 1000)
  })  
}
 */