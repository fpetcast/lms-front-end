import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import getCourseCategoryObject from '../../utils/fn';
import { DELETE_COURSE , SELECT_COURSE, UNSELECT_COURSE } from '../../store/constants/actionTypes';


export default function IndexCard({course, selected}) {
    const [showOptions, setShowOptions] = useState(false);
    const [cat, setCat] = useState(getCourseCategoryObject(course.category));
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const tags = course.tags.map((tag) => 
        <span className='px-1 py-1 text-zinc-600 text-xs rounded-md font-semibold bg-gray-300'>#{tag}</span>
    )

    function selectCourse(e) {
        console.log('SELECT OR UNSELECT',e.target.checked)

        dispatch({
            type : e.target.checked ? SELECT_COURSE : UNSELECT_COURSE,
            payload : {id: course.id}
        })
    }

    function goToCourse() {
        navigate('/courses/'+ course.id)
    }

    return (
        <div 
            className={"course-card flex flex-col rounded-lg overflow-hidden shadow-lg py-4 px-3 gap-3 relative " + (selected ? " bg-slate-200" : "bg-white")}
        >
            <div className="course-options flex justify-between">
                <input type="checkbox" className='cursor-pointer h-5 w-5 rounded-full shadow' onChange={(e) => selectCourse(e)}>
                </input>
                <FontAwesomeIcon className='w-5 h-5 cursor-pointer' icon={faEllipsisV} onClick={() => setShowOptions(!showOptions)}/>
            </div>
            {
                showOptions && 
                <ul className='absolute w-5/12 px-3 py-3 bg-palette2-grey-dark text-white rounded-lg shadow-lg top-10 list-none right-3 z-10'>
                    <li className='cursor-pointer hover:underline'>Edit</li>
                    <li className='cursor-pointer hover:underline' onClick={() => dispatch({type: DELETE_COURSE,payload: {id : course.id}})}>
                        Delete
                    </li>
                </ul>
            }
            <div onClick={() => goToCourse()} className='w-full flex gap-5 justify-center h-32 bg-blue-400 mb-4 cursor-pointer'>
            </div>
            <div className='course-body'>
                <p className={"mb-2 category px-2 py-2 text-sm text-white w-3/12 text-center font-semibold rounded-md "+cat.color}>
                    {cat.name}
                </p>
                <h2 onClick={() => goToCourse()} className='text-4xl font-bold mb-4 cursor-pointer'>
                    {course.title}
                </h2>
                <div className='tags flex flex-wrap gap-2'>
                    {tags}
                </div>
            </div>
        </div>
    )
}