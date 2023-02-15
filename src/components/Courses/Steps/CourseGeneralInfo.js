import { Input } from "../../Atoms/Input";
import { courseGeneralInfo } from "../../../utils/config";
import Select from '../../Atoms/Select'

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

/*     function formValidation(type,val) {
        switch (type) {
            case 'text': case 'textaerea':
                if(val === '' || !val) return false
                return true
            default:
                return true
        }
    } */

    function handleSelect(option) {
        console.log('Handle select',option)

        updateCourseData((prevData) => (
            {
                ... prevData,
                [option.key] : option.value
            }
        ))
    }

    function handleMultiSelect(options) {
        console.log('Handle multi select',options)

        updateCourseData((prevData) => (
            {
                ... prevData,
                [options[0].key] : options
            }
        ))
    }


    const courseInfoForm = courseGeneralInfo.map((field) =>
        {
            switch (field.type) {
                case 'text': case 'textarea':
                    return  <Input
                                key={field.key}
                                value={course[field.key]}
                                onChange={handleChangeData}
                                name={field.key}
                                label={field.label}
                                id={field.id}
                                type={field.type}
                                inputClass={field.class}
                            ></Input>
                case 'select': 
                    return  <Select 
                                key={field.id} 
                                name={field.id} 
                                options={field.options}
                                label={field.label}
                                onChange={field.multiple ? handleMultiSelect : handleSelect}
                                value={course[field.key]}
                                isMultiple={field.multiple}
                            >
                            </Select>
                default:
                    return ''
            }
        }
    )

    function validateStep(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        
        [... data.entries()].forEach((input) => {
            console.log(input)
        })
    }

    return(
        <form onSubmit={validateStep}>
            {courseInfoForm}
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default CourseGeneralInfo;