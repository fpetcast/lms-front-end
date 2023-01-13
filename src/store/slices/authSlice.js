import { createSlice } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer';

const initialState = {
    loading: false,
    user: {}, // for user object
    isLoggedIn: false,
    token: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: authReducer,
    extraReducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer
