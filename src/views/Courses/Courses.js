import IndexCard from '../../components/Courses/IndexCard';
import { useSelector , useDispatch } from 'react-redux'
import { filterCoursesButtons } from '../../utils/enum';
import { Button } from '../../components/Atoms/Btn';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FILTER_COURSE_GRID, SYNC_FILTERED } from '../../store/constants/actionTypes';
/* import { useEffect } from 'react'; */

function Courses() {
    const courses = useSelector((state) => state.courses.coursesList)
    const coursesFiltered = useSelector((state) => state.courses.filteredCourses)
    const selectedCourses = useSelector((state) => state.courses.selectedCourses)
    const activeFilter = useSelector((state) => state.courses.filter)
    const dispatch = useDispatch()

    
    function isSelected(ID) {
        console.log('IS SELECTED',selectedCourses)
        return selectedCourses.find((courseID) => ID == courseID)
    }

    const filterCourseAction = (payload) => {
        console.log('FILTER ACTION',payload)
        dispatch({type: FILTER_COURSE_GRID, payload })
    }

    const courseGrid = courses.map((course) => 
        <IndexCard
            key={course.id}
            course={course}
            selected={isSelected(course.id)}
        >
        </IndexCard>
    )

    const courseFilteredGrid = coursesFiltered.map((course) => 
        <IndexCard
            key={course.id}
            course={course}
        >
        </IndexCard>
    )

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
            className={"shadow-md px-2 py-2 rounded-md text-lg " + (isBtnActive(btn.actionPayload.filter))}
            onClick={() => filterCourseAction(btn.actionPayload)}
        >
            {btn.label}
        </button>
    })

    console.log('FILTER BTNS',filterButtons)

    return ( 
        <div className="courses-index px-20 mt-10">
            <div className='topbar'>
            </div>
            <h1 className='title text-5xl font-bold mb-8'>
                Courses
            </h1>
            <div className='filters flex justify-between gap-10 mb-10 items-end'>
                <div className='flex flex-col gap-2'>
                    <p className='text-zinc-600 text-lg mr-2'>Status:</p>
                    <div className='flex gap-3'>
                        {filterButtons}
                    </div>
                </div>
                <div>
                    <button
                        className='shadow-md flex gap-1 items-center px-2 py-2 rounded-md text-white bg-blue-400'
                    >
                        <FontAwesomeIcon className='' icon={faFilter}></FontAwesomeIcon>
                        <span>All Filters</span>
                    </button>
                </div>
            </div>
            <div className='course-grid grid grid-cols-3 gap-5'>
                {activeFilter !== '' ? courseFilteredGrid : courseGrid}
            </div>
        </div>
     );
}

export default Courses;