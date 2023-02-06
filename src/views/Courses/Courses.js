import IndexCard from '../../components/Courses/IndexCard';
import { useSelector , useDispatch } from 'react-redux'
import { filterCoursesButtons } from '../../utils/enum';
import { faFilter , faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FILTER_COURSE_GRID, REMOVE_ALL_FILTERS} from '../../store/constants/actionTypes';
import { useState , useMemo } from 'react';

function Courses() {
    const courses = useSelector((state) => state.courses.coursesList)
    const activeFilter = useSelector((state) => state.courses.filter)
    const statusCounter = useSelector((state) => state.courses.statusCounter)


    const dispatch = useDispatch()

    const filterCourseAction = (payload) => {
        console.log('FILTER ACTION',payload)
        dispatch({type: FILTER_COURSE_GRID, payload })
    }

    const courseGrid = courses.map((course) => 
        <IndexCard
            key={course.id}
            course={course}
        >
        </IndexCard>
    )

    /*const courseFilteredGrid = coursesFiltered.map((course) => 
        <IndexCard
            key={course.id}
            course={course}
            selected={isSelected(course.id)}
        >
        </IndexCard>
    ) */

    console.log('ENUM FILTER BTNS',filterCoursesButtons)

    function isBtnActive(filterType) {
        if(filterType == activeFilter) {
            return 'bg-white text-black'
        }else {
            return 'bg-gray-200 text-zinc-500'
        }
    }

    const filterButtons = filterCoursesButtons.map((btn) => {
       return <button 
            key={btn.label} 
            className={"shadow-md px-3 py-2 rounded-md text-lg flex items-center gap-2 font-semibold " + (isBtnActive(btn.actionPayload.filter))}
            onClick={() => filterCourseAction(btn.actionPayload)}
        >
            <span className='text'>{btn.label}</span>
            <span className=''>{statusCounter[btn.status]}</span>
        </button>
    })

    console.log('FILTER BTNS',filterButtons)

    return ( 
        <div className="courses-index">
            <div className='topbar'>
            </div>
            <h1 className='title text-5xl font-bold mb-10'>
                Courses
            </h1>
            <div className='filters flex justify-between gap-10 mb-10 items-end'>
                <div className='flex gap-3'>
                        {filterButtons}
                </div>
                <div className='flex gap-3'>
                    {
                        activeFilter != '' &&  
                        <button
                            className='shadow-md flex gap-1 text-lg items-center px-2 py-2 rounded-md text-white bg-red-500'
                            onClick={() => dispatch({type: REMOVE_ALL_FILTERS})}
                        >
                            <FontAwesomeIcon className='' icon={faFilter}></FontAwesomeIcon>
                            <span>Reset Filters</span>
                        </button>
                    }
                    <button
                        className='shadow-md flex gap-1 text-lg items-center px-2 py-2 rounded-md text-white bg-blue-400'
                    >
                        <FontAwesomeIcon className='' icon={faFilter}></FontAwesomeIcon>
                        <span>All Filters</span>
                    </button>
                </div>
            </div>
            <div className='course-grid grid grid-cols-3 gap-5'>
                {courseGrid}
            </div>
        </div>
     );
}

export default Courses;