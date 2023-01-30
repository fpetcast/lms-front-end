import {
    FILTER_COURSE_GRID,
    DELETE_COURSE,
    SELECT_COURSE
} from "../constants/actionTypes";

import fakeData from '../../data/fakeData.json'

const courses = JSON.parse(localStorage.getItem("courses"));

let coursesInitialState = {
    coursesList : fakeData.courses ? fakeData.courses : [],
    filter : 'ACTIVE',
    filteredCourses : fakeData.courses.filter((course) => course.status == 'active')
}

export default function coursesReducer(state = coursesInitialState, action) {
    const { type, payload } = action;

    console.log(action)

    switch (type) {
        case FILTER_COURSE_GRID:
            console.log('FILTERING STATE',state)
            return {
                ...state,
                filter : payload.filter,
                filteredCourses : state.coursesList.filter((course) => course.status == payload.filter.toLowerCase())
            };
        default:
            return state
    }
}