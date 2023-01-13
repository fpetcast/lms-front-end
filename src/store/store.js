import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { globalSearchSlice, imageSearchSlice } from "./slices.js"

const reducers = combineReducers({
  [globalSearchSlice.name]: globalSearchSlice.reducer,
  [imageSearchSlice.name]: imageSearchSlice.reducer,
})

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
})
