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
        actionPayload : {
            filter : 'ACTIVE'
        }
    },
    {
        label : 'Draft',
        actionPayload : {
            filter : 'DRAFT'
        }
    },
    {
        label : 'Archive',
        actionPayload : {
            filter : 'ARCHIVE'
        }
    },
]