import {
    FILTER_COURSE_GRID,
    DELETE_COURSE,
    SELECT_COURSE,
    SYNC_FILTERED,
    UNSELECT_COURSE,
    REMOVE_ALL_FILTERS
} from "../constants/actionTypes";

import fakeData from '../../data/fakeData.json'

const courses = JSON.parse(localStorage.getItem("courses"));

let coursesInitialState = {
    coursesList : fakeData.courses ? fakeData.courses : [],
    filter : '',
    filteredCourses : fakeData.courses.filter((course) => course.status == 'active'),
    selectedCourses: [],
}

export default function coursesReducer(state = coursesInitialState, action) {
    const { type, payload } = action;

    console.log(action)

    switch (type) {
        case DELETE_COURSE:
            console.log('DELETING COURSE',state)
            return {
                ...state,
                coursesList: state.coursesList.filter((course) => course.id != payload.id),
            }
        case SELECT_COURSE:
                console.log('SELECTING COURSE',state.selectedCourses, payload.id)
                return {
                    ...state,
                    selectedCourses: state.selectedCourses.concat(payload.id),
                }
        case UNSELECT_COURSE:
                console.log('UNSELECTING COURSE',state.selectedCourses, payload.id)
                return {
                    ...state,
                    selectedCourses: state.selectedCourses.filter((courseID) => courseID != payload.id),
                }
        case FILTER_COURSE_GRID:
            console.log('FILTERING STATE',state)
            return {
                ...state,
                filter : payload.filter,
                filteredCourses : state.coursesList.filter((course) => course.status == payload.filter.toLowerCase())
            };
        case REMOVE_ALL_FILTERS:
            return {
                ...state,
                filter : '',
                filteredCourses : []
            }
        case SYNC_FILTERED:
            console.log('SYNC FILTERED',state)
            return {
                ...state,
                filteredCourses: state.coursesList,
            }
        default:
            return state
    }
}