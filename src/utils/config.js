export const courseGeneralInfo = [
    {
        label: 'Title',
        type : 'text',
        id: 'title',
        key: 'title',
        class: 'basic',
        validation : function(val) {
            if(val === '') return false;
            return true;
        },
    },
    {
        label: 'Description',
        type : 'textarea',
        id: 'description',
        key: 'description',
        class: 'basic',
        validation : (val) => {
            if(val === '') return false;
            return true;
        },
    },
    {
        label: 'Category',
        type: 'select',
        id: 'category',
        key: 'category',
        multiple: false,
        class: 'custom-select',
        options: [
            {
                value: 'cat 1',
                key: 'category',
                label: 'Category 1'
            },
            {
                value: 'cat 2',
                key: 'category',
                label: 'Category 2'
            }
        ]
    },
    {
        label: 'Tags',
        type: 'select',
        id: 'tags',
        key: 'tags',
        multiple: true,
        class: 'custom-select',
        options: [
            {
                value: 'tag 1',
                key: 'tags',
                label: 'Tag 1'
            },
            {
                value: 'tag 2',
                key: 'tags',
                label: 'Tag 2'
            }
        ]
    }
]