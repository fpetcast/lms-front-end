import { UPDATE_CREATE_COURSE , UPDATE_COURSE_PROP } from "../constants/actionTypes";

const createCourseInitialState = {
    title: 'nome corso',
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


export default function createCourseReducer(state = createCourseInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CREATE_COURSE:
            console.log('UPDATE COURSE',state)
            state[payload.keyProp] = payload.valueProp
            return state;
        case UPDATE_COURSE_PROP:
            console.log('UPDATE COURSE PROP',state)
            state[payload.keyProp] = payload.valueProp
            return {
                ...state
            };
        default:
            return state;
    }
}

