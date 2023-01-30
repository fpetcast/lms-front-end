import { combineReducers } from "redux";
import auth from "./authReducer";
import courses from "./coursesReducer";

export default combineReducers({
  auth,
  courses
});