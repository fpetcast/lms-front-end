import {
    LOGOUT,
    LOGIN,
    REGISTER,
  } from '../constants/actionTypes';
  
const defaultState = {
    appName: 'Conduit',
    token: null,
};

export default (state = defaultState, action) => {
switch (action.type) {
    case LOGOUT:
    return { ...state, redirectTo: '/', token: null, currentUser: null };
    case LOGIN:
    case REGISTER:
    return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
    };
    default:
    return state;
}
};