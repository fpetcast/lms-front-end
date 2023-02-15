import {
    FILTER_COURSE_GRID,
    DELETE_COURSE,
    SELECT_COURSE,
    UNSELECT_COURSE,
    REMOVE_ALL_FILTERS
} from "../constants/actionTypes";

import fakeData from '../../data/fakeData.json'

const courses = JSON.parse(localStorage.getItem("courses")) ? JSON.parse(localStorage.getItem("courses")) : fakeData.courses;

function countByStatus() {
    let counterObject = {
        active : 0,
        draft: 0,
        archive: 0
    }

    courses.forEach((course) => {
        counterObject[course.status]++
    })

    return counterObject
}

let coursesInitialState = {
    coursesList : courses,
    filter : '',
    statusCounter : countByStatus()
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
                    //selectedCourses: state.selectedCourses.concat(payload.id),
                    coursesList: state.coursesList.map((course) => {
                        if (course.id == payload.id) {
                            course.selected = true
                        }
                        return course
                    })
                }
        case UNSELECT_COURSE:
                console.log('UNSELECTING COURSE',state.selectedCourses, payload.id)
                return {
                    ...state,
                    //selectedCourses: state.selectedCourses.filter((courseID) => courseID != payload.id),
                    coursesList: state.coursesList.map((course) => {
                        if (course.id == payload.id) {
                            course.selected = false
                        }
                        return course
                    })
                }
        case FILTER_COURSE_GRID:
            console.log('FILTERING STATE',state)
            return {
                ...state,
                filter : payload.filter,
                coursesList: state.coursesList.map((course) => {
                    if (course.status != payload.filter.toLowerCase()) {
                        course.filtered = true
                    }else{
                        course.filtered = false
                    }
                    return course
                })
            };
        case REMOVE_ALL_FILTERS:
            return {
                ...state,
                filter : '',
                coursesList: state.coursesList.map((course) => {
                    course.filtered == true ? course.filtered = false : course.filtered = null
                    return course
                })
            }
        default:
            return state
    }
}