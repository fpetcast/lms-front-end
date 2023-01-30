import IndexCard from '../../components/Courses/IndexCard';
import { useSelector , useDispatch } from 'react-redux'
import { filterCoursesButtons } from '../../utils/enum';
import { FILTER_COURSE_GRID } from '../../store/constants/actionTypes';

function Courses() {
    const courses = useSelector((state) => state.courses.filteredCourses)
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

    console.log('ENUM FILTER BTNS',filterCoursesButtons)

    const filterButtons = filterCoursesButtons.map((btn) => {
       return <button 
            key={btn.label} 
            className="bg-white shadow-md px-2 py-2 rounded-md" 
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
            <div className='filters flex justify-center gap-5 mb-5'>
                {filterButtons}
            </div>
            <div className='course-grid grid grid-cols-3 gap-5'>
                {courseGrid}
            </div>
        </div>
     );
}

export default Courses;