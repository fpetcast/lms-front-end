import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default function IndexCard({course}) {

    return (
        <div className="course-card bg-white flex flex-col rounded overflow-hidden shadow-lg py-2 px-2 gap-3">
            <div className="course-options flex justify-between">
                <input type="checkbox">
                </input>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            <div className='w-full flex gap-5 justify-center h-32 bg-blue-400'>
            </div>
            <div className='course-body'>
                <p className='category'>{course.category}</p>
                <h2 className='title'>{course.title}</h2>
            </div>
        </div>
    )
}