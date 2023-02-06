
function CourseGeneralInfo({course, updateCourseData}) {

    function handleChangeData(e) {
        const {name , value} = e.target

        updateCourseData((prevData) => (
            {
                ... prevData,
                [name] : value
            }
        ))
    }

    return(
        <form >
            <input 
                    type="text" 
                    name="title"
                    value={course.title}
                    onChange={handleChangeData}
                    className="custom-input text-lg"
                    required 
            />
            <input 
                    type="textarea" 
                    name="description"
                    value={course.description}
                    onChange={handleChangeData}
                    className="custom-input text-lg"
                    required 
            />
            <select>
                <option>category</option>
            </select>
            <button type="submit">
                Submit step 1
            </button>
        </form>
    )
}

export default CourseGeneralInfo;