import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const loginStatus = await fakeLogin(email, password);
        console.log('LOGIN STATUS',loginStatus)

        if(loginStatus) {
          if (loginStatus === true) {
            return true
          } else {
            return 'login_error_type'
          }
        }

      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {},
})

const fakeLogin = (email, password) =>  {
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

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer
