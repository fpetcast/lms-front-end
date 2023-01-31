import { useParams } from 'react-router-dom';

function ViewEditCourse () {
    let {courseSlug} = useParams()

    return (
        <div>
            {courseSlug}
        </div>
    )
}

export default ViewEditCourse