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