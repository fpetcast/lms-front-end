import VideoUpload from "../components/Courses/Steps/VideoUploads"
import CourseGeneralInfo from "../components/Courses/Steps/CourseGeneralInfo"

export const sidebarMenu = [
    {
        label : 'Dashboard',
        route : '/'
    },
    {
        label : 'Courses',
        route : '/courses',
    },
    {
        label : 'Create Course',
        route : '/create-course',
    },
]


export const filterCoursesButtons = [
    {
        label : 'Active',
        status : 'active',
        actionPayload : {
            filter : 'ACTIVE'
        }
    },
    {
        label : 'Draft',
        status : 'draft',
        actionPayload : {
            filter : 'DRAFT'
        }
    },
    {
        label : 'Archive',
        status : 'archive',
        actionPayload : {
            filter : 'ARCHIVE'
        }
    },
]

export const courseCategories = [
    {
        id: 1,
        name : 'IOT',
        color : 'bg-blue-400',
        slug: 'iot'
    },
    {
        id: 2,
        name : 'AI',
        color : 'bg-red-500',
        slug: 'ai'
    },
    {
        id: 3,
        name : 'CLOUD',
        color : 'bg-blue-500',
        slug: 'cloud'
    }
]

export const stepperComponents = [
    {
        label : 'step 1',
        component : <CourseGeneralInfo></CourseGeneralInfo> 
    },
    {
        label : 'step 2',
        component : <VideoUpload></VideoUpload>
    },
]

export const courseStructure = {
    title: '',
    author: '',
    description: '',
    category: '',
    price: 0,
    level: '',
    thumbnail: '',
    video_preview: '',
    lang: '',
    global_duration: '',
    tags: [],
    teachers: [],
    sections: [
        {
            title : '',
            duration : '',
            elements : [
                {
                    type: '',
                    document_path: '',
                    video_id: '',
                    quiz_id: '',
                }
            ]
        }
    ]
}