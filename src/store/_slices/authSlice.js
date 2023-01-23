import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isLoggedIn: false,
    token: null,
    error: null,
    success: false,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: null,
    extraReducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer
