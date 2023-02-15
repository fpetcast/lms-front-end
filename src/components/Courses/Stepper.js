import { useState } from "react";
import CourseGeneralInfo from "./Steps/CourseGeneralInfo";
import VideoUpload from "./Steps/VideoUploads";
import { courseStructure } from "../../utils/enum";

const Stepper  = () => {
    const [step, setStep] = useState(0)
    const [courseData, setCourseData] = useState(courseStructure)
    console.log('RERENDER STEPPER',courseData)

    const stepperComponents = [
        {
            label : 'step 1',
            component : <CourseGeneralInfo course={courseData}  updateCourseData={setCourseData}></CourseGeneralInfo> 
        },
        {
            label : 'step 2',
            component : <VideoUpload course={courseData} updateCourseData={setCourseData}></VideoUpload>
        },
    ]

    function nextStep() {
        setStep((prev) => prev + 1)
    }

    function prevStep() {
        setStep((prev) => prev - 1)
    }

    return(
        <div className="stepper-container">
            <div>
                <button onClick={() => prevStep()}>
                    Prev
                </button>
                <button onClick={() => nextStep()}>
                    Next
                </button>
            </div>
            {stepperComponents[step].component}
        </div>
    )
}

export default Stepper;