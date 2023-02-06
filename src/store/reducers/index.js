import { combineReducers } from "redux";
import auth from "./authReducer";
import courses from "./coursesReducer";
import newCourse from './createCourseReducer';

export default combineReducers({
  auth,
  courses,
  newCourse
});